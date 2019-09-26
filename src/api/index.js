import { invoke, invoke_download } from '@/utils/invoke.js';
import {params} from "@/config"
const PARAMS = params;

const login = ({
  params = {},
  sucf = "",
  errf = ""
} = {}) => {
  params.m = PARAMS.login;
  invoke(params, sucf, errf);
}
const register = ({
  params = {},
  sucf = "",
  errf = ""
} = {}) => {
  params.m = PARAMS.register;
  invoke(params, sucf, errf);
}
const addLoan = ({
  params = {},
  sucf = "",
  errf = ""
} = {}) => {
  params.m = PARAMS.addLoan;
  invoke(params, sucf, errf);
}


export { login, register, addLoan };