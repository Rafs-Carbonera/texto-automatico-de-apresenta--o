const nameInput = document.querySelector("#nome");
const lastNameInput = document.querySelector("#sobrenome");
const ageInput = document.querySelector("#idade");
const cityInput = document.querySelector("#cidade");
const stateInput = document.querySelector("#estado");

const areaTrabalhoInput = document.querySelector("#area-trabalho");
const cargoInput = document.querySelector("#cargo");

//const frontEndRadio = document.querySelector("#front-end");
//const backEndRadio = document.querySelector("#back-end");
//const fullStackRadio = document.querySelector("#full-stack");

const liguagensDominaUmaInput = document.querySelector("#linguagens-domina-uma");
const liguagensDominaDuasInput = document.querySelector("#linguagens-domina-duas");
const liguagensDominaTresInput = document.querySelector("#linguagens-domina-tres");

const linguagensConheceUmInput = document.querySelector("#linguagens-conhece-uma");
const linguagensConheceDoisInput = document.querySelector("#linguagens-conhece-duas");
const linguagensConheceTresInput = document.querySelector("#linguagens-conhece-tres");

const hobbiesUmInput = document.querySelector("#hobbies-um");
const hobbiesDoisInput = document.querySelector("#hobbies-dois");
const hobbiesTresInput = document.querySelector("#hobbies-tres");

const emailInput = document.querySelector("#email");

const errorMsg = document.querySelector("#msg");
const submitButton = document.querySelector("#submit-button");
const textoSaida = document.querySelector("#resumo");


submitButton.addEventListener("click", (evento) => {
    evento.preventDefault();
    
    const nameValue = nameInput.value;
    const lastNameValue = lastNameInput.value;
    const ageValue = ageInput.value;
    const cityValue = cityInput.value;
    const stateValue = stateInput.value;

    const areaTrabalhoValue = areaTrabalhoInput.value;
    const cargoValue = cargoInput.value;

    const select = document.querySelector('input[name="devweb"]:checked').value;

    const linguagemDominaUmaValue = liguagensDominaUmaInput.value;
    const linguagemDominaDuasValue = liguagensDominaDuasInput.value;
    const linguagemDominaTresValue = liguagensDominaTresInput.value;

    const linguagemConheceUmValue = linguagensConheceUmInput.value;
    const linguagemConheceDoisValue = linguagensConheceDoisInput.value;
    const linguagemConheceTresValue = linguagensConheceTresInput.value;

    const hobbiesUmValue = hobbiesUmInput.value;
    const hobbiesDoisValue = hobbiesDoisInput.value;
    const hobbiesTresValue = hobbiesTresInput.value;

    const emailValue = emailInput.value;

    if (nameValue === "" || lastNameValue === "" || ageValue === "" || cityValue === "" || stateValue === "" || areaTrabalhoValue === "" || cargoValue === "" || linguagemDominaUmaValue === "" || linguagemConheceUmValue === "" || hobbiesUmValue === "" || emailValue === "") {
        errorMsg.textContent = "Por favor, preencha corretamente todos os campos abaixo.";

        setTimeout(() => {
            errorMsg.textContent = "";
            
        }, 5000);
        return;
    };
      


    const text = document.createElement("p");
    text.classList = "resumo";
    text.innerHTML = `Olá. Meu nome é  ${nameValue} ${lastNameValue}, tenho ${ageValue}, sou de ${cityValue} - ${stateValue}. Trabalho na área de ${areaTrabalhoValue} como ${cargoValue}.
    <br/>Na programação desenvolvo aplicações ${select}, já tendo domínio de linguagens como ${linguagemDominaUmaValue} ${linguagemDominaDuasValue} ${linguagemDominaTresValue},
    e também tenho uma certa familiaridade com ${linguagemConheceUmValue} ${linguagemConheceDoisValue} ${linguagemConheceTresValue}.<br/>
    Entre as coisas que mais gosto de fazer para me divertir ou relaxar está ${hobbiesUmValue}, ${hobbiesDoisValue} e ${hobbiesTresValue}.<br/>
    Para entrar em contato comigo basta mandar um email para ${emailValue}.<br/>
    Desde já agradeço a sua atenção.`
    

    
    textoSaida.appendChild(text);
    

}, {once : true});

//idade somente numero
//futuramente achar um jeito de arrumar a data
//arrumar questão do capitalize
//adicionar mais inputs de linguagens se a pessoa quiser



