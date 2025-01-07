function send() {
    var name = document.getElementById("text1").value;
    var lastname = document.getElementById("text2").value;


    if (name == "" || lastname == "") {
        alert("Los campos no pueden estar vacios");
        return;
        }

    if (name == "Arturo" && lastname == "Galiana") {
        alert("Hola " + name + " " + lastname + ", seras redirigido a la pagina en breve");
        window.location.href = "redirect_test_end.html";
        }

    else {
        alert("No puedes acceder a esta pagina");
        return;
    }
}