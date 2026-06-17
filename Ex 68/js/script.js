function taiDanhSachCD() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            hienThiDuLieu(this);
        }
    };
    xhttp.open("GET", "cd_catalog.xml", true);
    xhttp.send();
}

function hienThiDuLieu(xml) {
    var xmlDoc = xml.responseXML;
    var listCD = xmlDoc.getElementsByTagName("CD");
    
    var noiDungBang = "<tr><th>Artist</th><th>Title</th></tr>";

    for (var i = 0; i < listCD.length; i++) {
        var artist = listCD[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
        var title = listCD[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;

        noiDungBang += "<tr>";
        noiDungBang += "<td>" + artist + "</td>";
        noiDungBang += "<td>" + title + "</td>";
        noiDungBang += "</tr>";
    }

    document.getElementById("bangCD").innerHTML = noiDungBang;
}