function validateForm() {
    let x = document.forms["myForm"]["firstname"].value;
    let y = document.forms["myForm"]["lastname"].value;
    let z = document.forms["myForm"]["passname"].value;
    let w = document.forms["myForm"]["emailaddress"].value;
    if (x == "" && y =="" && z =="" && w =="") {
      alert("fill your names and password");
    }
    else if (x == ""){
      alert("fill the first name");
    }
    else if (y == ""){
      alert("fill the Last name");
    }
    else if (w == ""){
      alert("fill the email");
    }
    else if (z.length == ""){
      alert("fill the Password");
    }
    else if (z.length >= 15){
      alert("password is too long");
    }  
    else if (z.length <= 5){
      alert("password is too short");
    }  
    else{
      document.getElementById('button-send').addEventListener('click' , send);
    }
  
    let select = document.getElementById('country');
  if (select.selectedIndex ===1 || select.selectedIndex ===2 || select.selectedIndex ===3 || select.selectedIndex ===4  ){
    alert("You must come from Nigeria");
  }
    let chk = document.getElementById('alive');
    if(!chk.checked){
      alert("Agree with the terms and condition");
    }
  }
   
  
  const ints = function(){
    document.getElementById('button-reset').addEventListener('click' , reset);
    document.getElementById('button-send').addEventListener('click' , send);
  }
  const reset = function(ev){
    ev.preventDefault();
    document.getElementById('form').reset()
  }
  
  const send = function(ev){
    //ev.preventDefault()
    let ret = validateForm();
    if (ret){
      document.getElementById('form').submit()
    }
    else{
      let err = document.querySelector('error');
    }
  }
  document.addEventListener('DOMContentLoaded', ints);
  
  function myFocus(x) {
    x.style.background = "yellow";
  }     
  
  
  
  
  
  