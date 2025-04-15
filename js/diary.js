document.addEventListener("DOMContentLoaded", function () {
    const form = document.forms["frmRegist"];

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 
      
        location.href = "index.html";
    });
});