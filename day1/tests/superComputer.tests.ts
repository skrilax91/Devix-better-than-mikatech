import { describe, it, expect } from '@jest/globals';
import { superComputer } from '../src/superComputer';

describe('Test superComputer function', () => {
	it('Simply 1 + 1', () => {
        function back(err: Error, result: null): Error;
        function back(err: null, result: number): number;
        function back(err: Error | null, result: number | null): Error | number {
            expect(result).toBe(2);
            return err || result;
        }
		superComputer(1, "+", 1, back);
	});

    it('Simply 2 * 5', () => {
        function back(err: Error, result: null): Error;
        function back(err: null, result: number): number;
        function back(err: Error | null, result: number | null): Error | number {
            expect(result).toBe(10);
            return err || result;
        }
		superComputer(2, "*", 5, back);
	});

    it('Simply 1 F 1', () => {
        function back(err: Error, result: null): Error;
        function back(err: null, result: number): number;
        function back(err: Error | null, result: number | null): Error | number {
            expect(err.message).toBe("Bad operator");
            return err || result;
        }
		superComputer(1, "f", 1, back);
	});

    it('Simply 1 / 0', () => {
        function back(err: Error, result: null): Error;
        function back(err: null, result: number): number;
        function back(err: Error | null, result: number | null): Error | number {
            expect(err.message).toBe("Division by 0");
            return err || result;
        }
		superComputer(1, "/", 0, back);
	});
});