"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.biuldJsonToData = void 0;
const mapperTypesJson = {
    string: (key, value) => `${key}: "${value}"`,
    null: (key) => `${key}: null`,
    number: (key, value) => mapperTypesJson.boolean(key, value),
    boolean: (key, value) => `${key}: ${value}`,
    object: (key, value) => Array.isArray(value) ? `${key}: [${buildArrayData(value)}]` : `${key}: {${(0, exports.biuldJsonToData)(value)}}`,
};
const mapperTypesArray = {
    string: (value) => `"${value}"`,
    null: () => `null`,
    boolean: (value) => `${value}`,
    number: (value) => `${value}`,
    object: (value, level) => Array.isArray(value) ? `[${buildArrayData(value)}]` : `{${(0, exports.biuldJsonToData)(value)}}`,
};
const buildArrayData = (arrayData) => {
    let result = '';
    arrayData.forEach((element, index) => {
        if (index !== 0)
            result += `, `;
        if (element === null) {
            result += mapperTypesArray.null();
            return;
        }
        const functionMapper = mapperTypesArray[typeof element];
        if (functionMapper)
            result += functionMapper(element);
    });
    return result;
};
const biuldJsonToData = (jsonData, level = 0) => {
    let result = '';
    Object.keys(jsonData).forEach((key, index) => {
        const value = jsonData[key];
        if (value === null) {
            if (index !== 0)
                result += `, `;
            result += mapperTypesJson.null(key);
            return;
        }
        const functionMapper = mapperTypesJson[typeof value];
        if (functionMapper) {
            if (index !== 0)
                result += `, `;
            result += functionMapper(key, value, level + 1);
        }
    });
    return result;
};
exports.biuldJsonToData = biuldJsonToData;
//# sourceMappingURL=jsonToData.js.map