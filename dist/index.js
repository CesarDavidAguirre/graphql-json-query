"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("./builders");
const jsonToQuery = (data) => {
    let result = 'query {';
    if (Array.isArray(data)) {
        data.forEach((simpleData) => {
            result += `${simpleData.schemaName}(${(0, builders_1.biuldJsonToData)(simpleData.jsonData)}){${(0, builders_1.buildReturnData)(simpleData.returnData)}}`;
        });
    }
    else {
        result += `${data.schemaName}(${(0, builders_1.biuldJsonToData)(data.jsonData)}){${(0, builders_1.buildReturnData)(data.returnData)}`;
    }
    result += `}`;
    return result;
};
// test
const data = {
    schemaName: 'test',
    jsonData: {
        data: {
            testString: 'hola',
            testNumber: 56,
            testBoolean: true,
            testNull: null,
            testUndefined: undefined,
            testArray: ['aaa', 'bbb'],
            testjson: {
                testString2: 'hola3',
                testNumber2: 57,
            },
        },
    },
    returnData: ['Id', 'name'],
};
const rr = jsonToQuery(data);
console.log(rr);
const ra = jsonToQuery([data, data]);
console.log(ra);
//# sourceMappingURL=index.js.map