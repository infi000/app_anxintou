import axios from "axios";
import { Toast } from "mint-ui";
import { api } from "@/config";
var qs = require("qs");
//通过全局变量process.env 判断环境
//开发环境NODE_ENV:development
//生产环境NODE_ENV:production
var baseUrl = api;

var invoke = function(params, sucf, errf, config) {
  //通信接口
  var _params,
    _sucf =
      sucf ||
      function(d) {
        console.log("success", d);
      },
    _errf =
      errf ||
      function(d) {
        console.log("error", d);
        Toast({
          message: d,
          duration: 2000
        });
      },
    _config = config || "",
    _url = baseUrl;
  if (params) {
    //添加TOKEN验证
    // params.token = TOKEN;
    // params.userid = USERINFO.uid;
    // params.type = USERINFO.utypeid;
    _params = qs.stringify(params);
  }
  if (_config) {
    //form上传时 parmas为formdata
    _params = params;
  }

  axios
    .post(_url, _params, _config)
    .then(function(result) {
      var data = result.data;
      if (data.status == 1) {
        _sucf(data.data);
      } else {
        _errf(data.msg);
      }
    })
    .catch(function(err) {
      log(err);
      _errf("出错请重试");
    });
};
var invoke_download = function(params) {
  //通信接口
  var url = qs.stringify(params);
  window.location.href = baseUrl + url;
};

var invoke_yjw = function(params, sucf, errf, config) {
  //通信接口
  var _params,
    _sucf =
      sucf ||
      function(d) {
        console.log("success", d);
      },
    _errf =
      errf ||
      function(d) {
        console.log("error", d);
        Toast({
          message: d,
          duration: 2000
        });
      },
    _config = config || "",
    _url = baseUrl;
  if (params) {
    _params = qs.stringify(params);
  }
  if (_config) {
    _params = params;
  }

  axios
    .post(_url, _params, _config)
    .then(function(result) {
      var data = result.data;
      if (data.status == 0) {
        _errf(data.msg);
        return;
      } else {
        //对杨经纬接口
        if (data.res == "succ") {
          _sucf(data.data);
          return;
        } else if (data.res == "err") {
          _errf(data.errdata["exmsg"]);
          return;
        }
      }
      _errf("出错请重试");
    })
    .catch(function(err) {
      _errf("出错请重试");
    });
};
// export default { invoke: invoke, invoke2: invoke2, invoke_download: invoke_download };
export { invoke, invoke_yjw, invoke_download };
