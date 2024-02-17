//Enabling input fields editable and prevent from editing


document.addEventListener('DOMContentLoaded', function () {
    const editButton = document.querySelector('.login-form-container button[type="submit"]');
    const cancelButton = document.querySelector('.login-form-container button[type="button"]');
    const inputFields = document.querySelectorAll('.login-form-container input[type="text"], .login-form-container input[type="tel"], .login-form-container input[type="email"], .login-form-container textarea');

    editButton.addEventListener('click', function (event) {
        event.preventDefault();
        toggleEdit(true);
    });

    cancelButton.addEventListener('click', function (event) {
        event.preventDefault();
        toggleEdit(false);
    });

    function toggleEdit(isEditable) {
        inputFields.forEach(function (field) {
            field.readOnly = !isEditable;
        });
    }
});

// Getting User name using Access token from to the google account and print it


const accessToken = "ya29.a0AfB_byC2XMN3OCpo0ACHInOgKd1U2wv4bkSY2EcnuT7PAxg0Rz8GTSo48meeOj7cia7DqeBLoSqJaubGAKSgGphiIWsCz-6lRJ-EmQIFabPTOgZn4a2Itv9EavCAJ0Q2SBbRk385A8F4Y2UyNyMKt-RRX6v5vIqymAaCgYKAUYSARASFQHGX2MiUXkeRAUNaJEYA_59iaI9fQ0169"

const urlParams = new URLSearchParams(window.location.search);
        
        fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        .then(response => response.json())
        .then(userInfo => {
            document.getElementById('full-name').innerHTML += userInfo.name;
        })
        .catch(error => {
            console.error('Error fetching user information:', error);
        });

//End of Getting User name using Access token from to the google account and print it


function logout(event){
    event.preventDefault();
    localStorage.removeItem('accessToken');
    window.location.href = "login.html";
}

//End of fetching the user name from google account and print it
