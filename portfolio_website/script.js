const timeContainer = document.getElementById("time-container");
const startDay = "05-01-2022";
const startDay_Date = new Date(startDay);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
    const now = new Date;
    const difference = Math.floor((now.getTime() - startDay_Date.getTime()) / 1000);

    timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);