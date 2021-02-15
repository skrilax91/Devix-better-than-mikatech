import { describe, it, expect } from '@jest/globals';
import { createCosmonaut } from '../src/superComputer';
import { Cosmonaut, Country, Mission } from "../src/types";

describe('Test createCosmonaut function', () => {
	it('Check if david exist', () => {
        expect(createCosmonaut("David", Mission.EARTH, Country.FR)).toStrictEqual({name: "David", mission: Mission.EARTH, country: Country.FR});
	});
});