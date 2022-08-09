import stockBuySell from "../../algorithms/arrays/buy-sell-stocks/buy-sell-stocks";


describe('Stock Buy Sell', () => {
    test('Case 1', () => {
        const profit = stockBuySell([10,12,13,14])
        expect(profit).toBe(4);
    });

    test('Case 2', () => {
        const profit = stockBuySell([15,14,13,12])
        expect(profit).toBe(0);
    });

    test('Case 3', () => {
        const profit = stockBuySell([100,180,260,310,40,535,695])
        expect(profit).toBe(865);
    });

    test('Case 4', () => {
        const profit = stockBuySell([4,2,2,2,4])
        expect(profit).toBe(2);
    });

    test('Case 5', () => {
        const onlyOnceAllowed = true;
        const profit = stockBuySell([100,180,260,310,40,535,695], onlyOnceAllowed)
        expect(profit).toBe(655);
    });

    test('Case 6', () => {
        const onlyOnceAllowed = true;
        const profit = stockBuySell([7,1,5,3,6,4], onlyOnceAllowed)
        expect(profit).toBe(5);
    });
})
