export const buildReturnData = (returnData: string[]) => {
  let result = '';
  returnData.forEach((data: string, index) => {
    if (index === 0) result += `\n`;
    result += `${data}\n`;
  });
  return result;
};
