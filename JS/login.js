// step-1: add event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the input field
    const emailFeidf = document.getElementById('user-email');
    const email = emailFeidf.value;
    // step-3: get password
    const passwordFeild = document.getElementById('user-password');
    const password = passwordFeild.value;

    /* Danger: Do not verify email password on client side */
    //  step-4: verify email and password
    if( email === 'baper@bank.com' && password === 'secret'){
        window.location.href ='bank.html';
    }
    else{
        alert('invalid username or password')
    }
}) 