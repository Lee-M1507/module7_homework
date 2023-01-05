
class ElectricalAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.connected = false;
  }
  connect() {
    console.log(`${this.name} online`);
    this.connected = true;
  }
  disconnect() {
    console.log(`${this.name} offline`);
    this.connected = false;
  }

}

class Gadget extends ElectricalAppliance {
  constructor(brand, material, name, power) {
    super(name, power);
    this.brand = brand;
    this.material = material;
    this.connected = true;
  }
}
const phone = new Gadget("Samsung", "gold",  "Телефон", 200);
phone.disconnect();
console.log(phone)

const laptop = new Gadget("Asus", "metal", "Ноутбук", 100);
laptop.connect();
console.log(laptop)

let powerConsumption = (phone.power * (+phone.connected)) + (laptop.power * (+laptop.connected));
console.log(`Потребляемая мощность включенных в сеть приборов - ${powerConsumption} Ватт`);
