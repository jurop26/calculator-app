import { MAX_DISPLAY_CHARS } from "@/constants/constants";

export const calculateResult = (prev: string) => {
  const toNum = prev
    .replaceAll(",", ".")
    .replaceAll("\u00F7", "/")
    .replaceAll("\u00D7", "*");

  try {
    const result: number = eval(toNum);
    const toFixed = Math.max(
      0,
      MAX_DISPLAY_CHARS - result.toString().split(".")[0]?.length || 0,
    );

    return Number(result.toFixed(toFixed)).toString().replace(".", ",");
  } catch {
    return prev;
  }
};

export const toggleLastNumberSign = (prev: string, lastChar: string) => {
  const nums = prev.match(/-?\d+(?:[.,]\d+)?/g);
  const lastNumber = nums && nums[nums?.length - 1];
  const lastNumberLength = lastNumber?.length || 0;
  const isInBrackets = lastChar === ")";

  if (
    !nums ||
    lastNumber === "0" ||
    (isNaN(Number(lastChar)) && !isInBrackets)
  ) {
    return prev;
  }

  const num = Number(lastNumber?.replace(",", "."));
  const isNegative = num < 0;
  const charsToRemove = lastNumberLength + (isInBrackets ? 2 : 0);
  const removedPart = prev.slice(0, charsToRemove * -1);

  return (
    removedPart +
    (isNegative ? num * -1 : `(${num * -1})`).toString().replace(".", ",")
  );
};
