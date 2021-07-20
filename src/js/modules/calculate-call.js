function calculateCall() {
    // calculate call

    const calcResault = document.querySelector(".calculating__result span");
    let sex, height, weight, age, activity;

    if (localStorage.getItem("sex")) {
        sex = localStorage.getItem("sex");
    } else {
        sex = "femаle";
        localStorage.setItem("sex", "femаle");
    }
    if (localStorage.getItem("activity")) {
        activity = localStorage.getItem("activity");
    } else {
        activity = 1.375;
        localStorage.setItem("activity", 1.375);
    }

    function setConfigurate(selector, classAcive) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
            el.classList.remove(classAcive);
            if (el.getAttribute("id") === localStorage.getItem("sex")) {
                el.classList.add(classAcive);
            }
            if (el.getAttribute("data-activity") === localStorage.getItem("activity")) {
                el.classList.add(classAcive);
            }
        });
    }
    setConfigurate("#gender div", "calculating__choose-item_active");
    setConfigurate(".calculating__choose_big div", "calculating__choose-item_active");

    function claculateCall() {
        if (!sex || !height || !weight || !age || !activity) {
            calcResault.textContent = "0";
            return;
        }
        if (sex === "femаle") {
            calcResault.textContent = Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * activity);
        } else if (sex === "man") {
            calcResault.textContent = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * activity);
        }
    }
    claculateCall();
    function btnValue(selector, activeClass) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
            el.addEventListener("click", (e) => {
                if (e.target.getAttribute("data-activity")) {
                    activity = +e.target.getAttribute("data-activity");
                    localStorage.setItem("activity", +e.target.getAttribute("data-activity"));
                } else {
                    sex = e.target.getAttribute("id");
                    localStorage.setItem("sex", e.target.getAttribute("id"));
                }
                elements.forEach((elem) => elem.classList.remove(activeClass));
                e.target.classList.add(activeClass);
                claculateCall();
            });
        });
    }
    btnValue(".calculating__choose_big div", "calculating__choose-item_active");
    btnValue("#gender div", "calculating__choose-item_active");

    function inputValue(selector) {
        const input = document.querySelector(selector);
        input.addEventListener("input", () => {
            if (input.value.match(/\D/g)) {
                input.style.border = "1px solid red";
            } else {
                input.style.border = "none";
            }
            switch (input.getAttribute("id")) {
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;
            }
            claculateCall();
        });
    }
    inputValue("#height");
    inputValue("#weight");
    inputValue("#age");
}
export default calculateCall;
