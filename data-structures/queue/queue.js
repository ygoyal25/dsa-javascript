export default function Queue() {
    this.queue = [];
    this.size = 0;
}

Queue.prototype.enqueue = function(val) {
    this.size += 1;
    this.queue.push(val);
}

Queue.prototype.dequeue = function() {
    if (this.size > 0) {
        this.size -= 1;
        return this.queue.shift();
    }
    return 'Underflow';
}

Queue.prototype.front = function() {
    if (this.size === 0) {
        return 'Queue is Empty';
    }
    return this.queue[0];
}
