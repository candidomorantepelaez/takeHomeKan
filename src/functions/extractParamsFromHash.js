const createObject = (acc, param) => {
  const valueData = param.split("=");
  return Object.defineProperty(acc, valueData[0], { value: valueData[1] });
};

const extractParamsFromHash = hash =>
  hash
    .substring(1)
    .split("&")
    .reduce(createObject, {});

export default extractParamsFromHash;
