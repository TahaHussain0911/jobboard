const register=document.querySelector('.btn'),
email=document.getElementById('email'),
pass=document.getElementById('password');
register.setAttribute("disabled","disabled");
function ifInput(){
    const inputs=Array.from(document.querySelectorAll('input')).every(input=>input.value!="");
    if (inputs) {
        register.removeAttribute("disabled");
    }
    else{
        register.setAttribute("disabled","disabled")
    }
}
const form=document.querySelector('#registrationForm');
form.addEventListener('change',ifInput);


function message(event){
    event.preventDefault();
    let text=document.createElement('div');
    text.innerText="You are Signed!!";
    text.classList.add('alert','alert-success')
    form.prepend(text);
    email.setAttribute("disabled","disabled")
    pass.setAttribute("disabled","disabled");
    register.setAttribute("disabled","disabled");
}
form.addEventListener('submit',message)