const form = document.querySelector("form");
const inputImie = document.querySelector("#inputImie");
const inputMail = document.querySelector("#inputMail");
const inputWyrob = document.querySelector("#inputWyrob");

const wyroby = {
    kubek: {
        nazwa: "Kubek",
        dni: 2,
        cena: 45
    },
    miska: {
        nazwa: "Miska",
        dni: 3,
        cena: 70
    },
    wazon: {
        nazwa: "Wazon",
        dni: 4,
        cena: 90
    }
}

const komunikat = document.createElement("p");
document.querySelector(".container").after(komunikat);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const imie = inputImie.value;
    const mail = inputMail.value;
    const wyrob = wyroby[inputWyrob.value];

    komunikat.textContent =
        `${imie} (${mail}) zapisał/a się na wypał ${wyrob.nazwa}, trwający ${wyrob.dni} dni w cenie ${wyrob.cena}zł`;
});