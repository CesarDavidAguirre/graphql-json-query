import { biuldJsonToData, buildReturnData } from './builders';

interface queryObject {
  schemaName: string;
  jsonData: object;
  returnData: any[];
}

const jsonToQuery = (data: queryObject | queryObject[]) => {
  return jsonToQueryOwn('query', data);
};

const jsonToMutation = (data: queryObject | queryObject[]) => {
  return jsonToQueryOwn('mutation', data);
};

const jsonToQueryOwn = (queryName: string, data: queryObject | queryObject[]) => {
  let result = `${queryName} {`;
  if (Array.isArray(data)) {
    data.forEach((simpleData: queryObject) => {
      checkIsArray(simpleData.jsonData);
      result += `${simpleData.schemaName}(${biuldJsonToData(simpleData.jsonData)}){${buildReturnData(
        simpleData.returnData,
      )}}`;
    });
  } else {
    checkIsArray(data.jsonData);
    result += `${data.schemaName}(${biuldJsonToData(data.jsonData)}){${buildReturnData(data.returnData)}}`;
  }
  result += `}`;
  return result;
};

const checkIsArray = (jsonData: object) => {
  if (Array.isArray(jsonData)) {
    const error: TypeError = {
      name: 'ERROR_NO_IS_JSON',
      message: 'the parameter jsonData is a array and the funtion expect a JSON',
    };
    throw error;
  }
};

export { jsonToQuery, jsonToQueryOwn, jsonToMutation };
