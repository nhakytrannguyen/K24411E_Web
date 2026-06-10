var currentYear = new Date().getFullYear();

var daySelect = document.getElementById("selDay");
var dayHtml = "";
for (var i = 1; i <= 31; i++) {
    var val = i;
    if (i < 10) {
        val = "0" + i;
    }
    dayHtml += "<option value='" + val + "'>" + val + "</option>";
}
daySelect.innerHTML = dayHtml;

var monthSelect = document.getElementById("selMonth");
var monthHtml = "";
for (var i = 1; i <= 12; i++) {
    var val = i;
    if (i < 10) {
        val = "0" + i;
    }
    monthHtml += "<option value='" + val + "'>" + val + "</option>";
}
monthSelect.innerHTML = monthHtml;

var yearSelect = document.getElementById("selYear");
var yearHtml = "";
for (var i = 1970; i <= currentYear; i++) {
    yearHtml += "<option value='" + i + "'>" + i + "</option>";
}
yearSelect.innerHTML = yearHtml;

document.getElementById("btnSignUp").onclick = function() {
    var name = document.getElementById("txtName").value;
    var email = document.getElementById("txtEmail").value;
    
    if (name == "") {
        alert("Name cannot be left blank!");
        document.getElementById("txtName").focus();
        return;
    }
    
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Email must be valid!");
        document.getElementById("txtEmail").focus();
        return;
    }
    
    var day = document.getElementById("selDay").value;
    var month = document.getElementById("selMonth").value;
    var year = document.getElementById("selYear").value;
    var birthday = day + "/" + month + "/" + year;
    
    var gender = "";
    var genderRadios = document.getElementsByName("gender");
    for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked == true) {
            gender = genderRadios[i].value;
        }
    }
    
    var hobbies = "";
    var hobbyCheckboxes = document.getElementsByName("hobby");
    for (var i = 0; i < hobbyCheckboxes.length; i++) {
        if (hobbyCheckboxes[i].checked == true) {
            if (hobbies == "") {
                hobbies = hobbyCheckboxes[i].value;
            } else {
                hobbies = hobbies + ", " + hobbyCheckboxes[i].value;
            }
        }
    }
    
    var color = "";
    var colorRadios = document.getElementsByName("favColor");
    for (var i = 0; i < colorRadios.length; i++) {
        if (colorRadios[i].checked == true) {
            color = colorRadios[i].value;
        }
    }
    
    var headers = document.getElementsByTagName("th");
    for (var i = 0; i < headers.length; i++) {
        headers[i].style.backgroundColor = color;
        if (color == "Blue" || color == "Red" || color == "Green") {
            headers[i].style.color = "white";
        } else {
            headers[i].style.color = "black";
        }
    }
    
    var tbody = document.getElementById("resultTable").getElementsByTagName("tbody")[0];
    
    var rowHtml = "<tr onmouseover='mOver(this)' onmouseout='mOut(this)'>" +
        "<td>" + name + "</td>" +
        "<td>" + email + "</td>" +
        "<td>" + gender + "</td>" +
        "<td>" + birthday + "</td>" +
        "<td>" + hobbies + "</td>" +
        "<td>" + color + "</td>" +
    "</tr>";
    
    tbody.innerHTML += rowHtml;
};

document.getElementById("btnReset").onclick = function() {
    document.getElementById("regForm").reset();
    document.getElementById("txtName").focus();
};

function mOver(row) {
    var cells = row.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "yellow";
    }
}

function mOut(row) {
    var cells = row.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "white";
    }
}