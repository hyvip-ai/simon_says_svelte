export function matchedValues(generated, entrerd) {
  const colorGenerated = generated.map((item) => {
    return item.dataset.click;
  });
  let stringEnterd = entrerd + "";
  let stringGenerated = colorGenerated + "";
  return stringEnterd === stringGenerated;
}
