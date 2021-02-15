import { Cosmonaut, Country, Mission, Suit } from "./types";
import axios, {AxiosResponse} from 'axios';

function sendCosmonaut(id: string, name: string, mission: Mission, country: Country, suit: Suit) {
    var data = {
        name: name,
        mission: mission,
        coutry: country,
        suit: suit
    }
    new Promise((resolve) => {
        axios.post('http://localhost:7600/cosmo/', data).then(function (response) {
            resolve(response.status);
        });
    })
}