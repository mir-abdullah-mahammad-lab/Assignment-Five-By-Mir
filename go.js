// console.log('ALLAH AKBER')

document.getElementById("btnSignIn").addEventListener('click', ()=>{
    console.log('clickedddddddddd')
    const Username = document.getElementById('btnUsername').value
    console.log(Username)
    const Password = document.getElementById('btnPassword').value
    console.log(Password)
    if(Username === 'admin' && Password === 'admin123'){
        window.location.assign('./main.html')
    }else{
        alert("Re-Enter Password")
    }
    
})