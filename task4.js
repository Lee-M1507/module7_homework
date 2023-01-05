/**
 * Функции вынесла для потенциального переиспользования
 */
let connect = function () {
  console.log(`${this.name} online`);
  this.connected = true;
}
let disconnect = function () {
  console.log(`${this.name} offline`);
  this.connected = false;
};

const ElectricalAppliance = function (name, power) {
  this.name = name;
  this.power = power;
  this.connected = false;
};

ElectricalAppliance.prototype.connect = connect;
ElectricalAppliance.prototype.disconnect = disconnect;

function Gadjet(name, brand, power, material) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.material = material;
  this.connected = true;
}

Gadjet.prototype = new ElectricalAppliance();

const phone = new Gadjet("Телефон", "Samsung", 200, "gold");
phone.disconnect();
console.log(phone)

const laptop = new Gadjet("Ноутбук", "Asus", 100, "metal");
laptop.connect();
console.log(laptop)

let powerConsumption = (phone.power * (+phone.connected)) + (laptop.power * (+laptop.connected));
console.log(`Потребляемая мощность включенных в сеть приборов - ${powerConsumption} Ватт`);
phone.connect();
powerConsumption = (phone.power * (+phone.connected)) + (laptop.power * (+laptop.connected));
console.log(`Потребляемая мощность включенных в сеть приборов - ${powerConsumption} Ватт`);
