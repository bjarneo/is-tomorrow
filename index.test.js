const { deepStrictEqual } = require('assert');
const isTomorrow = require('.');

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const dayAfterTomorrow = new Date(tomorrow);
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);

try {
    deepStrictEqual(isTomorrow(today), false);
    deepStrictEqual(isTomorrow(tomorrow), true);
    deepStrictEqual(isTomorrow(dayAfterTomorrow), false);
} catch (e) {
    console.error(e);

    process.exit(1);
}

console.log('🎉 Yas, working as expected');
