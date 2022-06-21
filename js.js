function setName(name){
    $('.name_holder')[0].innerHTHML = name
}
function setAge(age){
    $('.age_holder')[0].innerHTHML = age
}
function setCo(co){
    console.log(co)
    $('.co_untry')[0].innerHTHML = co
}
$('.btn1')[0].addEventListener('click', ()=>{
    var name = $('#name')[0].value;
    var age = $('#age')[0].value;
    var co = $('#country')[0].value;
    console.log(name, age, co);
    setName(name);
    setAge(age)
    setCo(co);
    $('.text').show('slow')
});

$('.clear')[0].addEventListener('click', ()=>{
    $('.text').hide('slow')  
})