const { deepStrictEqual } = require('assert');
const isTomorrow = require('.');

const today = new Date('2020-01-31T11:11:11.111Z');
const tomorrow = new Date('2020-02-01T11:11:11.111Z');
tomorrow.setDate(tomorrow.getDate() + 1);

const dayAfterTomorrow = new Date(tomorrow);
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate('2020-02-01T11:11:11.111Z') + 1);

try {
    deepStrictEqual(isTomorrow(today), false);
    deepStrictEqual(isTomorrow(tomorrow), true);
    deepStrictEqual(isTomorrow(dayAfterTomorrow), false);
    console.log('🎉 Yas, working as expected');
} catch (e) {
    console.error(e);
    console.error('Nope, not working as expected');

    process.exit(1);
}
