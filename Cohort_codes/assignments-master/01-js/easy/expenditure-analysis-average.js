const transactions = [
    { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
    { id: 2, timestamp: 1656076800001, price: 20, category: 'Food', itemName: 'Burger' },
    { id: 3, timestamp: 1656076800002, price: 15, category: 'Electronics', itemName: 'Headphones' },
    { id: 4, timestamp: 1656076800003, price: 30, category: 'Electronics', itemName: 'Charger' },
    { id: 5, timestamp: 1656076800004, price: 25, category: 'Clothing', itemName: 'T-shirt' },
  ];
  
  const result = calculateAveragePriceByCategory(transactions);
  console.log(result);

  function calculateAveragePriceByCategory(transactions)
  {
    const obj1 = {};

    transactions.forEach(value => {
        const {category,price} = value;

        if(obj1.hasOwnProperty(category))
        {
            obj1[category].sum += price;
            obj1[category].count += 1;
        }
        else {
            obj1[category] = { sum: price, count: 1 };
          }
    });

    const result = Object.keys(obj1).map(category => ({
        category: category,
        average_price: obj1[category].sum/obj1[category].count,

    }));
    return result;
  }
// function calculateAveragePriceByCategory(transactions) {
//     // Step 1: Create an object to store category-wise totals and counts
//     const categorySumCount = {};
  
//     // Step 2: Iterate over the list of transactions
//     transactions.forEach(transaction => {
//       const { category, price } = transaction;
  
//       // Step 3: Update category-wise total and count
//       if (categorySumCount.hasOwnProperty(category)) {
//         categorySumCount[category].sum += price;
//         categorySumCount[category].count += 1;
//       } else {
//         categorySumCount[category] = { sum: price, count: 1 };
//       }
//     });
  
//     // Step 4: Calculate average for each category
//     const result = Object.keys(categorySumCount).map(category => ({
//       category: category,
//       averagePrice: categorySumCount[category].sum / categorySumCount[category].count,
//     }));
  
//     // Step 5: Return the array of objects with average prices
//     return result;
//   }
  
//   // Example usage:
//   const transactions = [
//     { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
//     { id: 2, timestamp: 1656076800001, price: 20, category: 'Food', itemName: 'Burger' },
//     { id: 3, timestamp: 1656076800002, price: 15, category: 'Electronics', itemName: 'Headphones' },
//     { id: 4, timestamp: 1656076800003, price: 30, category: 'Electronics', itemName: 'Charger' },
//     { id: 5, timestamp: 1656076800004, price: 25, category: 'Clothing', itemName: 'T-shirt' },
//   ];
  
//   const result = calculateAveragePriceByCategory(transactions);
//   console.log(result);
  