let host = 'https://39.105.15.139';
// target: 'https://39.105.15.139', // 接口域名
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
};

export { params, host ,api};
