function getPassword(){
    var generatPassword = '123456789ABCDEFGHIJLMNOPQRSTUVXZ';
    var passwordLength = 16;
    var password = "";

    for(var i = 0; i < passwordLength; i++){
        var resultPassword = Math.floor(Math.random() * generatPassword.length)
        password += generatPassword.substring(resultPassword, resultPassword + 1)
    }

    document.getElementById('password').value = password
}