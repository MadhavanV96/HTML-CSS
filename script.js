let arr=[10,20,30,40,50];

let newArr =arr.forEach(square);
console.log(newArr);
function square(element){
    element = Math.pow(element,2);
    return element;
}




let x=[100,200,300,400,500];

let newX = x.filter(value=> value==400);


console.log(x);

console.log(newX);


for(let num in x){
    console.log(num);
    
}


let person={
    name:"Madhavan",
    age:28,
    gender:"Male"

}

for(let key in person){
    console.log(`${key} : ${person[key]}`);
}



let jSonData=[
    {"name":"Madhavan", "age":28,"Gender":"Male"},
    {"name":"ABC","age":27, "Gender":"Male"},
    {"name":"CDB","age":25, "Gender":"Female"}
]

jSonData.forEach((item)=>{
    if(item.name=="Madhavan"){
        console.log(item.name);
    }
    
})
