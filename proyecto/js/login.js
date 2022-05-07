$(function () {

    $.validator.addMethod("passwordcheck", function(value) {
      return /^[a-zA-Z0-9!@#$%^&()=[]{};':"\|,.<>\/?+-]+$/.test(value) 
      && /[a-z]/.test(value) // has a lowercase letter 
      && /\d/.test(value)//has a digit 
      && /[!@#$%^&()=[]{};':"\|,.<>\/?+-]/.test(value)// has a special character
    },"La contraseña debe contener de 8 a 15 carácteres alfanuméricos (a-z A-Z), contener mínimo un dígito (0-9) y un carácter especial (_-=)."  
    );
});