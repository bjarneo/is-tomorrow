module.exports = function isTomorrow(date) {
    if (!(date instanceof Date)) {
        throw TypeError(date + ' is not a Date object');
    }

    const activeDate = new Date(date).getDate();
    const tomorrow = (new Date().getDate() + 1);

    return activeDate === tomorrow;
};
