import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calculateCall from "./modules/calculate-call";
import timer from "./modules/timer";
import modal from "./modules/modal";
import { openModalWindow } from "./modules/modal";

document.addEventListener("DOMContentLoaded", () => {
    tabs(".tabcontent", ".tabheader__items", ".tabheader__item", "tabheader__item_active");
    slider({
        sliderWrappSelector: ".offer__slider-wrapper",
        sliderInnerSelector: ".offer__slider-inner",
        offerSlideSelector: ".offer__slide",
        prevSelector: ".offer__slider-prev",
        nextSelector: ".offer__slider-next",
        currentSelector: "#current",
        totalSelector: "#total",
        dotsBoxSelector: ".offer__slider-dots-box",
    });
    calculateCall();
    timer(".timer", "2021-12-31");
    
    const modalTimer = setTimeout(() => openModalWindow(".modal", modalTimer), 50000);
    modal("[data-modal]", ".modal", modalTimer);
});
