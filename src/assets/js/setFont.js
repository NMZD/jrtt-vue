/**
 * 动态设置html字体大小
 */
var clientWidth = document.documentElement.clientWidth;
clientWidth > 750 ? 750 : clientWidth;
document.documentElement.style.fontSize = 100 * clientWidth / 375 + "px";