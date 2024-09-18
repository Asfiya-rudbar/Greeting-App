
function greeting(){
    let name  = prompt("please enter your name..");
    let age = +prompt("please enter your age..");
    let Content = document.getElementById("Content");
    
    if(age >= 18){
        document.getElementById('greeting')
        document.getElementById('Content').innerHTML = `Welcome ${name}! you are eligible...`;
       
    
    }
    else{
        document.getElementById('greeting')
        document.getElementById('Content').innerHTML = `Sorry ${name}! you are not eligible.`;
       
    }

}

