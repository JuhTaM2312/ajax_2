"use struct";

function loadDoc() {
    let xhttp =new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            myFunction(this);

        }
    }
    xhttp.open("GET", "cd_catalog.xml", true)
    xhttp.send();

}

function myFunction(that) {
    let XMLSzoveg =that.responseXML;
    let cdTomb = XMLSzoveg.getElementsByTagName("CD");
    let txt = "<table>";

    for(let i=0; i<cdTomb.length; i++){
        txt += "<tr>";
    txt += cdTomb[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
    txt += cdTomb[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;

    txt += "</tr>"

    document.getElementById("ide").innerHTML = txt;
}
