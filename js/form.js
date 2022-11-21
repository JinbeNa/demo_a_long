function showPass(){
    var showPw=document.querySelector("#password");
    var showPwConfir=document.querySelector("#password_confirmation");
    if(showPw.type=="password" && showPwConfir.type == "password"){
        showPw.type="text";
        showPwConfir.type = "text";
    }else{
        showPw.type="password";
        showPwConfir.type = "password";
    }
}



function Validator(options){
  var selectorRules = {};

  function validate (inputElement,rule){
    var erroElement = inputElement.parentElement.querySelector(options.errorSelector); 
    var erroMess;
    var rules = selectorRules[rule.selector];

    for(var i= 0; i<rules.length;++i){
      erroMess =rules[i](inputElement.value);
      if (erroMess) break;
    }

          if (erroMess){
            erroElement.innerText = erroMess;
            inputElement.parentElement.classList.add('invalid');
          }
          else{
            erroElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
          }
  }


  var formElement = document.querySelector(options.form);


  
  if(formElement){
    options.rules.forEach(function (rule) {
      
      if(Array.isArray(selectorRules[rule.selector])){
        selectorRules[rule.selector].push(rule.test);
      }else{
        selectorRules[rule.selector] = [rule.test];
      }

      var inputElement = formElement.querySelector(rule.selector);
      
      if(inputElement){
        inputElement.onblur = function(){
          validate (inputElement,rule);
        }

        inputElement.oninput = function(){
          var erroElement = inputElement.parentElement.querySelector(options.errorSelector);  
          erroElement.innerText = '';
          inputElement.parentElement.classList.remove('invalid');
        }
      }
    });
    console.log(selectorRules);
  }
}

Validator.isRequired = function(selector){
  return {
    selector : selector,
    test: function (value) {
      return value.trim() ? undefined : 'Vui long nhap truong nay'
    }
  }
}

Validator.isEmail = function(selector){
  return {
    selector : selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined :'Truong nay phai la email'
    }
  }
}

Validator.minLength  = function(selector,min){
  return {
    selector : selector,
    test: function (value) {
      return value.length >= min ? undefined : 'Nhap toi thieu 7 ki tu'
    }
  }
}

Validator.isConfirm = function(selector,getConfirmVal,message){
  return {
    selector : selector,
    test: function (value) {
      return value === getConfirmVal() ? undefined : message ||'Nhap lai ko chinh xac'
    }
  }
}