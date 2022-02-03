//returns Zoo animals Data
const fetchData1=document.querySelector("#fetch1");
const zooAnimals=document.querySelector("#API1");

fetchData1.addEventListener("click",getZooData);

async function getZooData(){
    zooAnimals.innerHTML="";
    try{                     
let fetchZooResult=await fetch("https://zoo-animal-api.herokuapp.com/animals/rand");
let animalList=await fetchZooResult.json();
console.log(animalList);
zooAnimals.innerHTML=`
<div>name: ${animalList.name}</div>
<div>latin_name: ${animalList.latin_name}</div>
<div>animal_type: ${animalList.animal_type}</div>
<div>lifespan: ${animalList.lifespan}</div>
<div>diet: ${animalList.diet}</div>
<div>geo_range: ${animalList.geo_range}</div>
<a href="${animalList.image_link}" target="_blank">image_link</a>
`;
    }catch(err){
        zooAnimals.innerHTML= error;
    }
}