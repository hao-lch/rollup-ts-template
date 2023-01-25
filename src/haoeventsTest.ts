import HaoEvents from "hao-events"

export const emitter = HaoEvents()

emitter.on("log", (num: number) => {
    console.log("hao events: " + num);
})