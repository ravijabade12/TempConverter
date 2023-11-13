var input=document.querySelector("#inp");
var output=document.querySelector("#out");
input.addEventListener("change",()=>{
    if(input.value=='Celsius'){
        output.value='Fahrenheit';
        document.querySelector("#degC").setAttribute("placeholder","Degree Celsius")
        document.querySelector("#degF").setAttribute("placeholder","Fahrenheit")
        document.querySelector("#degC").value=''
        document.querySelector("#degF").value=''
    }else if(input.value=='Fahrenheit'){
        output.value='Celsius';
        document.querySelector("#degC").setAttribute("placeholder"," Fahrenheit")
        document.querySelector("#degF").setAttribute("placeholder","Degree Celsius")
        document.querySelector("#degC").value=''
        document.querySelector("#degF").value=''

    }
    })


document.querySelector("#finalBtn").addEventListener("click",function (){

var degreeC=document.querySelector("#degC");
console.log(degreeC.value);
var degreeF=document.querySelector("#degF");
console.log(degreeF.value);

if(input.value==='Celsius'){
    if(!degreeC.value){
        alert("enter value") 
    }else{
        const fahout=((degreeC.value * 9/5)+32);
    degreeF.value=fahout+" "+ "F";
    }

}else if(input.value==='Fahrenheit'){
    if(!degreeC.value){
        alert("enter value")
    }else{
        const celout=((degreeC.value -32)*5/9);
        degreeF.value=celout+" "+"C"

    }
}


})







