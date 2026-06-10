document.getElementById("btnAdd").onclick = function() {
    var l = document.getElementById("webList");
    var c = document.getElementById("txtContent").value;
    var p = document.getElementById("txtAddPos").value;
    
    var newLi = document.createElement("li");
    newLi.innerHTML = c;
    
    if (p == "") {
        l.appendChild(newLi);
    } else {
        var idx = parseInt(p) - 1;
        var listLi = l.getElementsByTagName("li");
        l.insertBefore(newLi, listLi[idx]);
    }
};

document.getElementById("btnRemove").onclick = function() {
    var l = document.getElementById("webList");
    var p = document.getElementById("txtRemovePos").value;
    
    var idx = parseInt(p) - 1;
    var listLi = l.getElementsByTagName("li");
    
    l.removeChild(listLi[idx]);
};

document.getElementById("btnModify").onclick = function() {
    var l = document.getElementById("webList");
    var nc = document.getElementById("txtNewContent").value;
    var p = document.getElementById("txtModifyPos").value;
    
    var newLi = document.createElement("li");
    newLi.innerHTML = nc;
    
    var idx = parseInt(p) - 1;
    var listLi = l.getElementsByTagName("li");
    
    l.replaceChild(newLi, listLi[idx]);
};