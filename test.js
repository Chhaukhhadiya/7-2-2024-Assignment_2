const prompt=require('prompt-sync')();

let a=[1,2,'3',4,5,6,"ww"];
  let total=0;
  for(let i of a){
     if(typeof i=="number"){
      total+=i;
     }
  }
console.log(total);








