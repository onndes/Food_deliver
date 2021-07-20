function timer(id, deadline) {
    // Timer


    function getTimeRemaning(deadline) {
        const t = Date.parse(deadline) - Date.parse(new Date());
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((t / (1000 * 60)) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        return {
            total: t,
            days,
            hours,
            minutes,
            seconds,
        };
    }

    function addZiro(num) {
        if (num < 10) {
            return `0${num}`;
        }
        return num;
    }

    function setLock(selector, endTime) {
        const timer = document.querySelector(selector),
            daysEl = timer.querySelector("#days"),
            hoursEl = timer.querySelector("#hours"),
            minutesEl = timer.querySelector("#minutes"),
            secondsEl = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateTimer, 1000);
        updateTimer();

        function updateTimer() {
            const { total, days, hours, minutes, seconds } = getTimeRemaning(endTime);
            daysEl.innerHTML = addZiro(days);
            hoursEl.innerHTML = addZiro(hours);
            minutesEl.innerHTML = addZiro(minutes);
            secondsEl.innerHTML = addZiro(seconds);
            if (total <= 0) {
                clearInterval(timeInterval);
                daysEl.innerHTML = addZiro(0);
                hoursEl.innerHTML = addZiro(0);
                minutesEl.innerHTML = addZiro(0);
                secondsEl.innerHTML = addZiro(0);
            }
        }
    }
    setLock(id, deadline);
}
export default timer;
