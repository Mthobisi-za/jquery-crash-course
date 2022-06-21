function setName(name){
    document.querySelector('.name_holder').innerHTML = name;
}

function setAge(age){
    document.querySelector(".age_holder").innerHTML = age
}

function setCountry(country){
    document.querySelector('.country_holder').innerHTML = country;
}


function elementsFactory(){
    var name = document.querySelector("#name").value;
    var age = document.querySelector('#age').value;
    var co = document.querySelector('#country').value;
    
    name !== '' && name !== null ?setName(name): "";
    age !== '' && age !== null ? setAge(age): "";
    co !== '' && co !== null ?setCountry(co): "";
    
   console.log(age,name,co)
   document.querySelector('.text').style.display = 'block'
}

function clearData(){
    document.querySelector('.text').style.display = 'none'
}


