window.onload = function(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
             document.getElementById('nav-placeholder').innerHTML= '<object type="text/html" data="nav.html"></object>';
        }
    }

    xhttp.open('POST', 'nav.html', true); // method, location, async
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send(); }
