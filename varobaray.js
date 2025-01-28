
const name='geo'
console.log(name)

let names='geo'
names='stew'
console.log(names)
////////---function----//////////
var abc='geo'
var age=27
var hobby='singing'

function display(userabc,userage,userhobby){
    return 'user age is :'+userabc +'\n'+'user age is :'+ userage  +'\n'+'user hobby is :'+userhobby
}
console.log(display(abc,age,hobby))
//////////---------- function-----///////////////-----
const sum=function(a,b){
    return (a+b);
}
console.log (sum(1,2));
//////////---------- aero function-----///////////////-----
const div=(a)=>a-7
console.log(div(9));
//////////---------- function-----///////////////-----
const sub=(a,b) =>{
    return (a-b);
}
console.log (sub(121,21));
/////////----array----- add value function---//////////
const sports=['kabadi','cricket']
sports.push('football')
console.log(sports);
"\n"/////////----array----- add value function---//////////
const play=['kabadi','cricket']

console.log(play.map(game=>" i am playing :"+game));
////// -------array --------copy function -----------////////////
const sports1=['100m-relay','200m-relay']
const sports2=['long jump','high jump']
sports1.push('swimming')
console.log(sports1);
console.log(sports2)
////// -------array --------copy function -----------////////////
const sports3=['100m-relay','200m-relay']
const sports4=['long jump','high jump']
sports1.push('swimming')
console.log(sports1);
console.log(sports2)
/////////---objects in java script always key valuespair----//////////
const person={
    name:'sittu',
    greet : function(){
        console.log("Invite from " + this.name + "'s sister's marriage");
  }
    }
person.greet();
//////////////-----------...spread using array-------------//////////////////

const hobbies1=['sports','swim']
const hobbies2=[...hobbies1]
hobbies2.push('codings')
console.log(hobbies2);
console.log(hobbies1)
//////////////-----------...spread using array-------------//////////////////
const toarray=(...args)=>{
    return(args)
}
console.log(toarray(1,2,34,4,56,7,7));



    
    












