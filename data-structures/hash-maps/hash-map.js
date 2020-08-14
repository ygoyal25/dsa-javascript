class HashMap {
    constructor() {
        this.HMap = [];
        this.storageLen = 10;
    }

    genHash(key) {
        let sum = 0;
        for(var i = 0; i<key.length; i++) {
            sum += key.charCodeAt(i);
        }

        return sum % this.storageLen;
    }

    add(key, value) {
        let hash = this.genHash(key);
        if (!this.HMap[hash]) {
            this.HMap[hash] = [
                [key, value]
            ]
        } else {
            this.HMap[hash].push([key, value]);
        }
    }

    print() {
        console.log(this.HMap);
    }

    find(key) {
        let hash = this.genHash(key);
        if (this.HMap[hash]) {
            return this.HMap[hash].find(pair => pair[0] === key);
        }

        return undefined;
    }
}