import { mergeRight, objOf } from "ramda";

const createObject = (acc, param) => {
  const valueData = param.split("=");
  return mergeRight(acc, objOf(valueData[0])(valueData[1]));
};

const extractParamsFromHash = hash =>
  String(hash)
    .substring(1)
    .split("&")
    .reduce(createObject, {});

export default extractParamsFromHash;
