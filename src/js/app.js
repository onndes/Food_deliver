import tabs from "./modules/tabs";

document.addEventListener("DOMContentLoaded", () => {
    tabs(".tabcontent", ".tabheader__items", ".tabheader__item", "tabheader__item_active");
});
