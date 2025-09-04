const compareTime = (timeString1, timeString2) => {
    let time1 = new Date(timeString1).getTime();
    let time2 = new Date(timeString2).getTime();
    return time1 > time2;
}

module.exports = {
    compareTime,
}