const transactions = [
    { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
    { id: 2, timestamp: 1656076800001, price: 20, category: 'Food', itemName: 'Burger' },
    { id: 3, timestamp: 1656076800002, price: 15, category: 'Electronics', itemName: 'Headphones' },
    { id: 4, timestamp: 1656076800003, price: 30, category: 'Electronics', itemName: 'Charger' },
    { id: 5, timestamp: 1656076800004, price: 25, category: 'Clothing', itemName: 'T-shirt' },
  ];
  
  const mostExpensiveItem = findMostExpensiveItem(transactions);
  console.log(mostExpensiveItem);

  function findMostExpensiveItem(transactions) {
    let max = transactions[0];
    
    transactions.forEach(value => {
        if(value.price>max.price)
        {
            max = value;
        }
    });
    return max;
  }