// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
var string = "/* \u753B\u4E00\u4E2A\u6D77\u7EF5\u5B9D\u5B9D\n* \u9996\u5148\u753B\u4E00\u4E2A\u80CC\u666F\n*/\n.skin * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  .skin *::before,\n  .skin *::after {\n    box-sizing: border-box;\n  }\n  .skin {\n    background: #ffe600;\n    min-height: 60vh;\n    position: relative;\n  }\n  /* \u63A5\u4E0B\u6765\u753B\u9F3B\u5B50\n */\n  .nose {\n    width: 70px; \n    height: 100px;\n    position: absolute;\n    border-radius: 80%;\n    left: 50%;\n    top: 200px;\n    background-color:#000;\n    margin-left: -35px;\n    z-index: 2;\n  }\n  .nose::after {\n    position: absolute;\n    content: \" \";\n    width:60px; \n    height:100px;\n    background:#ffe600;\n    border-radius: 80%;\n    left: 5px;\n    top: 5px;\n    z-index:5;\n  }\n  /* \u63A5\u4E0B\u6765\u753B\u773C\u775B\n  */\n  .eye {\n    width: 140px;\n    height: 140px;\n    position: absolute;\n    left: 50%;\n    top: 110px;\n    margin-left: -70px;\n    background: #fff;\n    border-radius: 50%;\n    border: 6px solid #000;\n  }\n  .eye.left{\n    transform: translateX(-70px);\n  }\n  .eye.right{\n    transform: translateX(70px);\n  }\n  .eye.left::before { \n    content: '';\n    border: 5px solid #000; \n    width: 60px;\n    height: 60px;\n    display: block;\n    border-radius: 50%; \n    background: #64c5f2;\n    position: relative;\n    top: 30px;\n    left: 50px; \n  }\n  .eye.left::after {\n    content: \" \";\n    width: 30px;\n    height: 30px;\n    display: block;\n    background-color: #000;\n    border-radius:50%;\n    position: absolute;\n    top: 46px;\n    left: 66px;  \n  }\n  .eye.right::before { \n    content: '';\n    border: 5px solid #000; \n    width: 60px;\n    height: 60px;\n    display: block;\n    border-radius: 50%; \n    background: #64c5f2;\n    position: relative;\n    top: 30px;\n    left: 20px; \n  }\n  .eye.right::after {\n    content: \" \";\n    width: 30px;\n    height: 30px;\n    display: block;\n    background-color: #000;\n    border-radius:50%;\n    position: absolute;\n    top: 46px;\n    left: 34px;  \n  }\n  /* \u63A5\u4E0B\u6765\u753B\u773C\u776B\u6BDB\n  */\n  .eyelashes.left {\n    position: absolute;\n    top: -30px;\n      left: 60px;\n    width: 8px;\n    height: 25px;\n    background: #000;\n  }\n  .eyelashes.left::before {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 5px;\n      left: 30px;\n      width: 8px;\n    height: 25px;\n      background: #000;\n    transform: rotate(30deg);\n  }\n  .eyelashes.left::after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 5px;\n      left: -30px;\n      width: 8px;\n    height: 25px;\n      background: #000;\n      transform: rotate(-30deg);\n  }\n  .eyelashes.right {\n    position: absolute;\n    top: -30px;\n      left: 60px;\n    width: 8px;\n    height: 25px;\n    background: #000;\n  }\n  .eyelashes.right::before {\n    content: '';\n      display: block;\n      position: absolute;\n      top: 5px;\n      left: -30px;\n      width: 8px;\n    height: 25px;\n      background: #000;\n      transform: rotate(-30deg);\n  }\n  .eyelashes.right::after {\n    content: '';\n      display: block;\n      position: absolute;\n      top: 5px;\n      left: 30px;\n      width: 8px;\n    height: 25px;\n      background: #000;\n      transform: rotate(30deg);\n  }\n  /* \u63A5\u4E0B\u6765\u753B\u8138\u988A\u548C\u5C0F\u96C0\u6591\n  */\n  .face {\n    width: 60px;\n      height: 60px;\n      position: absolute;\n    left: 50%;\n    top: 110px;\n    margin-left: -30px;\n    margin-top: 100px;\n      border: 5px solid #fa3c14;\n      border-radius: 50px;\n      background: #ffe600;\n  }\n  .face.left{\n    transform: translateX(-120px);\n  }\n  .face.right{\n    transform: translateX(120px);\n  }\n  .face::before {\n      content: '';\n      position: absolute;\n      top: 50%;\n      left: 10%;\n      width: 40px;\n      height: 40px;\n      background: #ffe600;\n      z-index: 2;\n  }\n  .spot {\n      display: block;\n      position: absolute;\n      left: 15%;\n      top: 30%;\n      width: 10px;\n      height: 10px;\n      background-color: #fa3c14;\n      border-radius: 50%;\n      z-index: 5;\n  }\n  .spot::before {\n      content: '';\n      display: block;\n      position: absolute;\n      left: 15px;\n    top: -10px;\n      width: 10px;\n      height: 10px;\n      background-color: #fa3c14;\n      border-radius: 50%;\n      z-index: 5;\n  }\n  .spot::after {\n      content: '';\n      display: block;\n      position: absolute;\n      left: 30px;\n      width: 10px;\n      height: 10px;\n      background-color: #fa3c14;\n      border-radius: 50%;\n      z-index: 5;\n  }\n  /* \u63A5\u4E0B\u6765\u753B\u4E00\u4E2A\u5FAE\u7B11\u7684\u5634\u5DF4\n  */\n  .smile {\n      width: 300px;\n      height: 120px;\n    position: absolute;\n    left: 50%;\n    top: 200px;\n    margin-left: -150px;\n      border: 5px solid #000;\n      border-color: #000 transparent transparent transparent;\n      border-radius: 50% / 100px 100px 10px 10px;\n      transform: rotate(180deg);\n      z-index: 2;\n  }\n  .smile::before {\n      content: '';\n      position: absolute;\n      top: 15px;\n      left: 28px;\n      width: 20px;\n      height: 24px;\n    border: 5px solid transparent;\n    border-left: 5px solid #000;\n    transform: rotate(-30deg);\n  }\n  .smile::after {\n      content: '';\n      position: absolute;\n      top: 24px;\n      right: 18px;\n      width: 20px;\n      height: 24px;\n    border: 5px solid transparent;\n    border-left: 5px solid #000;\n    transform: rotate(30deg);\n  }\n  /* \u6700\u540E\u753B\u4E24\u9897\u5927\u95E8\u7259\n  */\n  .teeth {\n    width: 50px;\n      height: 50px;\n    position: absolute;\n    left: 50%;\n    top: 315px;\n    margin-left: -25px;\n      background: white;\n      border-radius: 5px;\t\n      border: 5px solid #000;\n  }\n  .teeth.left {\n      transform: translateX(-30px) rotate(5deg);\n  }\n  .teeth.right {\n      transform: translateX(30px) rotate(-5deg);\n  } \n  /* \u5927\u529F\u544A\u6210\uFF01\n  */ \n";
var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  n: 1,
  // 事件
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  // 初始化
  init: function init() {
    // demo写文本，demo2写样式标签，同时以文本的形式和html的形式展示一个style标签
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    // fix 多次点击播放会卡死
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{}],"../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50412" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map