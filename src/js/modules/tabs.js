function tabs(tabsSelector, tabsConntentSelector, tabsPerentSelector, acticeClass) {
    // Tabs
    const tabs = document.querySelectorAll(tabsSelector),
        tabHeader = document.querySelector(tabsConntentSelector),
        tabItem = document.querySelectorAll(tabsPerentSelector);

    function hideTabContent() {
        tabs.forEach((item) => {
            item.classList.remove("show", "fade");
            item.classList.add("hidden");
        });
        tabItem.forEach((item) => {
            item.classList.remove(acticeClass);
        });
    }
    function showTabContent(i = 0) {
        tabs[i].classList.remove("hidden");
        tabs[i].classList.add("show", "fade");
        tabItem[i].classList.add(acticeClass);
    }
    hideTabContent();
    showTabContent();

    tabHeader.addEventListener("click", (e) => {
        const target = e.target;
        if (target && target.matches(tabsPerentSelector)) {
            tabItem.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;
