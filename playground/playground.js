import MinPriorityQueue from '../data-structures/priority-queue/min-priority-queue';

var getLengthOfOptimalCompression = function(s, k) {
    let map = {};
    for(var i = 0; i < s.length; i++) {
        var char = s[i];
        if (!map[char]) {
            map[char] = 0;
        }
        map[char] += 1;
    }

    let pQ = new MinPriorityQueue({
        compare: (a, b) => a.value - b.value
    });

    Object.keys(map).forEach(key => {
        pQ.enqueue({ key, value: map[key] });
    })

    // console.log('HERE', pQ.arr);
    // pQ.dequeue();
    // console.log('HERE',pQ.arr);
    // pQ.dequeue();
    // console.log('HERE',pQ.arr);
    // pQ.dequeue();
    // console.log('HERE',pQ.arr);
    // pQ.dequeue();
    // console.log('HERE',pQ.arr);
    // pQ.dequeue();
    // console.log('HERE',pQ.arr);

    while(k > 0) {
        let { key, value } = pQ.front();
        if (value <= k) {
            pQ.dequeue();
        } else {
            pQ.dequeue();
            pQ.enqueue({ key, value: value - k });
        }
        k -= value;
        map[key] -= value;
    }

    // console.log(map);
    let count = 0
    for(const key in map) {
        if (map[key]) {
            count += `${key}${map[key]}`.length;
        }
    }
    return count;

};

console.log(getLengthOfOptimalCompression("aaabccd", 3))
