import reverse from '../src/index.js';
import fs from 'fs';
import path from 'path';

test('reverse text from file', () => {
    const dataPath = path.join(__dirname, '..', '__fixtures__', 'Data.txt');
    const resultPath = path.join(__dirname, '..', '__fixtures__', 'result.txt');

    const text = fs.readFileSync(dataPath, 'utf-8');
    const reversedText = reverse(text);
    const expectedReversedText = fs.readFileSync(resultPath, 'utf-8');

    expect(reversedText).toEqual(expectedReversedText);
});