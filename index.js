function getDMY(date) {
    return date.getDate().toString() + (date.getMonth() + 1).toString() + date.getFullYear().toString();
}

module.exports = function isTomorrow(date) {
    if (!(date instanceof Date)) {
        throw TypeError(date + ' is not a Date object');
    }

    const activeDate = new Date(date);

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    return getDMY(activeDate) === getDMY(tomorrow);
};
