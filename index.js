"use strict";

const joe = {
    name:'Joe',
    age:28,
    happy:false,
    hairColor:"brown",
}

const sean  ={
    name:'Sean',
    age:21,
    happy:true,
    hairColor:'brown',
}

const studentArray = [joe, sean];

for(let i=0;i<studentArray.length;i++){
    console.log(`Hey there dipshit, your name is ${studentArray[i].name} and you are ${studentArray[i].age} years young ya ${studentArray[i].hairColor}-haired bastard. Why are you so ${studentArray[i].happy ? 'freakin happy' : 'miserable'}`)
}
