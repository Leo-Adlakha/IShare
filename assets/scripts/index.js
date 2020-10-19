var quote = document.querySelector(".quote") ;
var url = "https://api.github.com/zen" ;
var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function(){
    if ( XHR.readyState == 4 && XHR.status == 200 ){
        quote.innerText = "''" + XHR.responseText + "''" ; 
    }else{
        console.log("ERROR: A Problem... Sorry", XHR.readyState, XHR.status);
    }
}

XHR.open("GET", url);
XHR.send();