const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const searchName = (searchQuery, limit, callback) => {
  const filteredName = name.filter((item) => {
    return item.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return callback(filteredName, limit);
};

const limitData = (filteredName, limit) => {
  return filteredName.slice(0, limit);
};

console.log(searchName("an", 3, limitData));
