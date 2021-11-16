export function isEmail(asValue: string) {
  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(asValue);
}

export function isNickname(asValue: string) {
  var regExp = /^[a-zA-Z0-9가-힣]{1,8}$/;
  return regExp.test(asValue);
}
