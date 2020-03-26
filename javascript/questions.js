localStorage.removeItem("questao1");
localStorage.removeItem("questao2");
localStorage.removeItem("questao3");
localStorage.removeItem("questao4");

const foodForm = document.getElementById("foodForm");
const randomForm = document.getElementById("randomForm");

if(randomForm){
    randomForm.addEventListener("submit", function(){
        const question1 = document.querySelector("[name='ditado']:checked").value;
        localStorage.setItem("questao1", question1);

        const question2 = document.querySelector("[name='boneco']:checked").value;
        localStorage.setItem("questao2", question2);

        const question3 = document.querySelector("[name='chuva']:checked").value;
        localStorage.setItem("questao3", question3);    

        const question4 = document.querySelector("[name='som']:checked").value;
        localStorage.setItem("questao4", question4); 
    });
}

if(foodForm){
    foodForm.addEventListener("submit", function(){
        const question1 = document.querySelector("[name='macarrao']:checked").value;
        localStorage.setItem("questao1", question1);

        const question2 = document.querySelector("[name='funghi']:checked").value;
        localStorage.setItem("questao2", question2);

        const question3 = document.querySelector("[name='arroz']:checked").value;
        localStorage.setItem("questao3", question3);    

        const question4 = document.querySelector("[name='cidade']:checked").value;
        localStorage.setItem("questao4", question4); 
    });    
}

let step = 1;

const buttonNext = document.getElementById("buttonNext");
const submitAnswers = document.getElementById("submitAnswers");
const inputChecked = document.querySelectorAll("[type='radio']");

//seleciona todos os inputs para colocar o evento de click neles, assim independente de qual eu clique, vai ativar a linha 54, permitindo clicar no botão de próximo
for(let inputIndex = 0; inputIndex < inputChecked.length; inputIndex++){
    inputChecked[inputIndex].addEventListener("click", function(){
        if(step === 4){
            buttonNext.setAttribute("disabled", "disabled");
            submitAnswers.removeAttribute("disabled");
            return;
        }
        buttonNext.removeAttribute("disabled");
    });    
}

buttonNext.addEventListener("click", function(){
    buttonNext.setAttribute("disabled", "disabled");
    //quando der o click no botão de próximo, vou deixar o display da atual pergunta como none, dar +1 no step e dar display block na próxima pergunta
    document.getElementById("group" + step).style.display = "none";
    step++;
    document.getElementById("group" + step).style.display = "block";
});


