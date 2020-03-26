const userAnswers = [
    localStorage.getItem("questao1"),
    localStorage.getItem("questao2"),
    localStorage.getItem("questao3"),
    localStorage.getItem("questao4")   
];

const foodForm = document.getElementById("foodForm");
const randomForm = document.getElementById("randomForm");

let correctAnswers = [];

if(foodForm){
    correctAnswers = ["cozimento", "cogumelo", "arboreo", "sp"];
} else {
    correctAnswers = ["leite", "marionete", "granizo", "bip"];
}

const questions = document.querySelectorAll("fieldset");

//inicia o loop pelos fieldsets. Como vai iniciar no 0, posso usar a let i como índice
for(let i = 0; i < questions.length; i++){
    //em cada fieldset, seleciona cada um dos labels
    let labels = questions[i].querySelectorAll('label');

    //inicia o loop para colocar o atributo disable em cada um dos labels dentro de cada fieldset
    for(let x = 0; x < labels.length; x++){
        labels[x].querySelector("input").setAttribute("disabled", "disabled");

        //se cada um dos labels for uma das respostas do usuário, vai colocar o atributo checked nesse label em específico
        if(labels[x].querySelector("input").value === userAnswers[i]){
            labels[x].querySelector("input").setAttribute("checked", "checked");
        }

        if(labels[x].querySelector("input").value === correctAnswers[i]){
            labels[x].classList.add("correct");
        } else {
            if(labels[x].querySelector("input").value === userAnswers[i]){
                labels[x].classList.add("incorrect");
            }   
        }
    }
}


