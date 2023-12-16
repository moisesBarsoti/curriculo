// Estilização
const h1DeApresentacao = document.querySelector('#inicio h1');
const textoDeApresentacao = 'Olá, Eu sou Moisés Barsoti!';
const intervalo = 95;

function escreverLetras(h1DeApresentacao, textoDeApresentacao, intervalo) {
    const letras = textoDeApresentacao.split("").reverse();
    
    const digitador = setInterval(() => {
        if(!letras.length) {
            return clearInterval(digitador);
        }

        const separacaoDasLetras = letras.pop();
        h1DeApresentacao.innerHTML += separacaoDasLetras;
    }, intervalo);
}
escreverLetras(h1DeApresentacao,textoDeApresentacao,intervalo);


// Email

class FormSubmit {
    constructor(settings) {
       this.settings = settings;
       this.form = document.querySelector(settings.form);
       this.formButton = document.querySelector(settings.button);
 
       if (this.form){
          this.url = this.form.getAttribute('action');
       }
       this.sendForm = this.sendForm.bind(this);
    }
 
    displaySuccess() {
       this.form.innerHTML = this.settings.success;
    }
    displayError() {
       this.form.innerHTML = this.settings.error;
    }


    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");

        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value
        });
        return formObject;
    }


    onSubmission(e) {
        e.preventDefault();
        e.target.disabled = true;
        e.target.innerTEXT = "Enviando..."
    }


    async sendForm(e) {
        try {
            this.onSubmission()
            await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(this.getFormObject()), 
            });
            this.displaySuccess();
        } catch {
            this.displayError();
            throw new Error(error);
        }
        
    }
 
 
    init() {
       if (this.form) this.formButton.addEventListener('click', this.sendForm);
       return this;
    }
 }
 
 const FormSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada</h1>",
    error: "<h1 class='error'>Não foi possivel enviar mensagem</h1>",
 })
 
 FormSubmit.init();