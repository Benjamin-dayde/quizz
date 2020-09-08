let formUser = document.getElementById("forms_ins_user");

console.log(formUser);

formUser.addEventListener("submit", function(e){
    e.preventDefault();
    
    let pseudo = document.getElementsByName("pseudo");
    pseudo = pseudo[0].value;

    let passwd = document.getElementsByName("passwd");
    passwd = passwd[0].value;

    let passwd2 = document.getElementsByName("passwd2");
    passwd2 = passwd2[0].value;

    let request = getRequest();

    request.open('POST', "index.php?route=insert_user")
    request.setRequestHeader('Content-Type', 'application/x-www-form-url-urlencoded');
    request.send("pseudo=" + pseudo + "&passwd=" + passwd + "&passwd2=" + passwd2);

    if(request.readyState == 4 && resquest.status == 200) {
        console.log(request.response); 
    }

});


function getRequest() {
    
    //Récupère la connexion au serveur http
    let request;
    if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try {
          request = new ActiveXObject("Msxml2.XMLHTTP"); // IE version > 5
        } catch (e) {
          request = new ActiveXObject("Microsoft.XMLHTTP");
        }
    } else {
        request = false;
    }
    return request;
}