export function copyText(element, callback) {
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand("copy");
  callback && callback();
}