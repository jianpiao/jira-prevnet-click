console.info("jira-prevent-click is done !!!!");

// content_scripts会自动将内容注入
document.addEventListener("DOMContentLoaded", function () {
  injectCustomJs();
});

// 向页面注入自定义js
function injectCustomJs(jsPath) {
  jsPath = jsPath || "js/inject.js";
  const temp = document.createElement("script");
  temp.setAttribute("type", "text/javascript");
  temp.src = chrome.extension.getURL(jsPath);
  temp.onload = function () {
    console.log("jira-prevent-click加载成功！");
  };
  document.body.appendChild(temp);
}
