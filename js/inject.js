function init() {
  const dom = document.querySelector("#description-val");
  if (dom) {
    dom.setAttribute("style", "pointer-events: none;");
  }
}

// 观察节点变化，实时更新节点状态
var elementToObserve = document.querySelector("body");
var observer = new MutationObserver(init);
observer.observe(elementToObserve, { subtree: true, childList: true });
