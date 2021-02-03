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
    let trident = {
        wow: /WOW64/,
        rv: /rv:([^\)]+)/
    };
    if (window.opera) {
        engine.ver = window.opera.version();
        engine.opera = parseFloat(engine.ver);
    } else if (webkit.test(ua)) {
        engine.ver = ua.match(webkit)[1];
        engine.webkit = engine.ver;
    } else if (khtml.test(ua) || khtml1.test(ua)) {
        engine.ver = ua.match(khtml)[1];
        engine.khtml = engine.ver;
    } else if (gecko.test(ua)) {
        engine.ver = ua.match(gecko)[1];
        engine.gecko = engine.ver;
    } else if (trident.wow.test(ua)) {
        engine.ver = ua.match(trident.rv)[1];
        engine.trident = engine.ver;
    } 

    return {
        engine: engine
    }
}();

