import os from "node:os";
import { handle } from './layers/controller.js';

process.stdin.resume();
process.stdin.setEncoding("utf-8");
process.stdin.on('data', (input) => {
    if(input === null) {
        return;
    }

    input = input.split(os.EOL);

    if (input[0] === "exit") {
        process.exit();
    }

    handle(input);
});
