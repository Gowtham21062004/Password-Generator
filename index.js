let length=5;
function add(){
    let password=document.getElementById("password").value;
    let capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let small="abcdefghijklmnopqrstuvwxyz";
    let num="9,8,7,6,5,4,3,2,1,0";
    let symbol="!@#$%^&*()?></-+";

    password=password+capital[Math.floor(Math.random()*capital.length)];
    password=password+small[Math.floor(Math.random()*small.length)];
    password=password+num[Math.floor(Math.random()*num.length)];
    password=password+symbol[Math.floor(Math.random()*symbol.length)];
    let pass=password+capital+small+symbol;
    while(length>password.length){
        password=password+pass[Math.floor(Math.random()*pass.length)];
    }
    document.getElementById("res").innerHTML="Your password is   "+password;
    console.log(password);
}