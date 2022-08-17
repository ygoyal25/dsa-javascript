import minPriorityQueue from "../../data-structures/priority-queue/min-priority-queue";


describe('Min Priority Queue', () => {
    test('Case 1', () => {
        const minPQ = new minPriorityQueue((a, b) => a - b);
        minPQ.enqueue(5);
        minPQ.enqueue(10);
        expect(minPQ.front()).toBe(5);
        minPQ.enqueue(7);
        minPQ.enqueue(4);
        expect(minPQ.front()).toBe(4);
        minPQ.enqueue(9);
        expect(minPQ.front()).toBe(4);
        minPQ.enqueue(2);
        expect(minPQ.front()).toBe(2);
        minPQ.dequeue();
        expect(minPQ.front()).toBe(4);
        minPQ.dequeue();
        expect(minPQ.front()).toBe(5);
    });
})
