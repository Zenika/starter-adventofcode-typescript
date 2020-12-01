import {findTuplesThree, findTuplesTwo} from "./day1";

describe('day one part 1', () => {
    it('return 2 number of example', () => {
        const data = [1721, 979, 366, 299, 675, 1456]
        const tuples = findTuplesTwo(data)
        expect(tuples).toEqual([299, 1721])
    })
});

describe('day one part 2', () => {
    it('return 3 number of example', () => {
        const data = [1721, 979, 366, 299, 675, 1456]
        const tuples = findTuplesThree(data)
        expect(tuples).toEqual([979, 366, 675])
    })
});
