function showPass(){
    var showPw=document.querySelector("#exampleInputPassword1");
    if(showPw.type=="password"){
        showPw.type="text";
    }else{
        showPw.type="password";
    }
}



function Validator(options) {
  
   var formElemen=document.querySelector(options.form);
   
   if (formElemen) {

    options.rules.forEach(function (rules){

      var inputElement = formElemen.querySelector(rules.selector);

      if (inputElement) {
        inputElement.onblur = function () {
          console.log(inputElement.value);
        }
      }

    });

   }

}

Validator.isEmail = function (selector){
  return {
    selector: selector,
    test: function (value) {
      
    }
  };
}

Validator.isPassword = function (selector){
  return {
    selector: selector,
    test: function (value) {
      
    }
  };
}