import { Cosmonaut, Country, Mission } from "./types";
import fs from 'fs';
import * as data from './cosmonaut.json';

function getCosmonaut(src: string): Cosmonaut {
    if (!fs.existsSync(src)) {
        return null;
    }
    return {name: data.name, mission: data.mission, country: data.country};
}