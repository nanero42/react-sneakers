export default function getCssVariable(variableName) {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName);
}