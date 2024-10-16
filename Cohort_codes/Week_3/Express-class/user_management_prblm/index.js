// Project 1: User Management API
// Build an API to manage a list of users. Each user should have a name, email, and age.

// GET /users: Return all users (Odd id and even id).
// POST /users: Add a new user with a name, email, and age.
// PUT /users/:id: Update the user details for a specific user (based on ID).
// DELETE /users/:id: Delete a specific user.

// Bonus:
// Add validation to ensure the user data (like email format or age) is correct before adding/updating users.

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;
app.listen(port);

const users = [
  {
    id: 1,
    name: "Aayush Dhakal",
    email: "ayush@example.com",
    age: 19,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    age: 25,
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alicej@example.com",
    age: 35,
  },
  {
    id: 4,
    name: "Bob Williams",
    email: "bobwilliams@example.com",
    age: 40,
  },
  {
    id: 5,
    name: "Emily Davis",
    email: "emilydavis@example.com",
    age: 28,
  },
  {
    id: 6,
    name: "Michael Brown",
    email: "michaelbrown@example.com",
    age: 32,
  },
  {
    id: 7,
    name: "Sarah Wilson",
    email: "sarahwilson@example.com",
    age: 29,
  },
  {
    id: 8,
    name: "David Lee",
    email: "davidlee@example.com",
    age: 45,
  },
  {
    id: 9,
    name: "Sophia Miller",
    email: "sophiamiller@example.com",
    age: 22,
  },
  {
    id: 10,
    name: "James Anderson",
    email: "jamesanderson@example.com",
    age: 38,
  },
  {
    id: 11,
    name: "Isabella Martin",
    email: "isabellamartin@example.com",
    age: 26,
  },
  {
    id: 12,
    name: "Chris Thompson",
    email: "christhompson@example.com",
    age: 34,
  },
  {
    id: 13,
    name: "Olivia Garcia",
    email: "oliviagarcia@example.com",
    age: 31,
  },
  {
    id: 14,
    name: "Daniel Martinez",
    email: "danielmartinez@example.com",
    age: 27,
  },
  {
    id: 15,
    name: "Emma Taylor",
    email: "emmataylor@example.com",
    age: 23,
  },
];

app.get("/", (req, res) => {
  const odd_id_users = [];
  const even_id_users = users.filter((x) => {
    if (x.id % 2 == 0) {
      return x;
    } else {
      odd_id_users.push(x);
    }
  });
  res.json({
    odd_id_users,
    even_id_users,
  });
});

app.post("/", (req, res) => {
  const new_user = req.body;
  users.push(new_user);

  res.json({ message: "User added succesfully" });
});

//app.put("/register/:id")  res.send(req.params)
//localhost:4000/register/1234
//Esley k grxa vnda kheri
//   {
//      "id":"1234"
//   }

app.put("/users/:id", (req, res) => {
  //Suruma get the input ki kun chai id no ko data update grnu xa?
  const user_id_to_update = req.params.id; //done
  let updated_data = req.body;

  //aba check if the user exists, if it does then store the index to update array, if not display error
  const user_index = users.findIndex(
    (element) => element.id == user_id_to_update
  ); //user index aayo esley

  if (user_index == -1) {
    //findIndex returns -1 yadi kunai pani element ley condition satisfy garena
    res.status(400).send("user not found!");
  } else {
    users[user_index].name = updated_data.name;
    users[user_index].email = updated_data.email;
    users[user_index].age = updated_data.age;
    res.json({
      message: "User with the given id has been updated successfully",
    });
  }
});

//Process of what happens in put :
//localhost:4000/users/7  Now i have user index of 7 , which means 7th user data will get updated. Esma you only write the url. URL write grna saath i have the index now
// Then i enter the sample data using put and send which will be recieved by updated data
//Finally the array will get updated

//  Sample for postman
// {
//      "id": 1,
//     "name": "Eminem",
//     "email": "marshall.mathers@example.com",
//     "age": 51
//   }

app.delete("/users/:delete", (req, res) => {
  const user_to_delete = req.params.delete;
  const user_index_to_delete = users.findIndex(
    (element) => element.id == user_to_delete
  ); //user index aayo esley

  if (user_index_to_delete == -1) {
    res.status(400).send("user not found to delete!");
  } else {
    users.splice(user_index_to_delete, 1); //splice is used to remove the element from the array. Its syntax in simple terms is array.splice(index, how many elements to remove)
    res.json({ message: "User deleted successfully" });
  }
});
