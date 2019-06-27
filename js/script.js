const filterByExpiration = (items) => {
  return items.filter(
    (i) => Date.parse(i.expirationDate) > Date.now()
  );
};

console.log('dddd', filterByExpiration(arr));