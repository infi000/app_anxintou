import { invoke, invoke_yjw } from "@/utils/invoke.js";
import { params } from "@/config";
const PARAMS = params;

const login = ({ params = {}, sucf = "", errf = "" } = {}) => {
  params.m = PARAMS.login;
  invoke(params, sucf, errf);
};
const register = ({ params = {}, sucf = "", errf = "" } = {}) => {
  params.m = PARAMS.register;
  invoke(params, sucf, errf);
};
const addLoan = ({ params = {}, sucf = "", errf = "" } = {}) => {
  params.m = PARAMS.addLoan;
  invoke(params, sucf, errf);
};
const confirmLoan = ({ params = {}, sucf = "", errf = "" } = {}) => {
  params.m = PARAMS.confirmLoan;
  invoke(params, sucf, errf);
};
//查询用户借款信息 type=1申请 2还款 3完成
const getLoanList = ({ params = {}, sucf = "", errf = "" } = {}) => {
  params.m = PARAMS.getLoanList;
  invoke(params, sucf, errf);
};
//获取合同接口 id: 借款ID
const getLoan = ({ params = {}, sucf = "", errf = "" } = {}) => {
  params.m = PARAMS.getLoan;
  invoke(params, sucf, errf);
};
//查询用户生息表
const getSXList = ({ params = {}, sucf = "", errf = "" } = {}) => {
  params.m = PARAMS.getSXList;
  invoke(params, sucf, errf);
};
//有短信验证绑卡
const bindCard = ({ params = {}, sucf = "", errf = "" } = {}) => {
  params.m = PARAMS.bindCard;
  invoke_yjw(params, sucf, errf);
};
//短信确认绑卡
const bindCardQr = ({ params = {}, sucf = "", errf = "" } = {}) => {
  params.m = PARAMS.bindCardQr;
  invoke_yjw(params, sucf, errf);
};
//合同签章接口  bid: 借款ID
const loanSignature = ({ params = {}, sucf = "", errf = "" } = {}) => {
  params.m = PARAMS.loanSignature;
  invoke_yjw(params, sucf, errf);
};

export {
  login,
  register,
  addLoan,
  confirmLoan,
  getSXList,
  getLoanList,
  getLoan,
  bindCard,
  bindCardQr,
  loanSignature
};
