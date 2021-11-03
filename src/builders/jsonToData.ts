const mapperTypesJson: { [key: string]: Function } = {
  string: (key: string, value: string) => `${key}: "${value}"`,
  null: (key: string) => `${key}: null`,
  number: (key: string, value: number) => mapperTypesJson.boolean(key, value),
  boolean: (key: string, value: boolean | number) => `${key}: ${value}`,
  object: (key: string, value: object) =>
    Array.isArray(value) ? `${key}: [${buildArrayData(value)}]` : `${key}: {${biuldJsonToData(value)}}`,
};

const mapperTypesArray: { [key: string]: Function } = {
  string: (value: string) => `"${value}"`,
  null: () => `null`,
  boolean: (value: boolean | number) => `${value}`,
  number: (value: boolean | number) => `${value}`,
  object: (value: object, level: number) =>
    Array.isArray(value) ? `[${buildArrayData(value)}]` : `{${biuldJsonToData(value)}}`,
};
const buildArrayData = (arrayData: any[]): string => {
  let result = '';
  arrayData.forEach((element, index) => {
    if (element === null) {
      if (index !== 0) result += `, `;
      result += mapperTypesArray.null();
      return;
    }
    const functionMapper = mapperTypesArray[typeof element];
    if (functionMapper) {
      if (index !== 0) result += `, `;
      result += functionMapper(element);
    }
  });
  return result;
};

export const biuldJsonToData = (jsonData: any, level = 0) => {
  let result = '';
  Object.keys(jsonData).forEach((key: string, index) => {
    const value = jsonData[key];
    if (value === null) {
      if (index !== 0) result += `, `;
      result += mapperTypesJson.null(key);
      return;
    }
    const functionMapper = mapperTypesJson[typeof value];
    if (functionMapper) {
      if (index !== 0) result += `, `;
      result += functionMapper(key, value, level + 1);
    }
  });
  return result;
};
