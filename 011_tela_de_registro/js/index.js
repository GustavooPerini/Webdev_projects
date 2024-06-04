class Validator{

    constructor(){
        this.validations = [
            "data-required",
            "data-min-length",
            "data-max-length",
            "data-email-validate",
            "data-only-letters",
            "data-equal",
            "data-password-validate"
        ];
    }

    validate(form){

        // resgata todas as validações
        let currentValidations = document.querySelectorAll("form .error-validation");

        if(currentValidations.length > 0){
            this.cleanValidations(currentValidations);
        }

        // pegar os inputs
        let inputs = form.getElementsByTagName("input");

        // HTML collection -> array
        let inputsArray = [...inputs];
        
        inputsArray.forEach(input => {

            for(let i = 0; this.validations.length > i; i++){
                
                if(input.getAttribute(this.validations[i]) != null){
                    
                    // limpado a string para chamar um método
                    let method = this.validations[i].replace("data-", "").replace("-", "");

                    // pegando o valor do input
                    let value = input.getAttribute(this.validations[i]);

                    // chamando o método
                    this[method](input, value);
                }
            }

        }, this);
    }

    minlength(input, minValue){

        let inputLength = input.value.length;

        let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;
        
        if(inputLength < minValue){
            this.printMessage(input, errorMessage);
        }
    }

    maxlength(input, maxValue){
        
        let inputLength = input.value.length;

        let errorMessage = `O campo precisa ter menos de ${maxValue} carateceres`;

        if(inputLength > maxValue){
            this.printMessage(input, errorMessage);
        }
    }

    required(input){

        let inputValue = input.value;

        if(inputValue === ""){

            let errorMessage = "Este campo é obrigatório";

            this.printMessage(input, errorMessage);

        }
    }

    emailvalidate(input){

        let re =/\S+@\S+\.\S+/;

        let email = input.value;
        
        let errorMessage = "Insira um e-mail no padrão nome@email.com";

        if(!re.test(email)){
            this.printMessage(input, errorMessage);
        }
    }

    onlyletters(input){

        let re = /^[A-Za-z]+$/;

        let inputValue = input.value;

        let errorMessage = "Este campo não aceita números nem caracteres especiais";

        if(!re.test(inputValue)){
            this.printMessage(input, errorMessage);
        }
    }

    equal(input, inputName){

        let inputToCompare = document.getElementsByName(inputName)[0];

        let errorMessage = `Este campo precisa ser igual ao anterior`;

        if(input.value != inputToCompare.value){
            this.printMessage(input, errorMessage);
        }
    }

    passwordvalidate(input){

        let charArray = input.value.split("");
        
        let uppercases = 0;
        let numbers = 0;

        for(let i = 0; i < charArray.length; i++){

            if(charArray[i] === charArray[i].toUpperCase() && isNaN(parseInt(charArray[i]))){
                uppercases++;
            }
            else if(!isNaN(parseInt(charArray[i]))){
                numbers++;
            }
        }

        if(uppercases === 0 || numbers === 0){
            let errorMessage = "A senha precisa de, pelo menos, uma letra maiúscula e um número";

            this.printMessage(input, errorMessage);
        }
    }

    printMessage(input, msg){

        // verificando a quantidade de erros
        let errorsQty = input.parentNode.querySelector(".error-validation");

        if(errorsQty === null){
            let template = document.querySelector(".error-validation").cloneNode(true);
            template.textContent = msg;

            let inputParent = input.parentNode;

            template.classList.remove("template");

            inputParent.appendChild(template);
        }
    }

    cleanValidations(validations){
        validations.forEach(element => element.remove());
    }

}



//main code
let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

submit.addEventListener("click", event => {

    event.preventDefault()

    validator.validate(form);
})