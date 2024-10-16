// const express = require("express");
// const app = express();

// app.listen(3000);

// function sumOfNo(n) {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// app.get("/", function (req, res) {
//   let n = req.query.n;
//   const ans = sumOfNo(n);
//   res.send(`The sum is ${ans}`);
//   //   res.send("There you go!");
// });

const express = require("express");
const app = express();

const users = [
  {
    name: "John",
    kidneys: [{ health: true }, { health: false }],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const JohnKidney = users[0].kidneys;
  const no_of_kidneys = JohnKidney.length;

  let healthy_kidneys = 0,
    unhealthy_kidneys = 0;
  for (i = 0; i < no_of_kidneys; i++) {
    if (JohnKidney[i].health) {
      healthy_kidneys++;
    }
    unhealthy_kidneys = no_of_kidneys - healthy_kidneys;
  }

  res.json({
    no_of_kidneys,
    healthy_kidneys,
    unhealthy_kidneys,
  });
});

app.post("/", function (req, res) {
  const new_kidney = req.body.new_kidney;
  users[0].kidneys.push({ health: new_kidney });
  res.json({ message: "Kidney added successfully!" });
});

app.put("/", function (req, res) {
  if (check()) {
    for (i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].health = true;
      res.json({});
    }
  } else {
    res.status(411).json({ message: "No unhealthy kidneys to remove!" });
  }
});

app.delete("/", function (req, res) {
  if (check()) {
    let new_array = [];
    for (i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].health) {
        new_array.push({
          health: true,
        });
        // new_array.push(users[0].kidneys[i]);
      }
      users[0].kidneys = new_array;
    }
    res.json({});
  } else {
    res.status(411).json({ message: "No unhealthy kidneys to delete!" });
  }
});

function check() {
  let unhkid = false;
  for (i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].health) {
      unhkid = true;
    }
  }
  return unhkid;
}

app.listen(3000);

//Code for hospital management system
