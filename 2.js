const person = {
    city: 'Moscow',
    ownCity: 'Piter',
    age: '25'
  }
  
  
  function findProperty(string, obj){
      
      for(let key in obj){
        
        if(string == obj[key]){
          console.log(true);
        }
        else{
          console.log(false);
        }
      } 
  } 
  
  findProperty('Moscow', person)
