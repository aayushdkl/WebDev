export const LineChartData = {
  labels: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  datasets: [
    {
      label: "Steps by Marshall",
      data: [1000, 2000, 1500, 3000, 2000, 2500, 3500],
      borderColor: "blue",
    },
    {
      label: "Steps by Me",
      data: [2000, 3000, 2500, 6000, 500, 3500, 4500],
      borderColor: "red",
    },
  ],
}

export const barChartData = {
  labels: [
    "Rent,",
    "Groceries",
    "Gas",
    "Entertainment",
    "Phone",
    "Insurance",
    "Transportation",
  ],
  datasets: [
    {
      label: "Monthly Expenses",
      data: [500, 200, 80, 300, 200, 100, 150],
      backgroundColor: [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
      ],
      borderColor: "black",
      borderWidth: 1,
    },
  ],
}

export const pieChartData = {
  labels: ["Facebook", "Instagram", "Twitter", "LinkedIn", "Pinterest"],
  datasets: [
    {
      label: "Time spent on Social Media",
      data: [100, 200, 150, 50, 75],
      backgroundColor: ["blue", "purple", "red", "green", "orange"],
      borderColor: "black",
    },
  ],
}
