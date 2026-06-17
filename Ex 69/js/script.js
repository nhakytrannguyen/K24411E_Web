var listEmp = [];

function taiDuLieuNhanVien() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var employees = xmlDoc.getElementsByTagName("employee");
            
            for (var i = 0; i < employees.length; i++) {
                listEmp.push(employees[i]);
            }
            locNhanVien();
        }
    };
    xhttp.open("GET", "employees.xml", true);
    xhttp.send();
}

function locNhanVien() {
    var luaChon = document.getElementById("chonTitle").value;
    var tbody = document.getElementById("bangNhanVien");
    var tableHTML = "";

    for (var i = 0; i < listEmp.length; i++) {
        var id = listEmp[i].getAttribute("id");
        var title = listEmp[i].getAttribute("title");
        var name = listEmp[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        var phone = listEmp[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue;

        if (luaChon === "All" || title === luaChon) {
            tableHTML += "<tr>" +
                            "<td>" + id + "</td>" +
                            "<td>" + name + "</td>" +
                            "<td>" + phone + "</td>" +
                         "</tr>";
        }
    }

    tbody.innerHTML = tableHTML;

    if (luaChon !== "All") {
        document.getElementById("oChonMoRong").innerText = luaChon;
    }
}

function resetBoLoc() {
    var oChon = document.getElementById("oChonMoRong");
    
    if (oChon.getElementsByTagName("select").length == 0) {
        oChon.innerHTML = '<select id="chonTitle" onchange="locNhanVien()">' +
                            '<option value="All">All</option>' +
                            '<option value="Architect">Architect</option>' +
                            '<option value="Engineer">Engineer</option>' +
                            '<option value="Teacher">Teacher</option>' +
                         '</select>';
        locNhanVien();
    }
}

taiDuLieuNhanVien();