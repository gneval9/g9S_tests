/*
                                 ___                           
   __ _ _ __   _____   ____ _| |/ _ \                          
  / _` | '_ \ / _ \ \ / / _` | | (_) |                         
 | (_| | | | |  __/\ V / (_| | |\__, |                         
  \__, |_| |_|\___| \_/_\__,_|_| _/_/                          
  |___/            / ___|  ___  / _| |___      ____ _ _ __ ___ 
                   \___ \ / _ \| |_| __\ \ /\ / / _` | '__/ _ \
                    ___) | (_) |  _| |_ \ V  V / (_| | | |  __/
                   |____/ \___/|_|  \__| \_/\_/ \__,_|_|  \___|
*/

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