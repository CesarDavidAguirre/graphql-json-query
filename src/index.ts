import { buildJsonToData, buildReturnData } from './builders';

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
      const parameters = Object.keys(simpleData.jsonData).length > 0 ? `(${buildJsonToData(simpleData.jsonData)})` : '';
      result += `${simpleData.schemaName}${parameters}{${buildReturnData(simpleData.returnData)}}`;
    });
  } else {
    checkIsArray(data.jsonData);
    const parameters = Object.keys(data.jsonData).length > 0 ? `(${buildJsonToData(data.jsonData)})` : '';
    result += `${data.schemaName}${parameters}{${buildReturnData(data.returnData)}}`;
  }
  result += `}`;
  return result;
};

const checkIsArray = (jsonData: object) => {
  if (Array.isArray(jsonData)) {
    throw new Error('the parameter jsonData is a array and the function expect a JSON');
  }
};

export { jsonToQuery, jsonToQueryOwn, jsonToMutation };
