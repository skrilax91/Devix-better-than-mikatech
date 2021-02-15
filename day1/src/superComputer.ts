import { resourceLimits } from "worker_threads";
import { Cosmonaut, Country, Mission } from "./types";

type Callback = {
    (err: Error, result?: undefined): Error,
    (err: null, result: number): number
};


export function superComputer(first: number, op: string, sec: number, call: Callback)
{
    var ops = "*/%+-"
    var math = {
        '+': function (x, y) { return x + y},
        '-': function (x, y) { return x - y},
        '*': function (x, y) { return x * y},
        '/': function (x, y) { return x / y},
        '%': function (x, y) { return x % y}
    }
    if (op.length != 1 || !ops.includes(op)) {
        call(new Error("Bad operator"), null);
        return;
    }
    if (op == "/" && sec == 0) {
        call(new Error("Division by 0"), null);
        return;
    }
    call(null, math[op](first, sec));
}

function back(err: Error, result: null): Error;
function back(err: null, result: number): number;
function back(err: Error | null, result: number | null): Error | number {
    if (err) {
        console.log(`Error: ${err.message}`);
    } else {
        console.log(`Resultat: ${result}`);
    }
    return err || result;
}

export function createCosmonaut(name: string, mission: Mission, country: Country): Cosmonaut {
    return {name: name, mission: mission, country: country};
}