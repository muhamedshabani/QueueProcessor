export function clearValues(...elements) {
  elements.forEach((element) => {
    element.value = "";
  });
}
