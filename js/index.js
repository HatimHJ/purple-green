const send_btn = document.querySelector('#send');
const email = document.querySelector('#email');
const error = document.querySelector('.error-msg');
send_btn.onclick = ()=>{
    if (email.value == '') {
        email.classList.add('error');
        error.innerHTML = 'Whoops! It looks like you forgot to add your email' ;
        error.style.display = 'block';
    }else if (email.value.indexOf('@') == -1 ){        
        email.classList.add('error');
        error.innerHTML = 'Please provide a valid email address' ;
        error.style.display = 'block';   
    }else {
        error.style.display = 'none';
        email.classList.remove('error'); 
    }
}