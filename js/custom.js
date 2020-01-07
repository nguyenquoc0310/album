function setLink() {
    var inputDate = new Date(2020, 1, 12); 

    if (isToday(inputDate) === true) {
        document.getElementById("thisLink").style.display = "none";
        document.getElementById("otherLink").style.display = "display";
    } else {
        document.getElementById("thisLink").style.display = "display";
        document.getElementById("otherLink").style.display = "none";
    }
}

function isToday(dateParameter) {
    var today = new Date();
    return dateParameter.getDate() === today.getDate() && dateParameter.getMonth() === (today.getMonth()+1) && dateParameter.getFullYear() === today.getFullYear();
}