export const buildReturnData = (returnData: string[] | object[]) => {
  let result = '';
  returnData.forEach((data: any) => {
    if (typeof data === 'string') result += `${data} `;
    if (typeof data === 'object' && !Array.isArray(data)) {
      const key = Object.keys(data)[0];
      result += `${key} : { ${buildReturnData(data[key])} } `;
    }
  });
  return result;
};
