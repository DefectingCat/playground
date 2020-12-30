/*
 * @Author: your name
 * @Date: 2020-12-23 21:49:56
 * @LastEditTime: 2020-12-29 21:44:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript高级程序设计c:\Users\xfy\OneDrive\Defectink\test\js\userAgent\main.js
 */
let client = function () {
    let engine = {
        // 主流引擎
        trident: 0,
        gecko: 0,
        webkit: 0,
        khtml: 0,
        opera: 0,

        // 具体版本号
        ver: null
    }

    let ua = navigator.userAgent;
    let webkit = /AppleWebKit\/(\S+)/;
    let khtml = /KHTML\/(\S+)/;
    let khtml1 = /Konqueror\/([^;]+)/;
    let gecko = /rv:([^\)]+)\) Gecko\/\d{8}/;
    if (window.opera) {
        engine.ver = window.opera.version();
        engine.opera = parseFloat(engine.ver);
    } else if (webkit.test(ua)) {
        engine.ver = ua.match(webkit)[1];
        engine.webkit = parseFloat(engine.ver);
    } else if (khtml.test(ua) || khtml1.test(ua)) {
        engine.ver = ua.match(khtml)[1];
        engine.khtml = parseFloat(engine.ver);
    } else if (gecko.test(ua)) {
        engine.ver = ua.match(gecko)[1];
        engine.gecko = parseFloat(engine.ver);
    }

    return {
        engine: engine
    }
}();