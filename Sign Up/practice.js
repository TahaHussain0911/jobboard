const user = document.getElementById('username'),
pass = document.getElementById('password'),
confirmpass = document.getElementById('confirmPassword'),
email=document.getElementById('email');
Array.from(document.querySelectorAll('input')).forEach(element=>element.addEventListener('blur',(event)=>{
    let errorElem = Array.from(event.target.parentNode.querySelectorAll('span   '));
    if (!errorElem.length&&event.target.value=="") {
        event.target.insertAdjacentHTML("afterend",`<span class="Error">Required</span    >`)
    }
    if(errorElem.length && event.target.value!=""){
        errorElem.forEach(element=>element.remove())
    }
}))


function checkpassword(event){
    if (event.target.value!=pass.value  && event.target.value!="") {
        event.target.insertAdjacentHTML("afterend",`<span class="Error">Password Not Matched</span>`)
    }
    else if (event.target.value==pass.value && event.target.value!="") {    
        event.target.insertAdjacentHTML("afterend",`<span style="color:lightgreen;">Pass Matched</span>`)
    }
    
}
confirmpass.addEventListener('blur',checkpassword)
const register=document.querySelector('.btn');
register.setAttribute("disabled","disabled");
function ifInput(event){
    const inputs=Array.from(document.querySelectorAll('input')).every(input=>input.value!="");
    if (inputs && confirmpass.value==pass.value) {
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
    text.innerText="Congratulations!! You are a member now";
    text.classList.add('alert','alert-success')
    form.prepend(text);
    user.setAttribute("disabled","disabled");
    email.setAttribute("disabled","disabled")
    pass.setAttribute("disabled","disabled");
    confirmpass.setAttribute("disabled","disabled");
    register.setAttribute("disabled","disabled");
}
form.addEventListener('submit',message)