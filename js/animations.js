const INCREASE_NUMBER_ANIMATION_SPEED = 50;
let animationInited = false;
function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + '+';
        } else {
            element.innerText = i;
        } 
        i += 100;
        // console.log(element.innerText);
        setTimeout(increaseNumberAnimationStep, INCREASE_NUMBER_ANIMATION_SPEED, i, element, endNumber);
    }
    
}

function initIncreaseNumberAnimation() {
    let element = document.querySelector(".features__clients-count");
    increaseNumberAnimationStep(0, element, 5000);
}

let budget = document.querySelector("#budget");
budget.addEventListener("change", function handleSelectChange(event) {
    // console.log(event);
    if (event.target.value === "other") {
        // Должны добавить еще одно текстовое поле
        let formContainer = document.createElement("div");
        formContainer.classList.add("form__group", "form__other-input");

        let input = document.createElement("input");
        input.placeholder = "Введите ваш вариант";
        input.type = "text";

        formContainer.appendChild(input);

        document.querySelector("#form").insertBefore(formContainer, document.querySelector(".form__submit"));
        // console.log(form);
    }
    let otherInput = document.querySelector(".form__other-input");
    if (event.target.value !== "other" && Boolean(otherInput)) {
        // Удаляем ранее добавленное текстовое поле, если оно есть в DOM
        document.querySelector("#form").removeChild(otherInput);
    }
});

function updateScroll() {
    let header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("header__scrolled");
    } else {
        header.classList.remove("header__scrolled");
    }

    let windowBottomPosition = window.scrollY + window.innerHeight;
    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
    if (windowBottomPosition >= countElementPosition && !animationInited) {
        animationInited = true;
        initIncreaseNumberAnimation();
    }
}
window.addEventListener('scroll', updateScroll);