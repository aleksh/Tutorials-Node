import { parseInputParams } from '../utils/index.js';
import service from './service.js';

export function handle(input) {
    const inputParams = parseInputParams(input[0].split(" "));

    let result = [];

    switch(inputParams.command) {
        case "add":
            result = service.addItem(inputParams.data);
            break;
        case "list":
            result = service.getItems(inputParams.data);
            break;
        case "done":
            result = service.updateItem({...inputParams.data, done: true});
            break;
        case "stats":
            result = ["doesn't work"];
            break;
        case "delete":
            result = service.deleteItem(inputParams.data);
            break;
        case "update":
            result = service.updateItem(inputParams.data);
            break;
        default:
            break;
    }

    console.log("===============================");
    console.log("Action --> " + result.action);
    console.table(result.data);
    console.log("===============================");
}