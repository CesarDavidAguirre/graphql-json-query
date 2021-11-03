"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildReturnData = void 0;
const buildReturnData = (returnData) => {
    let result = '';
    returnData.forEach((data, index) => {
        if (index === 0)
            result += `\n`;
        result += `${data}\n`;
    });
    return result;
};
exports.buildReturnData = buildReturnData;
//# sourceMappingURL=returnData.js.map