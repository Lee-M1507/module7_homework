function createObject() {
  return Object.create(null)
}
console.log(createObject())

function applianceElectrical(name, manufacturer, power) {
  this.name = name,
  this.manufacturer = manufacturer,
  this.ternDevice = function (power) {
    return power;
  }
}
