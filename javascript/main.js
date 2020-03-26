let name = "";

while(name === ""){
    name = prompt("Qual o seu nome?").trim();

    if(!name){
        alert("Por favor, digite o seu nome");
    }
}

document.getElementById("welcomeMsg").innerHTML = "Olá, " + name + ". Seja bem-vindo(a)!";




