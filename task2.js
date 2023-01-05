const user = {
  id: 1,
  name: "Иван",
  age: 20
};

const property = "name";
function checkProperty(user, property) {
  // return user[property] !== undefined;
  return user.hasOwnProperty(property);
}
console.log(checkProperty(user, property));
