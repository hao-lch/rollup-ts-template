
import {emitter} from "./haoeventsTest"

emitter.emit('log', 1)


export default function importTestFunc(num:number) {
    console.log("importTestFunc num: " + num);
}
