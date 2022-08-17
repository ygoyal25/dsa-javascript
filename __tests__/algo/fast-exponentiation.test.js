import { fastExp } from "../fast-exponention";

test('Check Fast Exp for 2 power 10', () => {
    let val = fastExp(2, 10)
    expect(val).toBe(1024);
    val = fastExp(3, 3);
    expect(val).toBe(27);
    val = fastExp(5, 4);
    expect(val).toBe(625);
});