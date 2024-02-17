//Login with google using oAuth Google API 


document.addEventListener('DOMContentLoaded', function () {
    const googleSignInBtn = document.getElementById('google-sign-in-btn');
    googleSignInBtn.addEventListener('click', function(event) {
        signIn(event);
    });
});



function signIn(event){
    console.log("hello");
    event.preventDefault();

    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"

    let form = document.createElement('form')
    form.setAttribute('method','GET')
    form.setAttribute('action',oauth2Endpoint)


    let params = {
        "client_id":"411007623187-ddf19tkeb68ji8fjrqj4ild7hg1iqeao.apps.googleusercontent.com",
        "redirect_uri":"http://127.0.0.1:5501/home.html",
        "response_type":"token",
        "scope":"https://www.googleapis.com/auth/userinfo.profile",
        "include_granted_scopes":'true',
        'state':'pass-through-value'
    }

    for(var p in params){
        let input =  document.createElement('input')
        input.setAttribute('type', 'hidden')
        input.setAttribute('name',p)
        input.setAttribute('value',params[p])
        form.appendChild(input)
    }

    document.body.appendChild(form)
    form.submit()
}

//End of Login with google using oAuth Google API