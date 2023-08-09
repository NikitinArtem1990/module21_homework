const person = {
    city: 'Moscow',  
  }
  
  const student = Object.create(person);
  student.ownCity = 'Piter';
  student.age = '25';
  
  for(let key in student) {
    if(student.hasOwnProperty(key)){
      console.log('student.' + key + ' = ' + student[key])
    }
  }
  
