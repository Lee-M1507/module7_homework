const user = {
  id: 1,
  name: "Иван",
  age: 20
};

function printObject(user) {
  for(let key in user) {
    if(user.hasOwnProperty(key)) {
      console.log(`${key}: ${user[key]}`);
    }
  }
}
printObject(user);
