var xmlString = "<students>" +
    "<student>" +
    "<id>987456</id>" +
    "<name>Marie Curie</name>" +
    "<birthday>7/11/1867</birthday>" +
    "<gender>Woman</gender>" +
    "</student>" +
    "<student>" +
    "<id>987561</id>" +
    "<name>Einstein</name>" +
    "<birthday>14/3/1879</birthday>" +
    "<gender>Man</gender>" +
    "</student>" +
    "<student>" +
    "<id>985467</id>" +
    "<name>Leó Szilárd</name>" +
    "<birthday>11/2/1898</birthday>" +
    "<gender>Man</gender>" +
    "</student>" +
    "</students>";

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");
var students = xmlDoc.getElementsByTagName("student");

var orders = [true, true, true, true];

function hienThiBang() {
    var tbody = document.getElementById("danhSachSinhVien");
    tbody.innerHTML = "";

    for (var i = 0; i < students.length; i++) {
        var id = students[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
        var name = students[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        var birthday = students[i].getElementsByTagName("birthday")[0].childNodes[0].nodeValue;
        var gender = students[i].getElementsByTagName("gender")[0].childNodes[0].nodeValue;

        var tr = document.createElement("tr");

        tr.setAttribute("onmouseover", "this.className='dong-vang'");
        tr.setAttribute("onmouseout", "this.className='dong-trang'");
        
        var urlChiTiet = "detail.html?id=" + id + "&name=" + name + "&birthday=" + birthday + "&gender=" + gender;
        tr.setAttribute("onclick", "window.location.href='" + urlChiTiet + "'");

        tr.innerHTML = "<td>" + id + "</td>" +
                       "<td>" + name + "</td>" +
                       "<td>" + birthday + "</td>" +
                       "<td>" + gender + "</td>";

        tbody.appendChild(tr);
    }
}

function sapXep(cotIndex) {
    var theTags = ["id", "name", "birthday", "gender"];
    var tieuChi = theTags[cotIndex];
    var tangDan = orders[cotIndex];

    var mangSinhVien = [];
    for (var i = 0; i < students.length; i++) {
        mangSinhVien.push(students[i]);
    }

    for (var i = 0; i < mangSinhVien.length - 1; i++) {
        for (var j = i + 1; j < mangSinhVien.length; j++) {
            var valI = mangSinhVien[i].getElementsByTagName(tieuChi)[0].childNodes[0].nodeValue;
            var valJ = mangSinhVien[j].getElementsByTagName(tieuChi)[0].childNodes[0].nodeValue;

            var dkDoiCho = false;
            if (tangDan == true && valI > valJ) {
                dkDoiCho = true;
            }
            if (tangDan == false && valI < valJ) {
                dkDoiCho = true;
            }

            if (dkDoiCho == true) {
                var tam = mangSinhVien[i];
                mangSinhVien[i] = mangSinhVien[j];
                mangSinhVien[j] = tam;
            }
        }
    }

    orders[cotIndex] = !tangDan;
    hienThiBang();
}

hienThiBang();