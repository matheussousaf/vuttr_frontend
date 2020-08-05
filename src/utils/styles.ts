export function calcFontSize(minFontSize: number, maxFontSize: number) {
  return `calc(${minFontSize}px + (${maxFontSize} - ${minFontSize}) * ((100vw - 300px) / (1600 - 300)));`;
}
