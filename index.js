"use strict";

const joe = {
    name:'Joe',
    age:28,
    happy:true,
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
    console.log(`${studentArray[i].name}`)
}
