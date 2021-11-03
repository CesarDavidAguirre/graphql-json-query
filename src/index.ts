import { biuldJsonToData, buildReturnData } from './builders';
import { queryObject } from './interfaces';

export const jsonToQuery = (data: queryObject | queryObject[]) => {
  let result = 'query {';
  if (Array.isArray(data)) {
    data.forEach((simpleData: queryObject) => {
      result += `${simpleData.schemaName}(${biuldJsonToData(simpleData.jsonData)}){${buildReturnData(
        simpleData.returnData,
      )}}`;
    });
  } else {
    result += `${data.schemaName}(${biuldJsonToData(data.jsonData)}){${buildReturnData(data.returnData)}}`;
  }
  result += `}`;
  return result;
};

// test

const data: queryObject = {
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
