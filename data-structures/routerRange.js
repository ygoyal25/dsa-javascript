// Can Router range reach from source to destination

const routers = [['A', 0, 0], ['B', 2, 0], ['C', 5, 5], ['D', 0, 15], ['E', 3, 1]];
const range = 2;

function isInRange(router1, router2) {
    return range >= Math.sqrt(Math.pow(router1[1] - router2[1], 2) + Math.pow(router1[2] - router2[2], 2));
    // return Math.abs(router1[1] - router2[1]) <= range && Math.abs(router1[2] - router2[2]) <= range;
}

function canReach(source, destination) {
    if (source === destination) {
        return true;
    }

    // const sInd = routers.findIndex(r => r[0] === source);
    // const dInd = routers.findIndex(r => r[0] === destination);

    const map = {};
    for (let i = 0; i < routers.length; i++) {
        for (let j = 0; j < routers.length; j++) {
            if (i !== j) {
                if (map[routers[i][0]] === undefined) {
                    map[routers[i][0]] = [];
                }

                if (isInRange(routers[i], routers[j])) {
                    map[routers[i][0]].push(routers[j][0]);
                }
            }
        }
    }
    return getPath(source, destination, map);
}

let visited = new Set();
function getPath(s, d, map) {
    if (visited.has(s)) {
        return false;
    }

    if (s === d) {
        return true;
    }

    if (map[s] === []) {
        return false;
    }

    console.log({ map, s, visited });
    visited.add(s);
    for (let ind = 0; ind < map[s].length; ind++) {
        if (getPath(map[s][ind], d, map)) {
            return true;
        }
    }
    return false;
}

console.log(canReach('A', 'E'));
