class ElectricApp{
    constructor(name){
      this.name  = name || 'equipment',
      this.type = 'ElectricApp'
  }

  
    getOn(){
      return `The ${this.name} is ON`;
}

    getOff(){

  return `The ${this.name} is OFF`;
}
}

class KettleApp extends ElectricApp {
  constructor(name, colour, electro){
    super(name);
    this.voltage = '220W';
    this.colour = colour || 'white';
    this.electro = electro || false;
  } 
  
  getInfo(){
    if (this.electro === true) {
      return super.getOn()
    } else {
      return super.getOff()
    }
  }
}

class LampApp extends ElectricApp {
  constructor(name, bulb, electro){
    super(name);
    this.voltage = '120W',
    this.bulb = bulb || null;
    this.electro = electro || false;
  } 
  
  getInfo(){
    if (this.electro === true) {
      return super.getOn()
    } else {
      return super.getOff()
    }
  }
}



const kettle = new KettleApp('kettle', 'red', true);
console.log(kettle);

console.log(kettle.getInfo());

const lamp = new LampApp('deskLamp', 'LED');
console.log(lamp);

console.log(lamp.getInfo());
