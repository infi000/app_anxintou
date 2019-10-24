let host = 'https://39.105.15.139';
// let host = 'https://39.105.11.197';
const env = process.env;
if (env.NODE_ENV == 'development') {
  // 开发环境
  host = 'api';
}
// 正式
const api = host + "/loanapi/i.php?";

const params = {
  login: 103061,
  register: 103060,
  addLoan: 103050,
  getLoanList: 101030,
  getSXList: 101013,
  confirmLoan:103063,//用户确认
  bindCard: 103080,
  bindCardQr: 103081,
  bindCardRepeat: 103082,
};

export { params, host ,api};
