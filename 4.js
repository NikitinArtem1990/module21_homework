function ElectricApp(name){
  this.name  = name,
  this.type = 'ElectricApp'
}
  
ElectricApp.prototype.getOn = function(){

  console.log(`The ${this.name} is ON`)
}

ElectricApp.prototype.getOn = function(){

  console.log(`The ${this.name} is ON`)
}

ElectricApp.prototype.getOff = function(){

  console.log(`The ${this.name} is OFF`)
}


function KettleApp(name, colour){
  this.name = name,
  this.voltage = '220W',
  this.colour = colour
}

function LampApp(name, bulb){
  this.name = name,
  this.voltage = '120W',
  this.bulb = bulb
  
}


KettleApp.prototype = new ElectricApp()
LampApp.prototype = new ElectricApp()



  const kettle = new KettleApp('kettle', 'white');
  const deskLamp = new LampApp('deskLamp', 'LED');

  
//Включение в сеть

  kettle.getOn()
  deskLamp.getOn()

//выключение из сети
  
  kettle.getOff()
  deskLamp.getOff()
  
//запуск
  
  console.log(kettle)
 console.log(deskLamp)
