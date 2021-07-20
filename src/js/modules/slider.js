function slider({
    sliderWrappSelector,
    sliderInnerSelector,
    offerSlideSelector,
    prevSelector,
    nextSelector,
    currentSelector,
    totalSelector,
    dotsBoxSelector,
}) {
    // слайдер

    const sliderWrapp = document.querySelector(sliderWrappSelector),
        sliderInner = document.querySelector(sliderInnerSelector),
        offerSlide = document.querySelectorAll(offerSlideSelector),
        prev = document.querySelector(prevSelector),
        next = document.querySelector(nextSelector),
        current = document.querySelector(currentSelector),
        total = document.querySelector(totalSelector),
        dotsBox = document.querySelector(dotsBoxSelector);

    let width = window.getComputedStyle(sliderWrapp).width;
    let dot = 0;

    let counter = 0;
    let counterLengs = 0;

    sliderWrapp.style.overflow = "hidden";
    sliderInner.style.width = offerSlide.length * 100 + "%";
    sliderInner.style.display = "flex";
    sliderInner.style.transition = "all 0.3s ease 0s";

    function delLetter(width) {
        return +width.replace(/\D/gi, "");
    }

    function couneterSlid() {
        total.textContent = offerSlide.length < 10 ? "0" + offerSlide.length : offerSlide.length;
        current.textContent = counter < 9 ? "0" + (1 + counter) : 1 + counter;
    }
    couneterSlid();
    document.addEventListener("click", handleClickSlider);
    function handleClickSlider(e) {
        const target = e.target;
        if (target === next) nextSlide();
        if (target === prev) prewSlide();
    }

    function nextSlide() {
        if (counterLengs == delLetter(width) * (offerSlide.length - 1)) {
            counterLengs = 0;
            counter = 0;
        } else {
            counterLengs += +width.slice(0, width.length - 2);
            counter++;
        }
        sliderInner.style.transform = `translateX(-${counterLengs}px)`;
        couneterSlid();
        checkActiveSlide();
    }

    function prewSlide() {
        if (counterLengs == 0) {
            counterLengs = +width.slice(0, width.length - 2) * (offerSlide.length - 1);
            counter = offerSlide.length - 1;
        } else {
            counterLengs -= +width.slice(0, width.length - 2);
            counter--;
        }
        sliderInner.style.transform = `translateX(-${counterLengs}px)`;
        couneterSlid();
        checkActiveSlide();
    }

    function generateDots() {
        for (let i = 0; i < offerSlide.length; i++) {
            const dot = document.createElement("div");
            dot.classList.add("offer__slider-dot");
            dot.id = `s${i + 1}`;
            dotsBox.append(dot);
            dot.addEventListener("click", handleClickDot);
        }
        dot = document.querySelectorAll(".offer__slider-dot");
    }
    generateDots();
    function checkActiveSlide() {
        dot.forEach((el) => {
            el.classList.remove("active");
            if (el.id.slice(1, el.id.length) == counter + 1) {
                el.classList.add("active");
            }
        });
    }
    checkActiveSlide();

    function handleClickDot(e) {
        const target = e.target;
        let dotId = target.id.slice(1, target.id.length);
        counter = dotId - 1;
        counterLengs = +width.slice(0, width.length - 2) * (dotId - 1);
        sliderInner.style.transform = `translateX(-${counterLengs}px)`;
        couneterSlid();
        checkActiveSlide();
    }
}

export default slider;
