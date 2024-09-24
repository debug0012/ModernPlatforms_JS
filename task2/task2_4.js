function findUser(initialObject) {
    return Object.keys(initialObject) // Getting array of Names (keys)
      .filter(name => initialObject[name].city === "London" && initialObject[name].age > 18); // Filtering by city and age
  }
  
  // Use case:
  const users = {
    Max: { age: 23, city: "London" },
    Mike: { age: 20, city: "Los Angeles" },
    John: { age: 30, city: "London" },
    Amy: { age: 17, city: "London" }
  };
  
  console.log(findUser(users)); // [“Max”, “John”]