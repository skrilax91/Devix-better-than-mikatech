import { Cosmonaut, Country, Mission } from "./types";
import axios, {AxiosResponse} from 'axios';

function selectCosmonaut(mission: Mission, country: Country): Promise<Cosmonaut[]> {
    return new Promise((resolve) => {
        axios.get<Cosmonaut[]>('http://localhost:7600/cosmo/').then(function (response) {
            var data = [];
            for (let index = 0; index < response.data.length; index++) {
                if (response.data[index].country === country && response.data[index].mission === mission) {
                    data.push(response.data[index]);
                }
            }
            resolve(data);
        });
    })
}