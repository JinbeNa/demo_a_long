function showPass(){
    var showPw=document.querySelector("#exampleInputPassword1");
    if(showPw.type=="password"){
        showPw.type="text";
    }else{
        showPw.type="password";
    }
}



function myFunction(){
  // console.log(  document.getElementById('exampleInputEmail1').value=='');
  if(document.getElementById('exampleInputEmail1').value==''){
    document.getElementById('error').style='block';
  }
}
