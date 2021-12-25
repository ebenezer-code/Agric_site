/*function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form-message");
    message.textContent = message
    messageElement.classList.remove('form-message-success');
    messageElement.classList.add(`form-message-${type}`);
}*/




function setInputError(inputElement,message) {
    inputElement.classList.add("form-input--error");
    inputElement.parentElement.querySelector('.form-input-error-message').textContent = message;
}

function clearInputError(inputElement){
    inputElement.classList.remove('form-input-error');
    inputElement.parentElement.querySelector('.form-input-error-message').textContent = "";
}
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector('#login');
    const createAccountForm = document.querySelector('#createAccount');

    document.querySelector("#linkCreateAccount").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });

    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "signUpUsername" && e.target.value.length < 10) {
                setInputError(inputElement, "must be at least 10 characters");
            }else if(e.target.id === 'signUpUsername' && e.target.value.length > 10) {
                setInputError(inputElement, "must be less than 22 characters");
            }
        
        });

       /* loginForm.addEventListener('submit', e => {
            e.preventDefault();

            setFormMessage(loginForm, 'error', 'logged in');
            
        })*/
    

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});