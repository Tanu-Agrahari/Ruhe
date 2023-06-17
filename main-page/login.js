const signup=document.querySelector('.t-signup');
const login=document.querySelector('.t-login');
const addclass=document.querySelector('.site');
signup.addEventListener('click',function(){
    addclass.className='site signup-show';
})
login.addEventListener('click',function(){
    addclass.className='site login-show';
})

//  login validation

function validate()
{
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    if(email=="tanuagrahari56@gmail.com" && password=="tanu708857")
    {
        alert("This login is successfull...");
        window.location.href =
        window.location.protocol +
        "//" +
        window.location.host +
        "/index.html";
    }
    else{
        alert("The login failed");
        return;
    }
}