$(document).ready(function (e) {
  // createDOM_navModal();


  $(".g-hd-nav a").mouseover(function (e) {

    event.stopPropagation();
    $(".g-hd-modal").stop();
    var dt = $(this).attr("data-type");
    $(".g-hd-modal-con").hide();
    console.log(dt)
    if (dt) {
      $(".g-hd-modal").slideDown('fast');
      $(".g-hd-modal-con[data-type=" + dt + "]").show();
    } else {
      $(".g-hd-modal").hide();
    }
  });
  $(".g-hd-nav a").click(function (e) {
    event.stopPropagation();
    $(".g-hd-modal").stop();
    $(".g-hd-modal").hide();
  });
  $(".g-hd").mouseleave(function (e) {
    event.stopPropagation();
    $(".g-hd-modal").stop();
    $(".g-hd-modal").hide();
  });
});



function createDOM_navModal(argument) {
  var html = '<div class="g-hd-modal-con" datatype="about" style="display: none">\
                    <div class="g-hd-modal-l">\
                        <ul>\
                            <li class="f-bg-main"><a href="./about.html">公司简介 <embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                            <li><a href="./about.html">企业文化<embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                            <li><a href="./about.html">企业资质<embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                        </ul>\
                    </div>\
                    <div class="g-hd-modal-r">\
                        <div class="pull-left">\
                            <dl class="title-nav">\
                                <dt class="f-c-main">企业文化</dt>\
                                <dd>精研、创新、忠信、共享</dd>\
                            </dl>\
                            <ul class="title-link">\
                                <li><span>快速链接</span></li>\
                                <li><a href="">文化链接跳</a></li>\
                                <li><a href="">文化链接跳</a></li>\
                                <li><a href="">文化链接跳</a></li>\
                                <li><a href="">文化链接跳</a></li>\
                            </ul>\
                        </div>\
                        <div class="pull-right">\
                            <div class="title-img">\
                                <p>企业文化建设</p>\
                                <img src="./static/img/about1.png" alt="">\
                                <p><a href="">企业文化建设链接跳转</a></p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="clear"></div>\
                </div>\
                <div class="g-hd-modal-con" datatype="product" style="display: none">\
                    <div class="g-hd-modal-l">\
                        <ul>\
                            <li class="f-bg-main"><a href="./product.html?nav=1">微模块IDC数据中心建设 <embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                            <li><a href="./product.html?nav=2">软件工程项目开发与服务<embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                            <li><a href="./product.html?nav=3">大数据平台建设与应用开发<embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                            <li><a href="./product.html?nav=4">信息系统运维监管平台<embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                        </ul>\
                    </div>\
                    <div class="g-hd-modal-r">\
                        <div class="pull-left">\
                            <dl class="title-nav">\
                                <dt class="f-c-main">微模块IDC数据中心建</dt>\
                                <dd> </dd>\
                            </dl>\
                            <ul class="title-link">\
                                <li><a href="">在线工频系列UPS</a></li>\
                                <li><a href="">后备系列UPS</a></li>\
                                <li><a href="">在线高频系列UPS</a></li>\
                                <li><a href="">户外系列UPS</a></li>\
                                <li><a href="">监控设备选配件</a></li>\
                            </ul>\
                        </div>\
                        <div class="pull-right">\
                            <div class="title-product">\
                                <a href="">\
                                    <dt><img src="./static/img/product3.png" alt=""></dt>\
                                    <dd>EA660系列模块化 20-160kVA UPS</dd>\
                                </a>\
                                <a href="">\
                                    <dt><img src="./static/img/product3.png" alt=""></dt>\
                                    <dd>EA660系列模块化 20-160kVA UPS</dd>\
                                </a>\
                                <a href="">\
                                    <dt><img src="./static/img/product3.png" alt=""></dt>\
                                    <dd>EA660系列模块化 20-160kVA UPS</dd>\
                                </a>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="clear"></div>\
                </div>\
                <div class="g-hd-modal-con" datatype="news" style="display: none">\
                    <div class="g-hd-modal-l">\
                        <ul>\
                            <li class="f-bg-main"><a href="">企业新闻 <embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                            <li style="display:none"><a href="">业内新闻<embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                        </ul>\
                    </div>\
                    <div class="g-hd-modal-r">\
                        <div class="pull-left" style="width: 80%;">\
                            <dl class="title-nav">\
                                <dt class="f-c-main">企业新闻</dt>\
                                <dd> </dd>\
                            </dl>\
                            <ul class="title-link">\
                                <li><a href="./newsdetail.html?num=0">人工智能带给各行业的冲击和机遇</a><span>2018-6-4</span></li>\
                                <li><a href="./newsdetail.html?num=1">浅谈软件定义卫星</a><span>2018-5-13</span></li>\
                                <li><a href="./newsdetail.html?num=2">你附近有什么标识？”——基于邻近相关性的搜寻</a><span>2018-4-10</span></li>\
                                <li><a href="./newsdetail.html?num=3">浅谈军事航天气象保障</a><span>2018-3-10</span></li>\
                                <li><a href="./newsdetail.html?num=4">“量子”计算改变我们的生活</a><span>2018-2-2</span></li>\
                            </ul>\
                        </div>\
                    </div>\
                    <div class="clear"></div>\
                </div>\
                <div class="g-hd-modal-con" datatype="contact" style="display: none">\
                    <div class="g-hd-modal-l">\
                        <ul>\
                            <li class="f-bg-main"><a href="">服务支持 <embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                            <li><a href="./contactjob.html">加入我们<embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                        </ul>\
                    </div>\
                    <div class="g-hd-modal-r">\
                        <div class="pull-left">\
                            <dl class="title-nav">\
                                <dt class="f-c-main">服务支持</dt>\
                                <dd></dd>\
                            </dl>\
                            <ul class="title-link">\
                                <li>联系电话：010-57252161</li>\
                                <li>联系邮箱： service@deeputech.com</li>\
                                <li>地理位置: 北京市 西城区 红居街13号 楼翔峰大厦5层</li>\
                            </ul>\
                        </div>\
                        <div class="pull-right">\
                            <div class="title-img">\
                                <p>地图</p>\
                                <iframe src="./map.html" width="100%" height="300px"></iframe>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="clear"></div>\
                </div>';

  $(".g-hd-modal").html(html);
}
