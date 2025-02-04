"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("./db");
const zod_1 = __importDefault(require("zod"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const signupSchema = zod_1.default.object({
    username: zod_1.default
        .string()
        .min(3, { message: "Username must be at least 3 characters long" }),
    password: zod_1.default
        .string()
        .min(6, { message: "Password must be atleast 6 characters long" }),
});
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //TO ADD: zod validation, hash the password
    const afterZodRes = signupSchema.safeParse(req.body);
    if (!afterZodRes.success) {
        const zodError = afterZodRes.error.errors;
        res.status(400).json({ message: zodError });
    }
    else {
        const saltRounds = 10;
        const username = afterZodRes.data.username;
        const password = afterZodRes.data.password;
        const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
        try {
            yield db_1.UserModel.create({
                username,
                password: hashedPassword,
            });
            res.status(200).json({
                message: "User signed up",
            });
        }
        catch (err) {
            res.status(411).json({
                message: "User already exists",
            });
        }
    }
}));
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
        throw new Error("Fields cannot be left empty");
    }
    const existingUser = yield db_1.UserModel.findOne({
        username,
    });
    if (existingUser) {
        if (!existingUser.password) {
            throw new Error("Password cannot be empty");
        }
        const isMatch = yield bcrypt_1.default.compare(password, existingUser.password);
        if (!isMatch) {
            res.status(401).json({
                message: "Invalid password, please enter the correct password",
            });
        }
        else {
            const token = jsonwebtoken_1.default.sign({
                id: existingUser._id,
            }, config_1.JWT_PASSWORD);
            res.status(200).json({
                token,
            });
        }
    }
    else {
        res.status(403).json({
            message: "Incorrect credentials",
        });
    }
}));
app.post("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.body.title;
    const link = req.body.link;
    const type = req.body.type;
    console.log("here");
    try {
        yield db_1.ContentModel.create({
            title,
            link,
            type,
            //@ts-ignore //TODO: handle the ts error here
            userId: req.userId,
            tags: [],
        });
        res.status(200).json({
            message: "Content added succesfully",
        });
    }
    catch (err) {
        res.status(403).json({
            message: "some error occured",
        });
    }
}));
app.get("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId;
    const content = yield db_1.ContentModel.find({
        userId: userId,
    }).populate("userId", "username");
    res.json({
        content,
    });
}));
app.delete("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contentId = req.body.contentId;
    yield db_1.ContentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId,
    });
    res.json({
        message: "Deleted the content",
    });
}));
app.post("/api/v1/brain/share", (req, res) => { });
app.get("api/v1/brain/:shareLink", (req, res) => { });
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
