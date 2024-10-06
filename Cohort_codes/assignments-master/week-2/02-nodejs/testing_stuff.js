// const fs = require("fs");
// const path = require("path");

// // console.log(fs.readdir("/files"));

// const dir_path =
//   "C:\\Users\\ayush\\OneDrive\\Desktop\\WebDev\\Cohort_codes\\assignments-master\\week-2\\02-nodejs\\files";

// fs.readdir(dir_path, (err, files) => {
//   if (err) {
//     console.log(`The file cannot be read and the error is : ${err}`);
//   } else {
//     console.log(`The contents of the file are : ${files}`);
//   }
// });

const to_do_list_array = [
  {
    id: 1,
    title: "Homework",
    description: "Complete the homework",
    completed: true,
  },
  {
    id: 2,
    title: "Grocery Shopping",
    description: "Buy groceries for the week",
    completed: false,
  },
  {
    id: 3,
    title: "Exercise",
    description: "Go for a 30-minute run",
    completed: true,
  },
  {
    id: 4,
    title: "Read a Book",
    description: "Read at least 50 pages of a novel",
    completed: false,
  },
  {
    id: 5,
    title: "Clean Room",
    description: "Organize and clean the bedroom",
    completed: true,
  },
  {
    id: 6,
    title: "Cook Dinner",
    description: "Prepare a healthy meal for dinner",
    completed: false,
  },
  {
    id: 7,
    title: "Call Mom",
    description: "Catch up with mom on a phone call",
    completed: true,
  },
  {
    id: 8,
    title: "Work on Project",
    description: "Complete the next module of the project",
    completed: false,
  },
  {
    id: 9,
    title: "Laundry",
    description: "Do the laundry and fold clothes",
    completed: true,
  },
  {
    id: 10,
    title: "Meditation",
    description: "Practice 15 minutes of meditation",
    completed: false,
  },
];

let max_id_no = 0;
// console.log(max_id_no);

for (let i = 0; i < to_do_list_array.length; i++) {
  if (to_do_list_array[i].id > max_id_no) {
    max_id_no = to_do_list_array[i].id;
  }
}

console.log(max_id_no);
