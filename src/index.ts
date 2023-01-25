import importTestFunc from "./importTest";

console.log("index start");

function testFunc() {
    console.log("testFunc");
}

let df = (map: Map<string, string>, str: string) => {
    console.log(`df map test: ${str} is ${map.get(str)}`);
}

testFunc()
importTestFunc(37)

const map = new Map()
map.set('foo', 'bar')
df(map, 'foo')

let symbol = Symbol("111")
console.log(symbol);