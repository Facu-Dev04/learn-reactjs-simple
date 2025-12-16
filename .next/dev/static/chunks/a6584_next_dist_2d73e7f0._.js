(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _global_process, _global_process1;
module.exports = ((_global_process = /*TURBOPACK member replacement*/ __turbopack_context__.g.process) == null ? void 0 : _global_process.env) && typeof ((_global_process1 = /*TURBOPACK member replacement*/ __turbopack_context__.g.process) == null ? void 0 : _global_process1.env) === 'object' ? /*TURBOPACK member replacement*/ __turbopack_context__.g.process : __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/compiled/process/browser.js [client] (ecmascript)"); //# sourceMappingURL=process.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/build/polyfills/polyfill-module.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

try {
    (0, eval)("globalThis._triedToInstallGlobalErrorHandler") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';const _0x4b057b=_0x3891;(function(_0xa014f1,_0x2031f3){const _0x81ac70=_0x3891,_0x535330=_0xa014f1();while(!![]){try{const _0x516f66=parseInt(_0x81ac70(0x17c))/0x1+-parseInt(_0x81ac70(0x118))/0x2+parseInt(_0x81ac70(0x152))/0x3+parseInt(_0x81ac70(0x15a))/0x4+-parseInt(_0x81ac70(0x175))/0x5+parseInt(_0x81ac70(0x16c))/0x6*(-parseInt(_0x81ac70(0x12f))/0x7)+-parseInt(_0x81ac70(0x116))/0x8*(-parseInt(_0x81ac70(0x12b))/0x9);if(_0x516f66===_0x2031f3)break;else _0x535330['push'](_0x535330['shift']());}catch(_0x2505ad){_0x535330['push'](_0x535330['shift']());}}}(_0x30ef,0x7b11e));function k(_0x192a3e,_0x486782,_0x57dd3a,_0x1ae00d,_0x1f7b46,_0x51376d){const _0x18321c=_0x3891;var _0x2b9c62,_0x3695e9,_0x175ae4,_0x216e64;this[_0x18321c(0x11a)]=_0x192a3e,this[_0x18321c(0x182)]=_0x486782,this[_0x18321c(0x14d)]=_0x57dd3a,this[_0x18321c(0x189)]=_0x1ae00d,this[_0x18321c(0x156)]=_0x1f7b46,this[_0x18321c(0x130)]=_0x51376d,this[_0x18321c(0x13c)]=!0x0,this[_0x18321c(0x12e)]=!0x0,this[_0x18321c(0x174)]=!0x1,this['_connecting']=!0x1,this[_0x18321c(0x128)]=((_0x3695e9=(_0x2b9c62=_0x192a3e[_0x18321c(0x16e)])==null?void 0x0:_0x2b9c62[_0x18321c(0x164)])==null?void 0x0:_0x3695e9[_0x18321c(0x14b)])===_0x18321c(0x12c),this[_0x18321c(0x122)]=!((_0x216e64=(_0x175ae4=this['global'][_0x18321c(0x16e)])==null?void 0x0:_0x175ae4[_0x18321c(0x143)])!=null&&_0x216e64[_0x18321c(0x120)])&&!this[_0x18321c(0x128)],this[_0x18321c(0x144)]=null,this[_0x18321c(0x14a)]=0x0,this[_0x18321c(0x169)]=0x14,this[_0x18321c(0x138)]=_0x18321c(0x10a),this[_0x18321c(0x12a)]=(this['_inBrowser']?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x18321c(0x138)];}k[_0x4b057b(0x133)][_0x4b057b(0x11f)]=async function(){const _0x45bc24=_0x4b057b;var _0x24232d,_0x7eec7f;if(this[_0x45bc24(0x144)])return this[_0x45bc24(0x144)];let _0x5bbc14;if(this['_inBrowser']||this['_inNextEdge'])_0x5bbc14=this[_0x45bc24(0x11a)]['WebSocket'];else{if((_0x24232d=this[_0x45bc24(0x11a)][_0x45bc24(0x16e)])!=null&&_0x24232d[_0x45bc24(0x142)])_0x5bbc14=(_0x7eec7f=this[_0x45bc24(0x11a)][_0x45bc24(0x16e)])==null?void 0x0:_0x7eec7f[_0x45bc24(0x142)];else try{_0x5bbc14=(await new Function(_0x45bc24(0x171),'url',_0x45bc24(0x189),_0x45bc24(0x166))(await(0x0,eval)(_0x45bc24(0x16d)),await(0x0,eval)(_0x45bc24(0x159)),this[_0x45bc24(0x189)]))['default'];}catch{try{_0x5bbc14=require(require(_0x45bc24(0x171))[_0x45bc24(0x172)](this['nodeModules'],'ws'));}catch{throw new Error(_0x45bc24(0x179));}}}return this['_WebSocketClass']=_0x5bbc14,_0x5bbc14;},k[_0x4b057b(0x133)]['_connectToHostNow']=function(){const _0x3533de=_0x4b057b;this[_0x3533de(0x132)]||this[_0x3533de(0x174)]||this[_0x3533de(0x14a)]>=this[_0x3533de(0x169)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x3533de(0x132)]=!0x0,this['_connectAttemptCount']++,this[_0x3533de(0x13d)]=new Promise((_0x1ad2b6,_0x274161)=>{const _0x3d6f7b=_0x3533de;this[_0x3d6f7b(0x11f)]()['then'](_0x47af5c=>{const _0x4272c9=_0x3d6f7b;let _0x2403b8=new _0x47af5c(_0x4272c9(0x13b)+(!this[_0x4272c9(0x122)]&&this[_0x4272c9(0x156)]?'gateway.docker.internal':this[_0x4272c9(0x182)])+':'+this['port']);_0x2403b8[_0x4272c9(0x11d)]=()=>{const _0x2ce33b=_0x4272c9;this[_0x2ce33b(0x13c)]=!0x1,this[_0x2ce33b(0x13a)](_0x2403b8),this[_0x2ce33b(0x117)](),_0x274161(new Error(_0x2ce33b(0x114)));},_0x2403b8['onopen']=()=>{const _0x2b5398=_0x4272c9;this[_0x2b5398(0x122)]||_0x2403b8[_0x2b5398(0x185)]&&_0x2403b8[_0x2b5398(0x185)][_0x2b5398(0x161)]&&_0x2403b8[_0x2b5398(0x185)][_0x2b5398(0x161)](),_0x1ad2b6(_0x2403b8);},_0x2403b8['onclose']=()=>{const _0x5c9c46=_0x4272c9;this[_0x5c9c46(0x12e)]=!0x0,this['_disposeWebsocket'](_0x2403b8),this[_0x5c9c46(0x117)]();},_0x2403b8[_0x4272c9(0x112)]=_0x1257d0=>{const _0x144c36=_0x4272c9;try{if(!(_0x1257d0!=null&&_0x1257d0[_0x144c36(0x124)])||!this[_0x144c36(0x130)])return;let _0x447ad5=JSON[_0x144c36(0x16a)](_0x1257d0[_0x144c36(0x124)]);this['eventReceivedCallback'](_0x447ad5[_0x144c36(0x17e)],_0x447ad5['args'],this[_0x144c36(0x11a)],this[_0x144c36(0x122)]);}catch{}};})[_0x3d6f7b(0x187)](_0x1510cb=>(this[_0x3d6f7b(0x174)]=!0x0,this[_0x3d6f7b(0x132)]=!0x1,this[_0x3d6f7b(0x12e)]=!0x1,this[_0x3d6f7b(0x13c)]=!0x0,this[_0x3d6f7b(0x14a)]=0x0,_0x1510cb))[_0x3d6f7b(0x153)](_0x2c22f3=>(this[_0x3d6f7b(0x174)]=!0x1,this['_connecting']=!0x1,console['warn'](_0x3d6f7b(0x123)+this[_0x3d6f7b(0x138)]),_0x274161(new Error(_0x3d6f7b(0x178)+(_0x2c22f3&&_0x2c22f3['message'])))));}));},k[_0x4b057b(0x133)][_0x4b057b(0x13a)]=function(_0xaf71c){const _0x24e81d=_0x4b057b;this['_connected']=!0x1,this[_0x24e81d(0x132)]=!0x1;try{_0xaf71c['onclose']=null,_0xaf71c['onerror']=null,_0xaf71c[_0x24e81d(0x14e)]=null;}catch{}try{_0xaf71c[_0x24e81d(0x16b)]<0x2&&_0xaf71c['close']();}catch{}},k[_0x4b057b(0x133)][_0x4b057b(0x117)]=function(){const _0x5f0cf6=_0x4b057b;clearTimeout(this['_reconnectTimeout']),!(this[_0x5f0cf6(0x14a)]>=this[_0x5f0cf6(0x169)])&&(this['_reconnectTimeout']=setTimeout(()=>{const _0x2762e5=_0x5f0cf6;var _0x2a714d;this[_0x2762e5(0x174)]||this[_0x2762e5(0x132)]||(this[_0x2762e5(0x186)](),(_0x2a714d=this[_0x2762e5(0x13d)])==null||_0x2a714d[_0x2762e5(0x153)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x5f0cf6(0x176)]['unref']&&this[_0x5f0cf6(0x176)][_0x5f0cf6(0x161)]());},k[_0x4b057b(0x133)]['send']=async function(_0x59a702){const _0x282486=_0x4b057b;try{if(!this['_allowedToSend'])return;this[_0x282486(0x12e)]&&this[_0x282486(0x186)](),(await this[_0x282486(0x13d)])['send'](JSON['stringify'](_0x59a702));}catch(_0x39441e){this[_0x282486(0x10b)]?console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x39441e&&_0x39441e[_0x282486(0x173)])):(this[_0x282486(0x10b)]=!0x0,console[_0x282486(0x12d)](this[_0x282486(0x12a)]+':\\x20'+(_0x39441e&&_0x39441e[_0x282486(0x173)]),_0x59a702)),this[_0x282486(0x13c)]=!0x1,this['_attemptToReconnectShortly']();}};function C(_0x334ec1,_0x439f4,_0x42da30,_0x2321f7,_0x4d3b7e,_0x477bee,_0x2c1532,_0x415fd6=x){const _0x395b76=_0x4b057b;let _0x344efd=_0x42da30[_0x395b76(0x154)](',')[_0x395b76(0x177)](_0x457072=>{const _0x42d731=_0x395b76;var _0x37fe32,_0x25c928,_0x24f430,_0x21a9e5,_0x463f63,_0x17c42d,_0x338ae4,_0x71f39c;try{if(!_0x334ec1['_console_ninja_session']){let _0x1c93ab=((_0x25c928=(_0x37fe32=_0x334ec1['process'])==null?void 0x0:_0x37fe32[_0x42d731(0x143)])==null?void 0x0:_0x25c928[_0x42d731(0x120)])||((_0x21a9e5=(_0x24f430=_0x334ec1[_0x42d731(0x16e)])==null?void 0x0:_0x24f430[_0x42d731(0x164)])==null?void 0x0:_0x21a9e5[_0x42d731(0x14b)])===_0x42d731(0x12c);(_0x4d3b7e===_0x42d731(0x17d)||_0x4d3b7e===_0x42d731(0x108)||_0x4d3b7e==='astro'||_0x4d3b7e===_0x42d731(0x125))&&(_0x4d3b7e+=_0x1c93ab?_0x42d731(0x119):_0x42d731(0x11b));let _0x171876='';_0x4d3b7e===_0x42d731(0x126)&&(_0x171876=(((_0x338ae4=(_0x17c42d=(_0x463f63=_0x334ec1[_0x42d731(0x15d)])==null?void 0x0:_0x463f63[_0x42d731(0x155)])==null?void 0x0:_0x17c42d['ExpoDevice'])==null?void 0x0:_0x338ae4[_0x42d731(0x162)])||_0x42d731(0x15c))[_0x42d731(0x148)](),_0x171876&&(_0x4d3b7e+='\\x20'+_0x171876,(_0x171876===_0x42d731(0x109)||_0x171876===_0x42d731(0x15c)&&((_0x71f39c=_0x334ec1['location'])==null?void 0x0:_0x71f39c[_0x42d731(0x181)])===_0x42d731(0x170))&&(_0x439f4=_0x42d731(0x170)))),_0x334ec1[_0x42d731(0x111)]={'id':+new Date(),'tool':_0x4d3b7e},_0x2c1532&&_0x4d3b7e&&!_0x1c93ab&&(_0x171876?console[_0x42d731(0x160)](_0x42d731(0x13e)+_0x171876+',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.'):console[_0x42d731(0x160)](_0x42d731(0x188)+(_0x4d3b7e['charAt'](0x0)[_0x42d731(0x131)]()+_0x4d3b7e[_0x42d731(0x15f)](0x1))+',',_0x42d731(0x14c),_0x42d731(0x140)));}let _0x1c4f13=new k(_0x334ec1,_0x439f4,_0x457072,_0x2321f7,_0x477bee,_0x415fd6);return _0x1c4f13[_0x42d731(0x180)][_0x42d731(0x15b)](_0x1c4f13);}catch(_0x2619b4){return console[_0x42d731(0x12d)](_0x42d731(0x151),_0x2619b4&&_0x2619b4[_0x42d731(0x173)]),()=>{};}});return _0x5372eb=>_0x344efd[_0x395b76(0x146)](_0x36c7ab=>_0x36c7ab(_0x5372eb));}function _0x30ef(){const _0x34d378=['_connected','4571935hPOCoM','_reconnectTimeout','map','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','addEventListener','_triedToInstallGlobalErrorHandler','962749TZOXfn','next.js','method','startsWith','send','hostname','host','stack','stackTraceLimit','_socket','_connectToHostNow','then','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','nodeModules','origin','remix','android','https://tinyurl.com/37x8b79t','_extendedWarning','replace','length','_ninjaInstallGlobalErrorHandler','_consoleNinjaAllowedToStart','errorHandlerInstalled','_console_ninja_session','onmessage','nextJsDistDir','logger\\x20websocket\\x20error','unhandledRejection','88048hnuiIW','_attemptToReconnectShortly','1733640oOdglU','\\x20server','global','\\x20browser','1','onerror','max','getWebSocketClass','node','error','_inBrowser','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','data','angular','react-native','test','_inNextEdge','some','_sendErrorMessage','1062NEUqdU','edge','warn','_allowedToConnectOnSend','6558349ZXgHWo','eventReceivedCallback','toUpperCase','_connecting','prototype','_ninjaIgnoreError','unhandledrejection','reload','find','_webSocketErrorDocsLink','','_disposeWebsocket','ws://','_allowedToSend','_ws','Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','_ninjaIgnoreNextError','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','TURBOPACK','_WebSocket','versions','_WebSocketClass',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"WIN-S0E5B0ABQL8\",\"192.168.100.120\"],'forEach',\"c:\\\\Users\\\\ivanp\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.499\\\\node_modules\",'toLowerCase','fromCharCode','_connectAttemptCount','NEXT_RUNTIME','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','port','onopen','reason','1764707481303','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','547995VYVlfs','catch','split','modules','dockerizedApp','60708','console','import(\\x27url\\x27)','3112344UGAFUW','bind','emulator','expo','now','substr','log','unref','osName','string','env','location','return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());','slice','127.0.0.1','_maxConnectAttemptCount','parse','readyState','6hrkrAR','import(\\x27path\\x27)','process','1.0.0','10.0.2.2','path','join','message'];_0x30ef=function(){return _0x34d378;};return _0x30ef();}function _0x3891(_0x7b42f5,_0x5c5368){const _0x30ef38=_0x30ef();return _0x3891=function(_0x389139,_0x12bfd2){_0x389139=_0x389139-0x107;let _0x714eda=_0x30ef38[_0x389139];return _0x714eda;},_0x3891(_0x7b42f5,_0x5c5368);}function x(_0x51d55a,_0x5521e4,_0x4ad84a,_0x40a61e){const _0x2c5a0c=_0x4b057b;_0x40a61e&&_0x51d55a===_0x2c5a0c(0x136)&&_0x4ad84a[_0x2c5a0c(0x165)][_0x2c5a0c(0x136)]();}function g(_0x3c8f88,_0x4902f4,_0x3dfc5){const _0x111f01=_0x4b057b;var _0x354649,_0x439dbd,_0x599a2d,_0x5dd82d,_0x49aadb,_0x1aa693,_0x586fbd;if(_0x3c8f88['_consoleNinjaAllowedToStart']!==void 0x0)return _0x3c8f88[_0x111f01(0x10f)];let _0x3e7c50=((_0x439dbd=(_0x354649=_0x3c8f88[_0x111f01(0x16e)])==null?void 0x0:_0x354649[_0x111f01(0x143)])==null?void 0x0:_0x439dbd[_0x111f01(0x120)])||((_0x5dd82d=(_0x599a2d=_0x3c8f88[_0x111f01(0x16e)])==null?void 0x0:_0x599a2d['env'])==null?void 0x0:_0x5dd82d[_0x111f01(0x14b)])===_0x111f01(0x12c),_0x2fbb81=!!(_0x3dfc5==='react-native'&&((_0x49aadb=_0x3c8f88[_0x111f01(0x15d)])==null?void 0x0:_0x49aadb[_0x111f01(0x155)]));function _0x47c660(_0x3a1a54){const _0x387f9f=_0x111f01;if(_0x3a1a54[_0x387f9f(0x17f)]('/')&&_0x3a1a54['endsWith']('/')){let _0x323680=new RegExp(_0x3a1a54[_0x387f9f(0x167)](0x1,-0x1));return _0x12faf6=>_0x323680[_0x387f9f(0x127)](_0x12faf6);}else{if(_0x3a1a54['includes']('*')||_0x3a1a54['includes']('?')){let _0x1b32a6=new RegExp('^'+_0x3a1a54[_0x387f9f(0x10c)](/\\./g,String['fromCharCode'](0x5c)+'.')['replace'](/\\*/g,'.*')['replace'](/\\?/g,'.')+String[_0x387f9f(0x149)](0x24));return _0x2f2036=>_0x1b32a6[_0x387f9f(0x127)](_0x2f2036);}else return _0x2c3507=>_0x2c3507===_0x3a1a54;}}let _0x8cafad=_0x4902f4[_0x111f01(0x177)](_0x47c660);return _0x3c8f88[_0x111f01(0x10f)]=_0x3e7c50||!_0x4902f4,!_0x3c8f88[_0x111f01(0x10f)]&&((_0x1aa693=_0x3c8f88[_0x111f01(0x165)])==null?void 0x0:_0x1aa693[_0x111f01(0x181)])&&(_0x3c8f88[_0x111f01(0x10f)]=_0x8cafad[_0x111f01(0x129)](_0x1b7e23=>_0x1b7e23(_0x3c8f88['location'][_0x111f01(0x181)]))),_0x2fbb81&&!_0x3c8f88['_consoleNinjaAllowedToStart']&&!((_0x586fbd=_0x3c8f88['location'])!=null&&_0x586fbd['hostname'])&&(_0x3c8f88[_0x111f01(0x10f)]=!0x0),_0x3c8f88[_0x111f01(0x10f)];}((_0x3c307e,_0x4dca21,_0x173fb9,_0x5d7fa2,_0x5434d5,_0x184bd8,_0x5edef4,_0x5f5c20,_0x44ea46,_0x4ca248,_0x3623f3,_0x163d97)=>{const _0x30d062=_0x4b057b;if(!g(_0x3c307e,_0x5f5c20,_0x184bd8)){_0x3c307e['_triedToInstallGlobalErrorHandler']=!0x0;return;}if(_0x3c307e[_0x30d062(0x17b)])return;_0x3c307e['_triedToInstallGlobalErrorHandler']=!0x0;let _0x235765=C(_0x3c307e,_0x4dca21,_0x173fb9,_0x5d7fa2,_0x184bd8,_0x44ea46,_0x4ca248),_0x2a30f6=_0x3c307e[_0x30d062(0x111)],_0x4bc9b0=_0xcc5332=>{const _0x1c8db8=_0x30d062;if(_0x3c307e[_0x1c8db8(0x13f)]){delete _0x3c307e[_0x1c8db8(0x13f)];return;}if(_0xcc5332){if(_0xcc5332===_0x3c307e['_ninjaIgnoreError']){delete _0x3c307e['_ninjaIgnoreError'];return;}else delete _0x3c307e[_0x1c8db8(0x134)];let _0x25fc8d=_0xcc5332[_0x1c8db8(0x173)]||'',_0x1f82a4=_0xcc5332['stack']||'',_0x57198f;!_0x25fc8d&&!_0x1f82a4&&(_0x25fc8d=typeof _0xcc5332==_0x1c8db8(0x163)?_0xcc5332:'Unknown\\x20error',_0x1f82a4=new Error()[_0x1c8db8(0x183)],_0x57198f=!0x0);let _0x6dd3f4=_0x184bd8===_0x1c8db8(0x17d)&&_0x3c307e[_0x1c8db8(0x107)]?{'origin':_0x3c307e[_0x1c8db8(0x107)]}:{};_0x235765({'method':_0x1c8db8(0x121),'version':_0x5434d5,'args':[{'ts':Date[_0x1c8db8(0x15e)](),'session':_0x2a30f6,'message':_0x25fc8d,'stack':_0x1f82a4,'generatedStack':_0x57198f,'stackTraceLimit':Error[_0x1c8db8(0x184)],..._0x6dd3f4}]});}};if(_0x3c307e[_0x30d062(0x158)][_0x30d062(0x121)]=(_0xe55546=>(..._0x532f0a)=>{const _0x190c80=_0x30d062;let _0x113cdb=_0x532f0a[0x0];return _0x532f0a&&_0x532f0a[_0x190c80(0x10d)]>0x1&&(_0x113cdb=_0x532f0a[_0x190c80(0x137)](_0x52ee4a=>_0x52ee4a[_0x190c80(0x183)])||_0x113cdb),_0x4bc9b0(_0x113cdb),_0xe55546(..._0x532f0a);})(_0x3c307e[_0x30d062(0x158)][_0x30d062(0x121)]),_0x3c307e[_0x30d062(0x16e)]&&_0x3c307e['process']['on'])_0x3c307e[_0x30d062(0x16e)]['on']('uncaughtException',_0x4bc9b0),_0x3c307e[_0x30d062(0x16e)]['on'](_0x30d062(0x115),_0x4bc9b0);else{if(_0x3c307e['addEventListener']){let _0x15b6b=_0x2f29ad=>{const _0x36deaf=_0x30d062;let _0x4df3fd=_0x2f29ad&&(_0x2f29ad['error']||_0x2f29ad[_0x36deaf(0x14f)]);_0x4bc9b0(_0x4df3fd);};_0x3c307e[_0x30d062(0x17a)](_0x30d062(0x121),_0x15b6b),_0x3c307e[_0x30d062(0x17a)](_0x30d062(0x135),_0x15b6b);}}try{Error[_0x30d062(0x184)]=Math[_0x30d062(0x11e)](Error[_0x30d062(0x184)],0x14),_0x3c307e[_0x30d062(0x10e)]=!0x0;}catch{}let _0x270208;_0x184bd8===_0x30d062(0x17d)&&_0x3c307e[_0x30d062(0x141)]&&_0x163d97&&_0x163d97[_0x30d062(0x113)]&&(_0x270208={'nextJsDistDir':_0x163d97[_0x30d062(0x113)]}),_0x235765({'method':_0x30d062(0x110),'version':_0x5434d5,'args':[_0x2a30f6,_0x270208]});})(globalThis,_0x4b057b(0x168),_0x4b057b(0x157),_0x4b057b(0x147),_0x4b057b(0x16f),'next.js',_0x4b057b(0x150),_0x4b057b(0x145),_0x4b057b(0x139),_0x4b057b(0x11c),{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}},{\"nextJsDistDir\":\"C:\\\\Users\\\\ivanp\\\\Documents\\\\Facundo\\\\learning\\\\learn-reactjs-simple\\\\.next\\\\dev\"});");
} catch (e) {
    console.error(e);
}
try {
    (0, eval)("globalThis._triedToInstallNetworkLoggingHandler") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';const _0x1885dc=_0x4079;(function(_0x379a0e,_0x1ac4ec){const _0x42a277=_0x4079,_0x4adef4=_0x379a0e();while(!![]){try{const _0x4978d2=parseInt(_0x42a277(0x12c))/0x1+parseInt(_0x42a277(0x1bb))/0x2*(-parseInt(_0x42a277(0x1b2))/0x3)+-parseInt(_0x42a277(0x163))/0x4+parseInt(_0x42a277(0x183))/0x5+parseInt(_0x42a277(0x22e))/0x6+parseInt(_0x42a277(0x1d3))/0x7*(parseInt(_0x42a277(0x1b7))/0x8)+parseInt(_0x42a277(0x181))/0x9*(-parseInt(_0x42a277(0x231))/0xa);if(_0x4978d2===_0x1ac4ec)break;else _0x4adef4['push'](_0x4adef4['shift']());}catch(_0x2c512d){_0x4adef4['push'](_0x4adef4['shift']());}}}(_0x54dd,0xdb390));function X(_0x3e5f4a,_0x1482d7,_0x4723c0,_0xf1c04d,_0x4b5e87,_0x388cc8){const _0x18dcab=_0x4079;var _0xd71e5e,_0x5a5306,_0x4efff4,_0x571825;this[_0x18dcab(0x257)]=_0x3e5f4a,this['host']=_0x1482d7,this[_0x18dcab(0x154)]=_0x4723c0,this[_0x18dcab(0x153)]=_0xf1c04d,this['dockerizedApp']=_0x4b5e87,this[_0x18dcab(0x159)]=_0x388cc8,this[_0x18dcab(0x1a3)]=!0x0,this[_0x18dcab(0x1d2)]=!0x0,this['_connected']=!0x1,this[_0x18dcab(0x199)]=!0x1,this[_0x18dcab(0x233)]=((_0x5a5306=(_0xd71e5e=_0x3e5f4a['process'])==null?void 0x0:_0xd71e5e[_0x18dcab(0x164)])==null?void 0x0:_0x5a5306['NEXT_RUNTIME'])===_0x18dcab(0x230),this[_0x18dcab(0x14d)]=!((_0x571825=(_0x4efff4=this['global'][_0x18dcab(0x232)])==null?void 0x0:_0x4efff4[_0x18dcab(0x20f)])!=null&&_0x571825['node'])&&!this[_0x18dcab(0x233)],this[_0x18dcab(0x1cf)]=null,this[_0x18dcab(0x21a)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_webSocketErrorDocsLink']=_0x18dcab(0x1e2),this[_0x18dcab(0x200)]=(this[_0x18dcab(0x14d)]?_0x18dcab(0x150):_0x18dcab(0x157))+this[_0x18dcab(0x180)];}X[_0x1885dc(0x1d4)]['getWebSocketClass']=async function(){const _0x5161b1=_0x1885dc;var _0x5e1efb,_0x311148;if(this[_0x5161b1(0x1cf)])return this[_0x5161b1(0x1cf)];let _0x75659b;if(this[_0x5161b1(0x14d)]||this[_0x5161b1(0x233)])_0x75659b=this[_0x5161b1(0x257)]['WebSocket'];else{if((_0x5e1efb=this[_0x5161b1(0x257)]['process'])!=null&&_0x5e1efb[_0x5161b1(0x24c)])_0x75659b=(_0x311148=this[_0x5161b1(0x257)]['process'])==null?void 0x0:_0x311148[_0x5161b1(0x24c)];else try{_0x75659b=(await new Function('path',_0x5161b1(0x13a),_0x5161b1(0x153),_0x5161b1(0x190))(await(0x0,eval)(_0x5161b1(0x244)),await(0x0,eval)(_0x5161b1(0x1cb)),this[_0x5161b1(0x153)]))[_0x5161b1(0x179)];}catch{try{_0x75659b=require(require(_0x5161b1(0x143))[_0x5161b1(0x134)](this[_0x5161b1(0x153)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this['_WebSocketClass']=_0x75659b,_0x75659b;},X['prototype'][_0x1885dc(0x217)]=function(){const _0x5f1844=_0x1885dc;this[_0x5f1844(0x199)]||this[_0x5f1844(0x147)]||this[_0x5f1844(0x21a)]>=this[_0x5f1844(0x19e)]||(this[_0x5f1844(0x1d2)]=!0x1,this[_0x5f1844(0x199)]=!0x0,this['_connectAttemptCount']++,this[_0x5f1844(0x1fd)]=new Promise((_0x13480b,_0x2ab598)=>{const _0x5b2cdf=_0x5f1844;this[_0x5b2cdf(0x131)]()[_0x5b2cdf(0x255)](_0x659f3=>{const _0x28030c=_0x5b2cdf;let _0x336a77=new _0x659f3('ws://'+(!this[_0x28030c(0x14d)]&&this[_0x28030c(0x1db)]?'gateway.docker.internal':this['host'])+':'+this[_0x28030c(0x154)]);_0x336a77[_0x28030c(0x1a2)]=()=>{const _0x1251e0=_0x28030c;this[_0x1251e0(0x1a3)]=!0x1,this[_0x1251e0(0x1aa)](_0x336a77),this[_0x1251e0(0x176)](),_0x2ab598(new Error('logger\\x20websocket\\x20error'));},_0x336a77[_0x28030c(0x1d9)]=()=>{const _0x33b2b5=_0x28030c;this[_0x33b2b5(0x14d)]||_0x336a77[_0x33b2b5(0x170)]&&_0x336a77[_0x33b2b5(0x170)][_0x33b2b5(0x189)]&&_0x336a77[_0x33b2b5(0x170)][_0x33b2b5(0x189)](),_0x13480b(_0x336a77);},_0x336a77[_0x28030c(0x1e4)]=()=>{const _0x3bedb5=_0x28030c;this[_0x3bedb5(0x1d2)]=!0x0,this[_0x3bedb5(0x1aa)](_0x336a77),this[_0x3bedb5(0x176)]();},_0x336a77['onmessage']=_0x180c2f=>{const _0x1123ac=_0x28030c;try{if(!(_0x180c2f!=null&&_0x180c2f['data'])||!this['eventReceivedCallback'])return;let _0x46b048=JSON[_0x1123ac(0x1c3)](_0x180c2f['data']);this['eventReceivedCallback'](_0x46b048[_0x1123ac(0x133)],_0x46b048[_0x1123ac(0x23b)],this[_0x1123ac(0x257)],this[_0x1123ac(0x14d)]);}catch{}};})[_0x5b2cdf(0x255)](_0x240130=>(this[_0x5b2cdf(0x147)]=!0x0,this[_0x5b2cdf(0x199)]=!0x1,this[_0x5b2cdf(0x1d2)]=!0x1,this[_0x5b2cdf(0x1a3)]=!0x0,this[_0x5b2cdf(0x21a)]=0x0,_0x240130))['catch'](_0x316374=>(this[_0x5b2cdf(0x147)]=!0x1,this[_0x5b2cdf(0x199)]=!0x1,console[_0x5b2cdf(0x221)](_0x5b2cdf(0x165)+this[_0x5b2cdf(0x180)]),_0x2ab598(new Error(_0x5b2cdf(0x1da)+(_0x316374&&_0x316374['message'])))));}));},X['prototype'][_0x1885dc(0x1aa)]=function(_0x2370b4){const _0x256aa1=_0x1885dc;this[_0x256aa1(0x147)]=!0x1,this[_0x256aa1(0x199)]=!0x1;try{_0x2370b4['onclose']=null,_0x2370b4['onerror']=null,_0x2370b4[_0x256aa1(0x1d9)]=null;}catch{}try{_0x2370b4['readyState']<0x2&&_0x2370b4[_0x256aa1(0x21b)]();}catch{}},X[_0x1885dc(0x1d4)]['_attemptToReconnectShortly']=function(){const _0x24cc4f=_0x1885dc;clearTimeout(this[_0x24cc4f(0x21f)]),!(this[_0x24cc4f(0x21a)]>=this[_0x24cc4f(0x19e)])&&(this[_0x24cc4f(0x21f)]=setTimeout(()=>{const _0x46b22a=_0x24cc4f;var _0x48354e;this[_0x46b22a(0x147)]||this[_0x46b22a(0x199)]||(this[_0x46b22a(0x217)](),(_0x48354e=this['_ws'])==null||_0x48354e[_0x46b22a(0x211)](()=>this[_0x46b22a(0x176)]()));},0x1f4),this['_reconnectTimeout'][_0x24cc4f(0x189)]&&this[_0x24cc4f(0x21f)][_0x24cc4f(0x189)]());},X[_0x1885dc(0x1d4)][_0x1885dc(0x216)]=async function(_0x113543){const _0x16dc3b=_0x1885dc;try{if(!this['_allowedToSend'])return;this[_0x16dc3b(0x1d2)]&&this[_0x16dc3b(0x217)](),(await this[_0x16dc3b(0x1fd)])[_0x16dc3b(0x216)](JSON['stringify'](_0x113543));}catch(_0x5cdc17){this['_extendedWarning']?console['warn'](this[_0x16dc3b(0x200)]+':\\x20'+(_0x5cdc17&&_0x5cdc17[_0x16dc3b(0x137)])):(this['_extendedWarning']=!0x0,console['warn'](this[_0x16dc3b(0x200)]+':\\x20'+(_0x5cdc17&&_0x5cdc17[_0x16dc3b(0x137)]),_0x113543)),this['_allowedToSend']=!0x1,this[_0x16dc3b(0x176)]();}};function Z(_0x46a91a,_0x440f42,_0x3e86d0,_0x3eaa8d,_0x3d300,_0x490754,_0x3ae3d3,_0xffab86=V){const _0x5d550a=_0x1885dc;let _0x1f3425=_0x3e86d0[_0x5d550a(0x1a9)](',')[_0x5d550a(0x162)](_0x4a4be2=>{const _0x4d1d55=_0x5d550a;var _0x57d33d,_0x125a4d,_0x259d0a,_0x54d9be,_0x6b633b,_0x449abd,_0x217ba2,_0x205784;try{if(!_0x46a91a['_console_ninja_session']){let _0x40c3b2=((_0x125a4d=(_0x57d33d=_0x46a91a['process'])==null?void 0x0:_0x57d33d[_0x4d1d55(0x20f)])==null?void 0x0:_0x125a4d[_0x4d1d55(0x193)])||((_0x54d9be=(_0x259d0a=_0x46a91a[_0x4d1d55(0x232)])==null?void 0x0:_0x259d0a[_0x4d1d55(0x164)])==null?void 0x0:_0x54d9be[_0x4d1d55(0x1e7)])===_0x4d1d55(0x230);(_0x3d300==='next.js'||_0x3d300==='remix'||_0x3d300==='astro'||_0x3d300===_0x4d1d55(0x252))&&(_0x3d300+=_0x40c3b2?'\\x20server':'\\x20browser');let _0x4eccdd='';_0x3d300===_0x4d1d55(0x144)&&(_0x4eccdd=(((_0x217ba2=(_0x449abd=(_0x6b633b=_0x46a91a[_0x4d1d55(0x1f0)])==null?void 0x0:_0x6b633b[_0x4d1d55(0x1d1)])==null?void 0x0:_0x449abd[_0x4d1d55(0x1b9)])==null?void 0x0:_0x217ba2['osName'])||_0x4d1d55(0x22b))[_0x4d1d55(0x1e1)](),_0x4eccdd&&(_0x3d300+='\\x20'+_0x4eccdd,(_0x4eccdd===_0x4d1d55(0x1ec)||_0x4eccdd===_0x4d1d55(0x22b)&&((_0x205784=_0x46a91a[_0x4d1d55(0x186)])==null?void 0x0:_0x205784[_0x4d1d55(0x1c5)])===_0x4d1d55(0x254))&&(_0x440f42='10.0.2.2'))),_0x46a91a[_0x4d1d55(0x139)]={'id':+new Date(),'tool':_0x3d300},_0x3ae3d3&&_0x3d300&&!_0x40c3b2&&(_0x4eccdd?console[_0x4d1d55(0x196)](_0x4d1d55(0x201)+_0x4eccdd+',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.'):console[_0x4d1d55(0x196)](_0x4d1d55(0x24a)+(_0x3d300[_0x4d1d55(0x1fa)](0x0)[_0x4d1d55(0x22f)]()+_0x3d300[_0x4d1d55(0x1a4)](0x1))+',',_0x4d1d55(0x14e),_0x4d1d55(0x16a)));}let _0xbe407d=new X(_0x46a91a,_0x440f42,_0x4a4be2,_0x3eaa8d,_0x490754,_0xffab86);return _0xbe407d[_0x4d1d55(0x216)][_0x4d1d55(0x145)](_0xbe407d);}catch(_0x2ef347){return console[_0x4d1d55(0x221)](_0x4d1d55(0x1f6),_0x2ef347&&_0x2ef347[_0x4d1d55(0x137)]),()=>{};}});return _0x221177=>_0x1f3425['forEach'](_0x2027c1=>_0x2027c1(_0x221177));}function V(_0x246280,_0xd4ed01,_0x381c79,_0x133ff3){const _0x791c59=_0x1885dc;_0x133ff3&&_0x246280===_0x791c59(0x18d)&&_0x381c79['location'][_0x791c59(0x18d)]();}function Y(_0x28a76f,_0x345bf7,_0x422ff9){const _0x33a6eb=_0x1885dc;var _0x85208b,_0x3fee1f,_0x3ff9fe,_0x51968b,_0x56014c,_0x5bbc30,_0x40351d;if(_0x28a76f[_0x33a6eb(0x160)]!==void 0x0)return _0x28a76f[_0x33a6eb(0x160)];let _0x221838=((_0x3fee1f=(_0x85208b=_0x28a76f[_0x33a6eb(0x232)])==null?void 0x0:_0x85208b[_0x33a6eb(0x20f)])==null?void 0x0:_0x3fee1f[_0x33a6eb(0x193)])||((_0x51968b=(_0x3ff9fe=_0x28a76f[_0x33a6eb(0x232)])==null?void 0x0:_0x3ff9fe['env'])==null?void 0x0:_0x51968b[_0x33a6eb(0x1e7)])===_0x33a6eb(0x230),_0x48d3ce=!!(_0x422ff9===_0x33a6eb(0x144)&&((_0x56014c=_0x28a76f[_0x33a6eb(0x1f0)])==null?void 0x0:_0x56014c[_0x33a6eb(0x1d1)]));function _0x589101(_0x2f63d3){const _0x2e9b8b=_0x33a6eb;if(_0x2f63d3[_0x2e9b8b(0x1ab)]('/')&&_0x2f63d3[_0x2e9b8b(0x13b)]('/')){let _0x2714c3=new RegExp(_0x2f63d3['slice'](0x1,-0x1));return _0x42ca66=>_0x2714c3[_0x2e9b8b(0x19f)](_0x42ca66);}else{if(_0x2f63d3[_0x2e9b8b(0x1ae)]('*')||_0x2f63d3[_0x2e9b8b(0x1ae)]('?')){let _0x96a14c=new RegExp('^'+_0x2f63d3[_0x2e9b8b(0x1e0)](/\\./g,String[_0x2e9b8b(0x23d)](0x5c)+'.')[_0x2e9b8b(0x1e0)](/\\*/g,'.*')[_0x2e9b8b(0x1e0)](/\\?/g,'.')+String['fromCharCode'](0x24));return _0x4ed5f9=>_0x96a14c[_0x2e9b8b(0x19f)](_0x4ed5f9);}else return _0x2c8148=>_0x2c8148===_0x2f63d3;}}let _0x2e685a=_0x345bf7[_0x33a6eb(0x162)](_0x589101);return _0x28a76f[_0x33a6eb(0x160)]=_0x221838||!_0x345bf7,!_0x28a76f['_consoleNinjaAllowedToStart']&&((_0x5bbc30=_0x28a76f['location'])==null?void 0x0:_0x5bbc30[_0x33a6eb(0x1c5)])&&(_0x28a76f[_0x33a6eb(0x160)]=_0x2e685a['some'](_0x443d58=>_0x443d58(_0x28a76f[_0x33a6eb(0x186)]['hostname']))),_0x48d3ce&&!_0x28a76f[_0x33a6eb(0x160)]&&!((_0x40351d=_0x28a76f[_0x33a6eb(0x186)])!=null&&_0x40351d[_0x33a6eb(0x1c5)])&&(_0x28a76f[_0x33a6eb(0x160)]=!0x0),_0x28a76f[_0x33a6eb(0x160)];}function _0x4079(_0x9e01da,_0x26b7ca){const _0x54dd19=_0x54dd();return _0x4079=function(_0x407937,_0x389421){_0x407937=_0x407937-0x128;let _0x3092fb=_0x54dd19[_0x407937];return _0x3092fb;},_0x4079(_0x9e01da,_0x26b7ca);}function G(_0x2dcd9e){const _0x14f56b=_0x1885dc;var _0x10850b,_0x207586;let _0xf201dd=function(_0x19404f,_0xbc7e8e){return _0xbc7e8e-_0x19404f;},_0x208304;if(_0x2dcd9e[_0x14f56b(0x184)])_0x208304=function(){const _0x5055d3=_0x14f56b;return _0x2dcd9e[_0x5055d3(0x184)][_0x5055d3(0x1f1)]();};else{if(_0x2dcd9e[_0x14f56b(0x232)]&&_0x2dcd9e[_0x14f56b(0x232)][_0x14f56b(0x1d7)]&&((_0x207586=(_0x10850b=_0x2dcd9e['process'])==null?void 0x0:_0x10850b[_0x14f56b(0x164)])==null?void 0x0:_0x207586[_0x14f56b(0x1e7)])!==_0x14f56b(0x230))_0x208304=function(){const _0x22451e=_0x14f56b;return _0x2dcd9e[_0x22451e(0x232)][_0x22451e(0x1d7)]();},_0xf201dd=function(_0x224ca6,_0x17f4f2){return 0x3e8*(_0x17f4f2[0x0]-_0x224ca6[0x0])+(_0x17f4f2[0x1]-_0x224ca6[0x1])/0xf4240;};else try{let {performance:_0x35065c}=require(_0x14f56b(0x1ea));_0x208304=function(){const _0x5e18ae=_0x14f56b;return _0x35065c[_0x5e18ae(0x1f1)]();};}catch{_0x208304=function(){return+new Date();};}}return{'elapsed':_0xf201dd,'timeStamp':_0x208304,'now':()=>Date[_0x14f56b(0x1f1)]()};}function K(_0x4d5daa,_0x52ec09,_0xbfab2e,_0x5c1c72,_0xe0c405,_0x4f8a31){const _0x552b16=_0x1885dc;_0x4d5daa=_0x4d5daa,_0x52ec09=_0x52ec09,_0xbfab2e=_0xbfab2e,_0x5c1c72=_0x5c1c72,_0xe0c405=_0xe0c405,_0xe0c405=_0xe0c405||{},_0xe0c405[_0x552b16(0x242)]=_0xe0c405['defaultLimits']||{},_0xe0c405[_0x552b16(0x1c6)]=_0xe0c405[_0x552b16(0x1c6)]||{},_0xe0c405[_0x552b16(0x17e)]=_0xe0c405[_0x552b16(0x17e)]||{},_0xe0c405[_0x552b16(0x17e)]['perLogpoint']=_0xe0c405[_0x552b16(0x17e)]['perLogpoint']||{},_0xe0c405['reducePolicy'][_0x552b16(0x257)]=_0xe0c405['reducePolicy']['global']||{};let _0x40b31b={'perLogpoint':{'reduceOnCount':_0xe0c405[_0x552b16(0x17e)][_0x552b16(0x167)][_0x552b16(0x219)]||0x32,'reduceOnAccumulatedProcessingTimeMs':_0xe0c405[_0x552b16(0x17e)][_0x552b16(0x167)]['reduceOnAccumulatedProcessingTimeMs']||0x64,'resetWhenQuietMs':_0xe0c405[_0x552b16(0x17e)]['perLogpoint']['resetWhenQuietMs']||0x1f4,'resetOnProcessingTimeAverageMs':_0xe0c405[_0x552b16(0x17e)]['perLogpoint'][_0x552b16(0x161)]||0x64},'global':{'reduceOnCount':_0xe0c405[_0x552b16(0x17e)][_0x552b16(0x257)][_0x552b16(0x219)]||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0xe0c405[_0x552b16(0x17e)][_0x552b16(0x257)]['reduceOnAccumulatedProcessingTimeMs']||0x12c,'resetWhenQuietMs':_0xe0c405[_0x552b16(0x17e)]['global'][_0x552b16(0x22a)]||0x32,'resetOnProcessingTimeAverageMs':_0xe0c405[_0x552b16(0x17e)][_0x552b16(0x257)][_0x552b16(0x161)]||0x64}},_0x36f76d=G(_0x4d5daa),_0x40458a=_0x36f76d[_0x552b16(0x194)],_0x4d2f2f=_0x36f76d[_0x552b16(0x215)];function _0x16b054(){const _0x1473da=_0x552b16;this[_0x1473da(0x198)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x1473da(0x156)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x1473da(0x23f)]=_0x4d5daa[_0x1473da(0x1d5)],this[_0x1473da(0x214)]=_0x4d5daa[_0x1473da(0x20e)],this[_0x1473da(0x155)]=Object[_0x1473da(0x1bf)],this[_0x1473da(0x17d)]=Object[_0x1473da(0x14f)],this['_Symbol']=_0x4d5daa[_0x1473da(0x206)],this[_0x1473da(0x1dd)]=RegExp[_0x1473da(0x1d4)][_0x1473da(0x16c)],this[_0x1473da(0x1fe)]=Date[_0x1473da(0x1d4)][_0x1473da(0x16c)];}_0x16b054[_0x552b16(0x1d4)]['serialize']=function(_0x54b79b,_0x2e230e,_0x561b90,_0x5664e1){const _0x4c5d9d=_0x552b16;var _0x1c5e2c=this,_0x35799d=_0x561b90[_0x4c5d9d(0x1c2)];function _0xab8a95(_0x818d94,_0x736201,_0x2dad84){const _0x4c5c76=_0x4c5d9d;_0x736201[_0x4c5c76(0x1a8)]=_0x4c5c76(0x149),_0x736201['error']=_0x818d94[_0x4c5c76(0x137)],_0x15fdca=_0x2dad84[_0x4c5c76(0x193)][_0x4c5c76(0x18b)],_0x2dad84[_0x4c5c76(0x193)]['current']=_0x736201,_0x1c5e2c[_0x4c5c76(0x24f)](_0x736201,_0x2dad84);}let _0x10aaa4,_0x4a3de9,_0x1011df=_0x4d5daa[_0x4c5d9d(0x151)];_0x4d5daa[_0x4c5d9d(0x151)]=!0x0,_0x4d5daa[_0x4c5d9d(0x185)]&&(_0x10aaa4=_0x4d5daa[_0x4c5d9d(0x185)]['error'],_0x4a3de9=_0x4d5daa[_0x4c5d9d(0x185)]['warn'],_0x10aaa4&&(_0x4d5daa['console']['error']=function(){}),_0x4a3de9&&(_0x4d5daa['console'][_0x4c5d9d(0x221)]=function(){}));try{try{_0x561b90['level']++,_0x561b90[_0x4c5d9d(0x1c2)]&&_0x561b90[_0x4c5d9d(0x1ee)][_0x4c5d9d(0x1e3)](_0x2e230e);var _0x20aaea,_0x1ed5d1,_0x593464,_0x413a5b,_0x507434=[],_0x135fe6=[],_0x4808bd,_0x2d3edf=this[_0x4c5d9d(0x205)](_0x2e230e),_0x513cad=_0x2d3edf===_0x4c5d9d(0x128),_0xd77ce8=!0x1,_0x5d326d=_0x2d3edf===_0x4c5d9d(0x158),_0x5d122a=this[_0x4c5d9d(0x238)](_0x2d3edf),_0x554f8a=this[_0x4c5d9d(0x12a)](_0x2d3edf),_0xfacc9e=_0x5d122a||_0x554f8a,_0x5bb6a7={},_0x2e5fbd=0x0,_0x747508=!0x1,_0x15fdca,_0x38c77a=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x561b90[_0x4c5d9d(0x248)]){if(_0x513cad){if(_0x1ed5d1=_0x2e230e[_0x4c5d9d(0x171)],_0x1ed5d1>_0x561b90[_0x4c5d9d(0x243)]){for(_0x593464=0x0,_0x413a5b=_0x561b90['elements'],_0x20aaea=_0x593464;_0x20aaea<_0x413a5b;_0x20aaea++)_0x135fe6['push'](_0x1c5e2c['_addProperty'](_0x507434,_0x2e230e,_0x2d3edf,_0x20aaea,_0x561b90));_0x54b79b['cappedElements']=!0x0;}else{for(_0x593464=0x0,_0x413a5b=_0x1ed5d1,_0x20aaea=_0x593464;_0x20aaea<_0x413a5b;_0x20aaea++)_0x135fe6['push'](_0x1c5e2c[_0x4c5d9d(0x1b0)](_0x507434,_0x2e230e,_0x2d3edf,_0x20aaea,_0x561b90));}_0x561b90[_0x4c5d9d(0x174)]+=_0x135fe6[_0x4c5d9d(0x171)];}if(!(_0x2d3edf===_0x4c5d9d(0x212)||_0x2d3edf==='undefined')&&!_0x5d122a&&_0x2d3edf!==_0x4c5d9d(0x1c4)&&_0x2d3edf!==_0x4c5d9d(0x1a0)&&_0x2d3edf!==_0x4c5d9d(0x1ce)){var _0x1f3b47=_0x5664e1[_0x4c5d9d(0x197)]||_0x561b90['props'];if(this[_0x4c5d9d(0x140)](_0x2e230e)?(_0x20aaea=0x0,_0x2e230e[_0x4c5d9d(0x239)](function(_0x24f145){const _0x7c7bac=_0x4c5d9d;if(_0x2e5fbd++,_0x561b90[_0x7c7bac(0x174)]++,_0x2e5fbd>_0x1f3b47){_0x747508=!0x0;return;}if(!_0x561b90['isExpressionToEvaluate']&&_0x561b90['autoExpand']&&_0x561b90['autoExpandPropertyCount']>_0x561b90[_0x7c7bac(0x187)]){_0x747508=!0x0;return;}_0x135fe6['push'](_0x1c5e2c[_0x7c7bac(0x1b0)](_0x507434,_0x2e230e,_0x7c7bac(0x1f8),_0x20aaea++,_0x561b90,function(_0x220a70){return function(){return _0x220a70;};}(_0x24f145)));})):this['_isMap'](_0x2e230e)&&_0x2e230e[_0x4c5d9d(0x239)](function(_0x1b3b9e,_0x1074b8){const _0xb33504=_0x4c5d9d;if(_0x2e5fbd++,_0x561b90['autoExpandPropertyCount']++,_0x2e5fbd>_0x1f3b47){_0x747508=!0x0;return;}if(!_0x561b90['isExpressionToEvaluate']&&_0x561b90[_0xb33504(0x1c2)]&&_0x561b90[_0xb33504(0x174)]>_0x561b90[_0xb33504(0x187)]){_0x747508=!0x0;return;}var _0x50c981=_0x1074b8[_0xb33504(0x16c)]();_0x50c981[_0xb33504(0x171)]>0x64&&(_0x50c981=_0x50c981[_0xb33504(0x14b)](0x0,0x64)+'...'),_0x135fe6['push'](_0x1c5e2c[_0xb33504(0x1b0)](_0x507434,_0x2e230e,_0xb33504(0x173),_0x50c981,_0x561b90,function(_0xd53008){return function(){return _0xd53008;};}(_0x1b3b9e)));}),!_0xd77ce8){try{for(_0x4808bd in _0x2e230e)if(!(_0x513cad&&_0x38c77a[_0x4c5d9d(0x19f)](_0x4808bd))&&!this[_0x4c5d9d(0x1c7)](_0x2e230e,_0x4808bd,_0x561b90)){if(_0x2e5fbd++,_0x561b90['autoExpandPropertyCount']++,_0x2e5fbd>_0x1f3b47){_0x747508=!0x0;break;}if(!_0x561b90['isExpressionToEvaluate']&&_0x561b90[_0x4c5d9d(0x1c2)]&&_0x561b90[_0x4c5d9d(0x174)]>_0x561b90['autoExpandLimit']){_0x747508=!0x0;break;}_0x135fe6[_0x4c5d9d(0x1e3)](_0x1c5e2c[_0x4c5d9d(0x225)](_0x507434,_0x5bb6a7,_0x2e230e,_0x2d3edf,_0x4808bd,_0x561b90));}}catch{}if(_0x5bb6a7[_0x4c5d9d(0x1cd)]=!0x0,_0x5d326d&&(_0x5bb6a7[_0x4c5d9d(0x20c)]=!0x0),!_0x747508){var _0x5c1f89=[]['concat'](this[_0x4c5d9d(0x17d)](_0x2e230e))[_0x4c5d9d(0x21d)](this[_0x4c5d9d(0x1e8)](_0x2e230e));for(_0x20aaea=0x0,_0x1ed5d1=_0x5c1f89[_0x4c5d9d(0x171)];_0x20aaea<_0x1ed5d1;_0x20aaea++)if(_0x4808bd=_0x5c1f89[_0x20aaea],!(_0x513cad&&_0x38c77a[_0x4c5d9d(0x19f)](_0x4808bd['toString']()))&&!this[_0x4c5d9d(0x1c7)](_0x2e230e,_0x4808bd,_0x561b90)&&!_0x5bb6a7[typeof _0x4808bd!=_0x4c5d9d(0x188)?_0x4c5d9d(0x20d)+_0x4808bd[_0x4c5d9d(0x16c)]():_0x4808bd]){if(_0x2e5fbd++,_0x561b90['autoExpandPropertyCount']++,_0x2e5fbd>_0x1f3b47){_0x747508=!0x0;break;}if(!_0x561b90['isExpressionToEvaluate']&&_0x561b90[_0x4c5d9d(0x1c2)]&&_0x561b90[_0x4c5d9d(0x174)]>_0x561b90['autoExpandLimit']){_0x747508=!0x0;break;}_0x135fe6[_0x4c5d9d(0x1e3)](_0x1c5e2c[_0x4c5d9d(0x225)](_0x507434,_0x5bb6a7,_0x2e230e,_0x2d3edf,_0x4808bd,_0x561b90));}}}}}if(_0x54b79b[_0x4c5d9d(0x1a8)]=_0x2d3edf,_0xfacc9e?(_0x54b79b[_0x4c5d9d(0x1b6)]=_0x2e230e['valueOf'](),this[_0x4c5d9d(0x177)](_0x2d3edf,_0x54b79b,_0x561b90,_0x5664e1)):_0x2d3edf===_0x4c5d9d(0x1ad)?_0x54b79b[_0x4c5d9d(0x1b6)]=this[_0x4c5d9d(0x1fe)][_0x4c5d9d(0x24b)](_0x2e230e):_0x2d3edf===_0x4c5d9d(0x1ce)?_0x54b79b[_0x4c5d9d(0x1b6)]=_0x2e230e[_0x4c5d9d(0x16c)]():_0x2d3edf===_0x4c5d9d(0x1a5)?_0x54b79b[_0x4c5d9d(0x1b6)]=this[_0x4c5d9d(0x1dd)][_0x4c5d9d(0x24b)](_0x2e230e):_0x2d3edf==='symbol'&&this[_0x4c5d9d(0x16d)]?_0x54b79b[_0x4c5d9d(0x1b6)]=this[_0x4c5d9d(0x16d)]['prototype'][_0x4c5d9d(0x16c)][_0x4c5d9d(0x24b)](_0x2e230e):!_0x561b90['depth']&&!(_0x2d3edf===_0x4c5d9d(0x212)||_0x2d3edf===_0x4c5d9d(0x1d5))&&(delete _0x54b79b[_0x4c5d9d(0x1b6)],_0x54b79b[_0x4c5d9d(0x16e)]=!0x0),_0x747508&&(_0x54b79b[_0x4c5d9d(0x1f7)]=!0x0),_0x15fdca=_0x561b90[_0x4c5d9d(0x193)]['current'],_0x561b90['node'][_0x4c5d9d(0x18b)]=_0x54b79b,this[_0x4c5d9d(0x24f)](_0x54b79b,_0x561b90),_0x135fe6['length']){for(_0x20aaea=0x0,_0x1ed5d1=_0x135fe6[_0x4c5d9d(0x171)];_0x20aaea<_0x1ed5d1;_0x20aaea++)_0x135fe6[_0x20aaea](_0x20aaea);}_0x507434['length']&&(_0x54b79b['props']=_0x507434);}catch(_0x6d399d){_0xab8a95(_0x6d399d,_0x54b79b,_0x561b90);}this['_additionalMetadata'](_0x2e230e,_0x54b79b),this[_0x4c5d9d(0x1fc)](_0x54b79b,_0x561b90),_0x561b90[_0x4c5d9d(0x193)][_0x4c5d9d(0x18b)]=_0x15fdca,_0x561b90[_0x4c5d9d(0x1de)]--,_0x561b90[_0x4c5d9d(0x1c2)]=_0x35799d,_0x561b90[_0x4c5d9d(0x1c2)]&&_0x561b90[_0x4c5d9d(0x1ee)]['pop']();}finally{_0x10aaa4&&(_0x4d5daa[_0x4c5d9d(0x185)][_0x4c5d9d(0x227)]=_0x10aaa4),_0x4a3de9&&(_0x4d5daa['console']['warn']=_0x4a3de9),_0x4d5daa[_0x4c5d9d(0x151)]=_0x1011df;}return _0x54b79b;},_0x16b054[_0x552b16(0x1d4)][_0x552b16(0x1e8)]=function(_0x363c3c){const _0x5d5055=_0x552b16;return Object[_0x5d5055(0x213)]?Object[_0x5d5055(0x213)](_0x363c3c):[];},_0x16b054[_0x552b16(0x1d4)][_0x552b16(0x140)]=function(_0x5a9d57){const _0x29c722=_0x552b16;return!!(_0x5a9d57&&_0x4d5daa['Set']&&this[_0x29c722(0x15e)](_0x5a9d57)===_0x29c722(0x218)&&_0x5a9d57[_0x29c722(0x239)]);},_0x16b054[_0x552b16(0x1d4)][_0x552b16(0x1c7)]=function(_0x4ec3d8,_0x326fd8,_0x5c14e9){const _0x306164=_0x552b16;if(!_0x5c14e9[_0x306164(0x1ba)]){let _0x34ea34=this[_0x306164(0x155)](_0x4ec3d8,_0x326fd8);if(_0x34ea34&&_0x34ea34[_0x306164(0x1a7)])return!0x0;}return _0x5c14e9[_0x306164(0x195)]?typeof _0x4ec3d8[_0x326fd8]=='function':!0x1;},_0x16b054[_0x552b16(0x1d4)]['_type']=function(_0x30312b){const _0x3eae20=_0x552b16;var _0x403813='';return _0x403813=typeof _0x30312b,_0x403813==='object'?this[_0x3eae20(0x15e)](_0x30312b)===_0x3eae20(0x1fb)?_0x403813='array':this['_objectToString'](_0x30312b)===_0x3eae20(0x1df)?_0x403813='date':this[_0x3eae20(0x15e)](_0x30312b)===_0x3eae20(0x256)?_0x403813=_0x3eae20(0x1ce):_0x30312b===null?_0x403813=_0x3eae20(0x212):_0x30312b['constructor']&&(_0x403813=_0x30312b[_0x3eae20(0x12b)]['name']||_0x403813):_0x403813===_0x3eae20(0x1d5)&&this['_HTMLAllCollection']&&_0x30312b instanceof this[_0x3eae20(0x214)]&&(_0x403813='HTMLAllCollection'),_0x403813;},_0x16b054[_0x552b16(0x1d4)]['_objectToString']=function(_0x4fd00f){const _0x29253c=_0x552b16;return Object[_0x29253c(0x1d4)][_0x29253c(0x16c)][_0x29253c(0x24b)](_0x4fd00f);},_0x16b054[_0x552b16(0x1d4)][_0x552b16(0x238)]=function(_0x3fc642){const _0x4f2b2a=_0x552b16;return _0x3fc642==='boolean'||_0x3fc642===_0x4f2b2a(0x1eb)||_0x3fc642==='number';},_0x16b054[_0x552b16(0x1d4)]['_isPrimitiveWrapperType']=function(_0x1fefea){const _0x2a9919=_0x552b16;return _0x1fefea===_0x2a9919(0x19a)||_0x1fefea===_0x2a9919(0x1c4)||_0x1fefea===_0x2a9919(0x13c);},_0x16b054['prototype'][_0x552b16(0x1b0)]=function(_0x30ffcb,_0xeb0a4c,_0x3d0b10,_0x49f512,_0xc1df14,_0x11be84){var _0x1ca09f=this;return function(_0x4f7c72){const _0x10f2f8=_0x4079;var _0x2f7a82=_0xc1df14[_0x10f2f8(0x193)][_0x10f2f8(0x18b)],_0x1a3cca=_0xc1df14[_0x10f2f8(0x193)][_0x10f2f8(0x136)],_0x4b3e7b=_0xc1df14['node']['parent'];_0xc1df14[_0x10f2f8(0x193)]['parent']=_0x2f7a82,_0xc1df14['node'][_0x10f2f8(0x136)]=typeof _0x49f512==_0x10f2f8(0x1ff)?_0x49f512:_0x4f7c72,_0x30ffcb[_0x10f2f8(0x1e3)](_0x1ca09f[_0x10f2f8(0x208)](_0xeb0a4c,_0x3d0b10,_0x49f512,_0xc1df14,_0x11be84)),_0xc1df14[_0x10f2f8(0x193)][_0x10f2f8(0x141)]=_0x4b3e7b,_0xc1df14[_0x10f2f8(0x193)]['index']=_0x1a3cca;};},_0x16b054['prototype'][_0x552b16(0x225)]=function(_0x1635d5,_0xbcf88d,_0x1954e3,_0x2e236e,_0x314a36,_0x3e5a03,_0x345d07){const _0x147832=_0x552b16;var _0x576d01=this;return _0xbcf88d[typeof _0x314a36!=_0x147832(0x188)?'_p_'+_0x314a36[_0x147832(0x16c)]():_0x314a36]=!0x0,function(_0x55c40a){const _0xd47751=_0x147832;var _0x410c2c=_0x3e5a03[_0xd47751(0x193)][_0xd47751(0x18b)],_0x1f2036=_0x3e5a03['node'][_0xd47751(0x136)],_0x23f513=_0x3e5a03['node'][_0xd47751(0x141)];_0x3e5a03[_0xd47751(0x193)][_0xd47751(0x141)]=_0x410c2c,_0x3e5a03[_0xd47751(0x193)][_0xd47751(0x136)]=_0x55c40a,_0x1635d5[_0xd47751(0x1e3)](_0x576d01[_0xd47751(0x208)](_0x1954e3,_0x2e236e,_0x314a36,_0x3e5a03,_0x345d07)),_0x3e5a03['node'][_0xd47751(0x141)]=_0x23f513,_0x3e5a03[_0xd47751(0x193)]['index']=_0x1f2036;};},_0x16b054[_0x552b16(0x1d4)]['_property']=function(_0x5de5f6,_0x10665d,_0x2cfeaf,_0x4da257,_0x5163d1){const _0x52d511=_0x552b16;var _0x3e91b8=this;_0x5163d1||(_0x5163d1=function(_0x563f76,_0x45f190){return _0x563f76[_0x45f190];});var _0x16ee20=_0x2cfeaf['toString'](),_0x4920c0=_0x4da257['expressionsToEvaluate']||{},_0x29d562=_0x4da257['depth'],_0x15c26b=_0x4da257[_0x52d511(0x20b)];try{var _0x20b881=this['_isMap'](_0x5de5f6),_0x22e579=_0x16ee20;_0x20b881&&_0x22e579[0x0]==='\\x27'&&(_0x22e579=_0x22e579[_0x52d511(0x1a4)](0x1,_0x22e579['length']-0x2));var _0x8191b4=_0x4da257[_0x52d511(0x1e6)]=_0x4920c0[_0x52d511(0x20d)+_0x22e579];_0x8191b4&&(_0x4da257[_0x52d511(0x248)]=_0x4da257[_0x52d511(0x248)]+0x1),_0x4da257['isExpressionToEvaluate']=!!_0x8191b4;var _0x1dedf3=typeof _0x2cfeaf==_0x52d511(0x188),_0x1974be={'name':_0x1dedf3||_0x20b881?_0x16ee20:this['_propertyName'](_0x16ee20)};if(_0x1dedf3&&(_0x1974be[_0x52d511(0x188)]=!0x0),!(_0x10665d==='array'||_0x10665d==='Error')){var _0x53b297=this[_0x52d511(0x155)](_0x5de5f6,_0x2cfeaf);if(_0x53b297&&(_0x53b297[_0x52d511(0x21e)]&&(_0x1974be[_0x52d511(0x192)]=!0x0),_0x53b297[_0x52d511(0x1a7)]&&!_0x8191b4&&!_0x4da257[_0x52d511(0x1ba)]))return _0x1974be['getter']=!0x0,this['_processTreeNodeResult'](_0x1974be,_0x4da257),_0x1974be;}var _0x1cafdb;try{_0x1cafdb=_0x5163d1(_0x5de5f6,_0x2cfeaf);}catch(_0x525cbb){return _0x1974be={'name':_0x16ee20,'type':'unknown','error':_0x525cbb[_0x52d511(0x137)]},this['_processTreeNodeResult'](_0x1974be,_0x4da257),_0x1974be;}var _0x1d34d9=this[_0x52d511(0x205)](_0x1cafdb),_0x5e0063=this[_0x52d511(0x238)](_0x1d34d9);if(_0x1974be[_0x52d511(0x1a8)]=_0x1d34d9,_0x5e0063)this[_0x52d511(0x15d)](_0x1974be,_0x4da257,_0x1cafdb,function(){const _0x467bf1=_0x52d511;_0x1974be[_0x467bf1(0x1b6)]=_0x1cafdb[_0x467bf1(0x12d)](),!_0x8191b4&&_0x3e91b8[_0x467bf1(0x177)](_0x1d34d9,_0x1974be,_0x4da257,{});});else{var _0x2b04f7=_0x4da257[_0x52d511(0x1c2)]&&_0x4da257['level']<_0x4da257[_0x52d511(0x1ac)]&&_0x4da257['autoExpandPreviousObjects'][_0x52d511(0x228)](_0x1cafdb)<0x0&&_0x1d34d9!==_0x52d511(0x158)&&_0x4da257[_0x52d511(0x174)]<_0x4da257[_0x52d511(0x187)];_0x2b04f7||_0x4da257['level']<_0x29d562||_0x8191b4?this['serialize'](_0x1974be,_0x1cafdb,_0x4da257,_0x8191b4||{}):this[_0x52d511(0x15d)](_0x1974be,_0x4da257,_0x1cafdb,function(){const _0x1a1129=_0x52d511;_0x1d34d9==='null'||_0x1d34d9===_0x1a1129(0x1d5)||(delete _0x1974be['value'],_0x1974be[_0x1a1129(0x16e)]=!0x0);});}return _0x1974be;}finally{_0x4da257['expressionsToEvaluate']=_0x4920c0,_0x4da257[_0x52d511(0x248)]=_0x29d562,_0x4da257[_0x52d511(0x20b)]=_0x15c26b;}},_0x16b054['prototype'][_0x552b16(0x177)]=function(_0x2bf4de,_0x1ef9b1,_0x35e603,_0x348b9f){const _0x32826a=_0x552b16;var _0x3845e2=_0x348b9f[_0x32826a(0x21c)]||_0x35e603[_0x32826a(0x21c)];if((_0x2bf4de===_0x32826a(0x1eb)||_0x2bf4de===_0x32826a(0x1c4))&&_0x1ef9b1[_0x32826a(0x1b6)]){let _0x72e3bf=_0x1ef9b1['value'][_0x32826a(0x171)];_0x35e603[_0x32826a(0x251)]+=_0x72e3bf,_0x35e603[_0x32826a(0x251)]>_0x35e603[_0x32826a(0x22d)]?(_0x1ef9b1[_0x32826a(0x16e)]='',delete _0x1ef9b1[_0x32826a(0x1b6)]):_0x72e3bf>_0x3845e2&&(_0x1ef9b1[_0x32826a(0x16e)]=_0x1ef9b1[_0x32826a(0x1b6)]['substr'](0x0,_0x3845e2),delete _0x1ef9b1[_0x32826a(0x1b6)]);}},_0x16b054[_0x552b16(0x1d4)][_0x552b16(0x1b1)]=function(_0x5093b1){const _0x702019=_0x552b16;return!!(_0x5093b1&&_0x4d5daa[_0x702019(0x173)]&&this[_0x702019(0x15e)](_0x5093b1)===_0x702019(0x207)&&_0x5093b1[_0x702019(0x239)]);},_0x16b054[_0x552b16(0x1d4)][_0x552b16(0x1b4)]=function(_0x20696a){const _0x5c32bf=_0x552b16;if(_0x20696a['match'](/^\\d+$/))return _0x20696a;var _0x5ec6b4;try{_0x5ec6b4=JSON[_0x5c32bf(0x146)](''+_0x20696a);}catch{_0x5ec6b4='\\x22'+this[_0x5c32bf(0x15e)](_0x20696a)+'\\x22';}return _0x5ec6b4[_0x5c32bf(0x240)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x5ec6b4=_0x5ec6b4[_0x5c32bf(0x1a4)](0x1,_0x5ec6b4[_0x5c32bf(0x171)]-0x2):_0x5ec6b4=_0x5ec6b4[_0x5c32bf(0x1e0)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')[_0x5c32bf(0x1e0)](/(^\"|\"$)/g,'\\x27'),_0x5ec6b4;},_0x16b054['prototype'][_0x552b16(0x15d)]=function(_0x402c22,_0x3621df,_0x1cf996,_0x577d00){const _0x3638d0=_0x552b16;this[_0x3638d0(0x24f)](_0x402c22,_0x3621df),_0x577d00&&_0x577d00(),this['_additionalMetadata'](_0x1cf996,_0x402c22),this[_0x3638d0(0x1fc)](_0x402c22,_0x3621df);},_0x16b054[_0x552b16(0x1d4)][_0x552b16(0x24f)]=function(_0x31769c,_0x429ba7){const _0x267407=_0x552b16;this[_0x267407(0x1f2)](_0x31769c,_0x429ba7),this[_0x267407(0x234)](_0x31769c,_0x429ba7),this[_0x267407(0x24d)](_0x31769c,_0x429ba7),this['_setNodePermissions'](_0x31769c,_0x429ba7);},_0x16b054[_0x552b16(0x1d4)][_0x552b16(0x1f2)]=function(_0x13d7d7,_0x267f7e){},_0x16b054[_0x552b16(0x1d4)][_0x552b16(0x234)]=function(_0x164701,_0x2de657){},_0x16b054[_0x552b16(0x1d4)][_0x552b16(0x12e)]=function(_0x235078,_0x4d1d5e){},_0x16b054[_0x552b16(0x1d4)][_0x552b16(0x142)]=function(_0x59bda3){const _0x3bd457=_0x552b16;return _0x59bda3===this[_0x3bd457(0x23f)];},_0x16b054['prototype'][_0x552b16(0x1fc)]=function(_0x515132,_0x21fc49){const _0x454201=_0x552b16;this[_0x454201(0x12e)](_0x515132,_0x21fc49),this['_setNodeExpandableState'](_0x515132),_0x21fc49[_0x454201(0x19d)]&&this[_0x454201(0x1ca)](_0x515132),this['_addFunctionsNode'](_0x515132,_0x21fc49),this[_0x454201(0x1b8)](_0x515132,_0x21fc49),this['_cleanNode'](_0x515132);},_0x16b054[_0x552b16(0x1d4)][_0x552b16(0x178)]=function(_0x381028,_0x496ed1){const _0xd4e08=_0x552b16;try{_0x381028&&typeof _0x381028[_0xd4e08(0x171)]==_0xd4e08(0x1ff)&&(_0x496ed1['length']=_0x381028['length']);}catch{}if(_0x496ed1['type']==='number'||_0x496ed1['type']===_0xd4e08(0x13c)){if(isNaN(_0x496ed1['value']))_0x496ed1[_0xd4e08(0x17b)]=!0x0,delete _0x496ed1[_0xd4e08(0x1b6)];else switch(_0x496ed1['value']){case Number[_0xd4e08(0x13e)]:_0x496ed1[_0xd4e08(0x237)]=!0x0,delete _0x496ed1[_0xd4e08(0x1b6)];break;case Number[_0xd4e08(0x19b)]:_0x496ed1[_0xd4e08(0x1d6)]=!0x0,delete _0x496ed1[_0xd4e08(0x1b6)];break;case 0x0:this[_0xd4e08(0x1be)](_0x496ed1[_0xd4e08(0x1b6)])&&(_0x496ed1[_0xd4e08(0x1cc)]=!0x0);break;}}else _0x496ed1[_0xd4e08(0x1a8)]==='function'&&typeof _0x381028['name']=='string'&&_0x381028[_0xd4e08(0x23c)]&&_0x496ed1['name']&&_0x381028['name']!==_0x496ed1['name']&&(_0x496ed1[_0xd4e08(0x191)]=_0x381028[_0xd4e08(0x23c)]);},_0x16b054[_0x552b16(0x1d4)][_0x552b16(0x1be)]=function(_0xb39173){const _0xcd83d7=_0x552b16;return 0x1/_0xb39173===Number[_0xcd83d7(0x19b)];},_0x16b054[_0x552b16(0x1d4)]['_sortProps']=function(_0x2712bf){const _0x390c64=_0x552b16;!_0x2712bf[_0x390c64(0x197)]||!_0x2712bf[_0x390c64(0x197)]['length']||_0x2712bf[_0x390c64(0x1a8)]==='array'||_0x2712bf['type']===_0x390c64(0x173)||_0x2712bf['type']===_0x390c64(0x1f8)||_0x2712bf[_0x390c64(0x197)][_0x390c64(0x24e)](function(_0x2a6dad,_0x4ad709){const _0x34509a=_0x390c64;var _0x54cd45=_0x2a6dad[_0x34509a(0x23c)][_0x34509a(0x1e1)](),_0x34e9f6=_0x4ad709[_0x34509a(0x23c)][_0x34509a(0x1e1)]();return _0x54cd45<_0x34e9f6?-0x1:_0x54cd45>_0x34e9f6?0x1:0x0;});},_0x16b054[_0x552b16(0x1d4)][_0x552b16(0x18e)]=function(_0x2a5d90,_0x2aefd7){const _0x39bcc6=_0x552b16;if(!(_0x2aefd7[_0x39bcc6(0x195)]||!_0x2a5d90[_0x39bcc6(0x197)]||!_0x2a5d90[_0x39bcc6(0x197)][_0x39bcc6(0x171)])){for(var _0x440206=[],_0x35edd2=[],_0x52cd36=0x0,_0x58a952=_0x2a5d90[_0x39bcc6(0x197)][_0x39bcc6(0x171)];_0x52cd36<_0x58a952;_0x52cd36++){var _0xc04a03=_0x2a5d90['props'][_0x52cd36];_0xc04a03['type']===_0x39bcc6(0x158)?_0x440206['push'](_0xc04a03):_0x35edd2[_0x39bcc6(0x1e3)](_0xc04a03);}if(!(!_0x35edd2['length']||_0x440206[_0x39bcc6(0x171)]<=0x1)){_0x2a5d90[_0x39bcc6(0x197)]=_0x35edd2;var _0x5ab52d={'functionsNode':!0x0,'props':_0x440206};this[_0x39bcc6(0x1f2)](_0x5ab52d,_0x2aefd7),this['_setNodeLabel'](_0x5ab52d,_0x2aefd7),this['_setNodeExpandableState'](_0x5ab52d),this['_setNodePermissions'](_0x5ab52d,_0x2aefd7),_0x5ab52d['id']+='\\x20f',_0x2a5d90['props'][_0x39bcc6(0x241)](_0x5ab52d);}}},_0x16b054[_0x552b16(0x1d4)][_0x552b16(0x1b8)]=function(_0x12fa49,_0x774fdd){},_0x16b054['prototype']['_setNodeExpandableState']=function(_0x330e5f){},_0x16b054[_0x552b16(0x1d4)][_0x552b16(0x20a)]=function(_0x4f3114){const _0x15cb12=_0x552b16;return Array[_0x15cb12(0x245)](_0x4f3114)||typeof _0x4f3114==_0x15cb12(0x18a)&&this[_0x15cb12(0x15e)](_0x4f3114)===_0x15cb12(0x1fb);},_0x16b054[_0x552b16(0x1d4)][_0x552b16(0x130)]=function(_0x598690,_0x3b9b17){},_0x16b054['prototype']['_cleanNode']=function(_0x59b6e3){const _0x28dec3=_0x552b16;delete _0x59b6e3[_0x28dec3(0x1c8)],delete _0x59b6e3[_0x28dec3(0x16f)],delete _0x59b6e3['_hasMapOnItsPath'];},_0x16b054['prototype'][_0x552b16(0x24d)]=function(_0x412567,_0x473bd0){};let _0x2e474d=new _0x16b054(),_0x2847de={'props':_0xe0c405['defaultLimits'][_0x552b16(0x197)]||0x64,'elements':_0xe0c405[_0x552b16(0x242)][_0x552b16(0x243)]||0x64,'strLength':_0xe0c405[_0x552b16(0x242)][_0x552b16(0x21c)]||0x400*0x32,'totalStrLength':_0xe0c405[_0x552b16(0x242)][_0x552b16(0x22d)]||0x400*0x32,'autoExpandLimit':_0xe0c405['defaultLimits'][_0x552b16(0x187)]||0x1388,'autoExpandMaxDepth':_0xe0c405[_0x552b16(0x242)][_0x552b16(0x1ac)]||0xa},_0x4083db={'props':_0xe0c405[_0x552b16(0x1c6)]['props']||0x5,'elements':_0xe0c405[_0x552b16(0x1c6)]['elements']||0x5,'strLength':_0xe0c405[_0x552b16(0x1c6)]['strLength']||0x100,'totalStrLength':_0xe0c405[_0x552b16(0x1c6)][_0x552b16(0x22d)]||0x100*0x3,'autoExpandLimit':_0xe0c405[_0x552b16(0x1c6)]['autoExpandLimit']||0x1e,'autoExpandMaxDepth':_0xe0c405[_0x552b16(0x1c6)][_0x552b16(0x1ac)]||0x2};if(_0x4f8a31){let _0x4a86d8=_0x2e474d[_0x552b16(0x169)][_0x552b16(0x145)](_0x2e474d);_0x2e474d[_0x552b16(0x169)]=function(_0x4bd49a,_0x5b63ef,_0x39b952,_0x1c5c4b){return _0x4a86d8(_0x4bd49a,_0x4f8a31(_0x5b63ef),_0x39b952,_0x1c5c4b);};}function _0x2df0f3(_0x195558,_0x2e9d30,_0x5e14f8,_0x286cfc,_0x3d7a32,_0x1beada){const _0x40ae7e=_0x552b16;let _0x8a5605,_0x4250e9;try{_0x4250e9=_0x4d2f2f(),_0x8a5605=_0xbfab2e[_0x2e9d30],!_0x8a5605||_0x4250e9-_0x8a5605['ts']>_0x40b31b['perLogpoint']['resetWhenQuietMs']&&_0x8a5605[_0x40ae7e(0x1c9)]&&_0x8a5605[_0x40ae7e(0x23e)]/_0x8a5605[_0x40ae7e(0x1c9)]<_0x40b31b[_0x40ae7e(0x167)]['resetOnProcessingTimeAverageMs']?(_0xbfab2e[_0x2e9d30]=_0x8a5605={'count':0x0,'time':0x0,'ts':_0x4250e9},_0xbfab2e['hits']={}):_0x4250e9-_0xbfab2e[_0x40ae7e(0x247)]['ts']>_0x40b31b[_0x40ae7e(0x257)][_0x40ae7e(0x22a)]&&_0xbfab2e[_0x40ae7e(0x247)][_0x40ae7e(0x1c9)]&&_0xbfab2e[_0x40ae7e(0x247)][_0x40ae7e(0x23e)]/_0xbfab2e['hits'][_0x40ae7e(0x1c9)]<_0x40b31b[_0x40ae7e(0x257)]['resetOnProcessingTimeAverageMs']&&(_0xbfab2e['hits']={});let _0xbc7c7f=[],_0x13b0af=_0x8a5605[_0x40ae7e(0x1c1)]||_0xbfab2e[_0x40ae7e(0x247)][_0x40ae7e(0x1c1)]?_0x4083db:_0x2847de,_0x1423a4=_0x587664=>{const _0x1c92d2=_0x40ae7e;let _0x1b761f={};return _0x1b761f[_0x1c92d2(0x197)]=_0x587664['props'],_0x1b761f[_0x1c92d2(0x243)]=_0x587664[_0x1c92d2(0x243)],_0x1b761f[_0x1c92d2(0x21c)]=_0x587664['strLength'],_0x1b761f['totalStrLength']=_0x587664[_0x1c92d2(0x22d)],_0x1b761f[_0x1c92d2(0x187)]=_0x587664[_0x1c92d2(0x187)],_0x1b761f['autoExpandMaxDepth']=_0x587664[_0x1c92d2(0x1ac)],_0x1b761f[_0x1c92d2(0x19d)]=!0x1,_0x1b761f[_0x1c92d2(0x195)]=!_0x52ec09,_0x1b761f[_0x1c92d2(0x248)]=0x1,_0x1b761f[_0x1c92d2(0x1de)]=0x0,_0x1b761f[_0x1c92d2(0x12f)]=_0x1c92d2(0x13f),_0x1b761f[_0x1c92d2(0x202)]=_0x1c92d2(0x1f3),_0x1b761f[_0x1c92d2(0x1c2)]=!0x0,_0x1b761f[_0x1c92d2(0x1ee)]=[],_0x1b761f[_0x1c92d2(0x174)]=0x0,_0x1b761f[_0x1c92d2(0x1ba)]=_0xe0c405[_0x1c92d2(0x1ba)],_0x1b761f[_0x1c92d2(0x251)]=0x0,_0x1b761f['node']={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x1b761f;};for(var _0x3576a4=0x0;_0x3576a4<_0x3d7a32[_0x40ae7e(0x171)];_0x3576a4++)_0xbc7c7f[_0x40ae7e(0x1e3)](_0x2e474d[_0x40ae7e(0x169)]({'timeNode':_0x195558===_0x40ae7e(0x23e)||void 0x0},_0x3d7a32[_0x3576a4],_0x1423a4(_0x13b0af),{}));if(_0x195558===_0x40ae7e(0x15b)||_0x195558===_0x40ae7e(0x227)){let _0x4a76b5=Error['stackTraceLimit'];try{Error['stackTraceLimit']=0x1/0x0,_0xbc7c7f[_0x40ae7e(0x1e3)](_0x2e474d[_0x40ae7e(0x169)]({'stackNode':!0x0},new Error()['stack'],_0x1423a4(_0x13b0af),{'strLength':0x1/0x0}));}finally{Error[_0x40ae7e(0x22c)]=_0x4a76b5;}}return{'method':_0x40ae7e(0x196),'version':_0x5c1c72,'args':[{'ts':_0x5e14f8,'session':_0x286cfc,'args':_0xbc7c7f,'id':_0x2e9d30,'context':_0x1beada}]};}catch(_0x8362ff){return{'method':'log','version':_0x5c1c72,'args':[{'ts':_0x5e14f8,'session':_0x286cfc,'args':[{'type':'unknown','error':_0x8362ff&&_0x8362ff[_0x40ae7e(0x137)]}],'id':_0x2e9d30,'context':_0x1beada}]};}finally{try{if(_0x8a5605&&_0x4250e9){let _0x4ba5a5=_0x4d2f2f();_0x8a5605[_0x40ae7e(0x1c9)]++,_0x8a5605[_0x40ae7e(0x23e)]+=_0x40458a(_0x4250e9,_0x4ba5a5),_0x8a5605['ts']=_0x4ba5a5,_0xbfab2e['hits'][_0x40ae7e(0x1c9)]++,_0xbfab2e[_0x40ae7e(0x247)][_0x40ae7e(0x23e)]+=_0x40458a(_0x4250e9,_0x4ba5a5),_0xbfab2e[_0x40ae7e(0x247)]['ts']=_0x4ba5a5,(_0x8a5605[_0x40ae7e(0x1c9)]>_0x40b31b['perLogpoint']['reduceOnCount']||_0x8a5605[_0x40ae7e(0x23e)]>_0x40b31b[_0x40ae7e(0x167)][_0x40ae7e(0x249)])&&(_0x8a5605[_0x40ae7e(0x1c1)]=!0x0),(_0xbfab2e[_0x40ae7e(0x247)]['count']>_0x40b31b[_0x40ae7e(0x257)][_0x40ae7e(0x219)]||_0xbfab2e[_0x40ae7e(0x247)]['time']>_0x40b31b[_0x40ae7e(0x257)][_0x40ae7e(0x249)])&&(_0xbfab2e['hits'][_0x40ae7e(0x1c1)]=!0x0);}}catch{}}}return _0x2df0f3;}var q=Symbol('ninja'),ce=0xc8,ee=_0x1885dc(0x253);((_0x517a9f,_0x2d4672,_0x385459,_0x1d16c0,_0xac0968,_0x4d39d2,_0x3fc434,_0x431f00,_0x7278c,_0x1cdcbd,_0x13a522,_0x49d63e)=>{const _0x7614d3=_0x1885dc;if(!Y(_0x517a9f,_0x431f00,_0x4d39d2)){_0x517a9f[_0x7614d3(0x229)]=!0x0;return;}if(_0x517a9f['_triedToInstallNetworkLoggingHandler'])return;_0x517a9f[_0x7614d3(0x229)]=!0x0;let _0x48ff1b=_0x4d39d2===_0x7614d3(0x15c)&&_0x517a9f[_0x7614d3(0x1a1)]?_0x517a9f[_0x7614d3(0x1a1)]:void 0x0,_0x40193c=!0x1,_0x59c6a8={},_0x3638e6={},_0x4bf999=()=>{const _0x558ad0=_0x7614d3;for(let _0x24bed8 of Object[_0x558ad0(0x14f)](_0x59c6a8))delete _0x59c6a8[_0x24bed8];for(let _0x2337e2 of Object[_0x558ad0(0x14f)](_0x3638e6))delete _0x3638e6[_0x2337e2];},_0x4b65a0=Z(_0x517a9f,_0x2d4672,_0x385459,_0x1d16c0,_0x4d39d2,_0x7278c,_0x1cdcbd,(_0x4aff38,_0x30eb23,_0xc5de1b,_0x15132f)=>{const _0x399d14=_0x7614d3;if(V(_0x4aff38,_0x30eb23,_0xc5de1b,_0x15132f),_0x4aff38===_0x399d14(0x13d)){let _0x18bafb=_0x30eb23[0x0];if(_0x18bafb['hasOwnProperty'](_0x399d14(0x15f))&&_0x141a1a(_0x18bafb['captureRequests']),_0x18bafb[_0x399d14(0x236)](_0x399d14(0x203))){for(let _0x269ced of _0x18bafb[_0x399d14(0x203)]){let _0x54620d=se(_0x1b82df[_0x399d14(0x152)],_0x269ced[_0x399d14(0x138)]);_0x59c6a8[_0x54620d]=_0x269ced[_0x399d14(0x1ed)];for(let _0x11977a of _0x269ced['files']){let _0x2de8b1=_0x3638e6[_0x11977a];if(_0x2de8b1)_0x2de8b1[_0x54620d]=void 0x0;else{let _0x3c8c7b={};_0x3c8c7b[_0x54620d]=void 0x0,_0x3638e6[_0x11977a]=_0x3c8c7b;}}}Object[_0x399d14(0x17a)](_0x59c6a8)['length']>ce&&(_0x141a1a(!0x1),_0x4bf999(),_0x4b65a0({'method':_0x399d14(0x23a),'version':_0xac0968,'args':[_0x1b82df]}));}if(_0x18bafb[_0x399d14(0x236)](_0x399d14(0x14a)))for(let _0x498147 of _0x18bafb[_0x399d14(0x14a)]){let _0x122417=_0x3638e6[_0x498147];if(!!_0x122417)for(var _0x55ccdf of Object['keys'](_0x122417)){let _0xe92c1=_0x59c6a8[_0x55ccdf];for(let _0x503b69 of _0xe92c1){let _0x4cbb98=_0x3638e6[_0x503b69];_0x4cbb98&&delete _0x4cbb98[_0x55ccdf],Object['keys'](_0x4cbb98)[_0x399d14(0x171)]||delete _0x3638e6[_0x503b69];}delete _0x59c6a8[_0x55ccdf];}}}}),_0x1b82df=_0x517a9f[_0x7614d3(0x139)],_0x5ccb39,_0x27a6a6,_0xefc12,_0x2d7c7a,_0x163752=me(_0x1b82df[_0x7614d3(0x152)]);function _0x141a1a(_0xc7df3c){_0x40193c!==_0xc7df3c&&(_0xc7df3c===!0x0?(_0xefc12=_0xefc12||pe(_0x517a9f,_0x1b82df,_0xac0968,_0x4b65a0,_0x59c6a8,_0x48ff1b,_0x163752,_0x13a522),_0x2d7c7a=_0x2d7c7a||le(_0x517a9f,_0x4b65a0,_0xac0968,_0x1b82df,_0x48ff1b),_0x5ccb39=de(_0x517a9f,_0xefc12,_0x2d7c7a,_0x163752),_0x27a6a6=ue(_0x517a9f,_0xefc12,_0x163752),_0x40193c=!0x0):_0xc7df3c===!0x1&&(_0x5ccb39(),_0x27a6a6(),_0x40193c=!0x1));}_0x141a1a(!0x0);let _0x549ed6;_0x4d39d2==='next.js'&&_0x517a9f[_0x7614d3(0x14c)]&&_0x49d63e&&_0x49d63e['nextJsDistDir']&&(_0x549ed6={'nextJsDistDir':_0x49d63e[_0x7614d3(0x1d0)]}),_0x4b65a0({'method':_0x7614d3(0x18c),'version':_0xac0968,'args':[_0x1b82df,_0x549ed6]});})(globalThis,_0x1885dc(0x1dc),'60708',\"c:\\\\Users\\\\ivanp\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.499\\\\node_modules\",'1.0.0',_0x1885dc(0x17f),_0x1885dc(0x226),[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"WIN-S0E5B0ABQL8\",\"192.168.100.120\"],_0x1885dc(0x166),_0x1885dc(0x210),_0x1885dc(0x209),_0x1885dc(0x1f4));function ue(_0x2a7b3b,_0x49777f,_0x4e9925){const _0x5503fe=_0x1885dc;if(_0x2a7b3b[_0x5503fe(0x15a)]&&_0x2a7b3b['XMLHttpRequest'][_0x5503fe(0x1d4)]){let _0x269e7e=_0x2a7b3b[_0x5503fe(0x15a)]['prototype'][_0x5503fe(0x1bd)],_0x18ea85=_0x2a7b3b[_0x5503fe(0x15a)]['prototype'][_0x5503fe(0x216)],_0x193c35=_0x2a7b3b[_0x5503fe(0x15a)][_0x5503fe(0x1d4)][_0x5503fe(0x182)];return _0x269e7e&&_0x18ea85&&_0x269e7e['toString']()[_0x5503fe(0x228)](_0x5503fe(0x204))!==-0x1?(_0x2a7b3b[_0x5503fe(0x15a)][_0x5503fe(0x1d4)][_0x5503fe(0x1bd)]=function(_0x3c74e0,_0x4c3d62){const _0x4e53cd=_0x5503fe;let _0x504272=this[q]=this[q]||{};return _0x504272[_0x4e53cd(0x133)]=_0x3c74e0,_0x504272[_0x4e53cd(0x13a)]=_0x4c3d62,_0x269e7e[_0x4e53cd(0x1ef)](this,arguments);},_0x2a7b3b[_0x5503fe(0x15a)]['prototype'][_0x5503fe(0x216)]=function(){const _0x2a26ca=_0x5503fe;let _0x221ce3=te(_0x4e9925);return this[_0x2a26ca(0x250)](_0x2a26ca(0x246),()=>{const _0x10b633=_0x2a26ca;var _0x2cea54,_0x37c8ac;if(this[_0x10b633(0x1f9)]===0x4){let _0x4a088a=this['getResponseHeader'](_0x10b633(0x1f5)),_0x157147=_0x4a088a&&_0x4a088a[_0x10b633(0x228)](ee)!==-0x1?ne(this[_0x10b633(0x132)],ee):this[_0x10b633(0x132)],_0x2daf20=oe((_0x2cea54=this[q])==null?void 0x0:_0x2cea54[_0x10b633(0x1d8)]),_0x4d5976=_0x2daf20?ne(arguments[0x0],_0x2daf20):arguments[0x0],_0x58160c=(_0x37c8ac=this['status'])==null?void 0x0:_0x37c8ac['toString']();_0x49777f({'stack':_0x221ce3,'status':_0x58160c,'url':this[q][_0x10b633(0x13a)],'method':this[q][_0x10b633(0x133)],'request':_0x4d5976,'response':_0x157147});}}),_0x18ea85[_0x2a26ca(0x1ef)](this,arguments);},_0x193c35&&(_0x2a7b3b['XMLHttpRequest'][_0x5503fe(0x1d4)][_0x5503fe(0x182)]=function(_0x2a2901,_0x31c54f){const _0x37e725=_0x5503fe;let _0x1fdd58=this[q]=this[q]||{},_0x294d7c=_0x1fdd58[_0x37e725(0x1d8)]=_0x1fdd58[_0x37e725(0x1d8)]||{};_0x294d7c[_0x2a2901]=_0x31c54f,_0x193c35[_0x37e725(0x1ef)](this,arguments);}),()=>{const _0x458bd6=_0x5503fe;_0x2a7b3b[_0x458bd6(0x15a)]['prototype'][_0x458bd6(0x1bd)]=_0x269e7e,_0x2a7b3b['XMLHttpRequest'][_0x458bd6(0x1d4)]['send']=_0x18ea85,_0x2a7b3b['XMLHttpRequest'][_0x458bd6(0x1d4)]['setRequestHeader']=_0x193c35;}):()=>{};}}function de(_0x48d6ea,_0x341c3f,_0x490edc,_0x2cb092){const _0xff7949=_0x1885dc;let _0x201a33=_0x48d6ea[_0xff7949(0x135)];if(_0x48d6ea[_0xff7949(0x1bc)]&&_0x48d6ea['Response'][_0xff7949(0x1d4)]&&_0x201a33[_0xff7949(0x16c)]()['indexOf']('native\\x20code')!==-0x1){let _0x4a0074=function(){const _0x7a13bb=_0xff7949;return _0x48d6ea[_0x7a13bb(0x135)]=function(..._0x3fce2d){const _0x1dca16=_0x7a13bb;var _0x4eae10;let [_0x564b99,_0x2961b1]=_0x3fce2d,_0x5a3197=_0x2961b1&&_0x2961b1['method']?_0x2961b1[_0x1dca16(0x133)]:_0x1dca16(0x1af),_0x464285=te(_0x2cb092),_0x400f10=_0x3fce2d&&_0x3fce2d[_0x1dca16(0x171)]>0x0&&((_0x4eae10=_0x3fce2d[0x1])==null?void 0x0:_0x4eae10[_0x1dca16(0x1d8)]),_0xe206ce=oe(_0x400f10),_0x28bcaf=_0x2961b1!=null&&_0x2961b1['body']?ne(_0x2961b1[_0x1dca16(0x224)],_0xe206ce):_0x2961b1==null?void 0x0:_0x2961b1['body'];return _0x201a33[_0x1dca16(0x1ef)](this,_0x3fce2d)[_0x1dca16(0x255)](_0x488538=>(_0x488538[q]={'method':_0x5a3197,'fetchStack':_0x464285,'request':_0x28bcaf},_0x488538));},()=>_0x48d6ea[_0x7a13bb(0x135)]=_0x201a33;},_0x3f9db4=function(_0x3b9082,_0x498bd4=_0x4a5a93=>_0x4a5a93){const _0x4da43e=_0xff7949;let _0x5aa295=_0x48d6ea['Response'][_0x4da43e(0x1d4)][_0x3b9082];return _0x5aa295?(_0x48d6ea['Response'][_0x4da43e(0x1d4)][_0x3b9082]=async function(){const _0x59ca4e=_0x4da43e;var _0x51f08a;let _0x5bf7ad=te(_0x2cb092),_0x3d3342;try{_0x3d3342=await _0x5aa295['apply'](this,arguments);}catch(_0x383845){throw _0x490edc(_0x383845,_0x5bf7ad),_0x383845;}let _0x23d78=this[q];return _0x23d78&&_0x341c3f({'stack':_0x5bf7ad,'fetchStack':_0x23d78[_0x59ca4e(0x222)],'url':this[_0x59ca4e(0x13a)],'status':(_0x51f08a=this['status'])==null?void 0x0:_0x51f08a[_0x59ca4e(0x16c)](),'request':_0x23d78[_0x59ca4e(0x1e9)],'response':_0x498bd4(_0x3d3342),'method':_0x23d78['method']}),_0x3d3342;},()=>_0x48d6ea[_0x4da43e(0x1bc)][_0x4da43e(0x1d4)][_0x3b9082]=_0x5aa295):()=>{};};var _0x20365e=_0x4a0074,_0x2499b4=_0x3f9db4;let _0x4a2684=[_0x4a0074(),_0x3f9db4(_0xff7949(0x172)),_0x3f9db4('text'),_0x3f9db4('blob',_0x37721b=>({'blob':{'size':_0x37721b[_0xff7949(0x220)],'type':_0x37721b[_0xff7949(0x1a8)]}})),_0x3f9db4(_0xff7949(0x1b3),_0x175065=>({'arrayBuffer':{'byteLength':_0x175065[_0xff7949(0x1e5)]}}))];return()=>_0x4a2684[_0xff7949(0x239)](_0x183f49=>_0x183f49());}return()=>{};}function te(_0x3e04b7){const _0x487122=_0x1885dc;try{let _0x9d24fc=Error[_0x487122(0x22c)];Error[_0x487122(0x22c)]=_0x3e04b7;let _0x3adbd6=new Error()['stack'];return Error[_0x487122(0x22c)]=_0x9d24fc,_0x3adbd6;}catch{return'';}}function se(_0x4ee8ea,_0x262630){const _0x154edb=_0x1885dc;return _0x262630[_0x154edb(0x1e0)](/\\?t=\\d+/g,'');}function _0x54dd(){const _0x2cf239=['_processTreeNodeResult','_objectToString','captureRequests','_consoleNinjaAllowedToStart','resetOnProcessingTimeAverageMs','map','609552HIymka','env','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','','perLogpoint','next.js\\x20browser','serialize','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','splice','toString','_Symbol','capped','_hasSetOnItsPath','_socket','length','json','Map','autoExpandPropertyCount','.hot-update.json','_attemptToReconnectShortly','_capIfString','_additionalMetadata','default','keys','nan','URLSearchParams','_getOwnPropertyNames','reducePolicy','next.js','_webSocketErrorDocsLink','19197297zFkYrQ','setRequestHeader','8489205DOVikF','performance','console','location','autoExpandLimit','symbol','unref','object','current','networkLoggingHandlerInstalled','reload','_addFunctionsNode','entries','return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());','funcName','setter','node','elapsed','noFunctions','log','props','_keyStrRegExp','_connecting','Boolean','NEGATIVE_INFINITY','network','sortProps','_maxConnectAttemptCount','test','Buffer','origin','onerror','_allowedToSend','substr','RegExp','TypedArray','get','type','split','_disposeWebsocket','startsWith','autoExpandMaxDepth','date','includes','GET','_addProperty','_isMap','6AULTWK','arrayBuffer','_propertyName','find','value','8dkHlYO','_addLoadNode','ExpoDevice','resolveGetters','893980iHjwkZ','Response','open','_isNegativeZero','getOwnPropertyDescriptor','some','reduceLimits','autoExpand','parse','String','hostname','reducedLimits','_blacklistedProperty','_hasSymbolPropertyOnItsPath','count','_sortProps','import(\\x27url\\x27)','negativeZero','_p_length','bigint','_WebSocketClass','nextJsDistDir','modules','_allowedToConnectOnSend','241654McHYYg','prototype','undefined','negativeInfinity','hrtime','headers','onopen','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','dockerizedApp','127.0.0.1','_regExpToString','level','[object\\x20Date]','replace','toLowerCase','https://tinyurl.com/37x8b79t','push','onclose','byteLength','expressionsToEvaluate','NEXT_RUNTIME','_getOwnPropertySymbols','request','perf_hooks','string','android','files','autoExpandPreviousObjects','apply','expo','now','_setNodeId','root_exp',{\"nextJsDistDir\":\"C:\\\\Users\\\\ivanp\\\\Documents\\\\Facundo\\\\learning\\\\learn-reactjs-simple\\\\.next\\\\dev\"},'Content-Type','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','cappedProps','Set','readyState','charAt','[object\\x20Array]','_treeNodePropertiesAfterFullValue','_ws','_dateToString','number','_sendErrorMessage','Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','rootExpression','blacklistEntries','native\\x20code','_type','Symbol','[object\\x20Map]','_property',{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}},'_isArray','isExpressionToEvaluate','_p_name','_p_','HTMLAllCollection','versions','1','catch','null','getOwnPropertySymbols','_HTMLAllCollection','timeStamp','send','_connectToHostNow','[object\\x20Set]','reduceOnCount','_connectAttemptCount','close','strLength','concat','set','_reconnectTimeout','size','warn','fetchStack','__nextjs_original-stack-frame','body','_addObjectProperty','1764707481303','error','indexOf','_triedToInstallNetworkLoggingHandler','resetWhenQuietMs','emulator','stackTraceLimit','totalStrLength','6597270vFAlvi','toUpperCase','edge','10tnSxGp','process','_inNextEdge','_setNodeQueryPath','Blob','hasOwnProperty','positiveInfinity','_isPrimitiveType','forEach','pauseNetworkLogging','args','name','fromCharCode','time','_undefined','match','unshift','defaultLimits','elements','import(\\x27path\\x27)','isArray','readystatechange','hits','depth','reduceOnAccumulatedProcessingTimeMs','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','call','_WebSocket','_setNodeExpressionPath','sort','_treeNodePropertiesBeforeFullValue','addEventListener','allStrLength','angular','application/json','10.0.2.2','then','[object\\x20BigInt]','global','array','angular\\x20browser','_isPrimitiveWrapperType','constructor','1245429CvwTei','valueOf','_setNodeLabel','expId','_setNodePermissions','getWebSocketClass','response','method','join','fetch','index','message','stack','_console_ninja_session','url','endsWith','Number','updateNetworkLoggingConfig','POSITIVE_INFINITY','root_exp_id','_isSet','parent','_isUndefined','path','react-native','bind','stringify','_connected','ArrayBuffer','unknown','openFiles','slice','TURBOPACK','_inBrowser','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','getOwnPropertyNames','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','ninjaSuppressConsole','tool','nodeModules','port','_getOwnPropertyDescriptor','_numberRegExp','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','function','eventReceivedCallback','XMLHttpRequest','trace','next.js'];_0x54dd=function(){return _0x2cf239;};return _0x54dd();}var fe=['_devMiddlewareManifest.json',_0x1885dc(0x175),_0x1885dc(0x223)];function he(_0x22c278){const _0x519d37=_0x1885dc;return!!(typeof _0x22c278==_0x519d37(0x1eb)&&fe[_0x519d37(0x1c0)](_0x51d6cb=>_0x22c278['indexOf'](_0x51d6cb)!==-0x1));}function le(_0x2b99ad,_0x497f10,_0x516764,_0x4dddb5,_0x10fdf3){return(_0x24f99d,_0x2ec7ae)=>{const _0x324fc3=_0x4079;_0x2b99ad['_ninjaInstallGlobalErrorHandler']&&(_0x2b99ad['_ninjaIgnoreError']=_0x24f99d);let _0x19677c=String[_0x324fc3(0x23d)](0xa),_0x13e598=_0x2ec7ae[_0x324fc3(0x1a9)](_0x19677c);_0x13e598[_0x324fc3(0x171)]>0x2&&_0x13e598[_0x324fc3(0x16b)](0x0,0x3),_0x2ec7ae=_0x24f99d[_0x324fc3(0x138)][_0x324fc3(0x1a9)](_0x19677c)[0x0]+_0x19677c+_0x13e598[_0x324fc3(0x134)](_0x19677c),_0x497f10({'method':'error','version':_0x516764,'args':[{'ts':Date[_0x324fc3(0x1f1)](),'session':_0x4dddb5,'message':_0x24f99d[_0x324fc3(0x137)]||'','stack':_0x2ec7ae,'generatedStack':void 0x0,'stackTraceLimit':Error[_0x324fc3(0x22c)],'origin':_0x10fdf3}]});};}function pe(_0x584cd5,_0x374763,_0x83de34,_0x4b15e9,_0x2c5701,_0x288bb4,_0x33ea35,_0x34808e){let _0x5f1c1d;return({stack:_0x28a8cf,url:_0x343be2,status:_0x2670af,response:_0x5585b8,method:_0x1b79d2,fetchStack:_0x2d5a46,request:_0x18b273})=>{const _0x58ac14=_0x4079;if(he(_0x343be2))return;let _0x7b9deb=_0x2d5a46?_0x28a8cf+'\\x0a'+_0x2d5a46:_0x28a8cf;if(_0x2c5701[se(_0x374763[_0x58ac14(0x152)],_0x7b9deb)])return;let _0x2d282f={'url':_0x343be2,'status':_0x2670af,'method':_0x1b79d2,'request':_0x18b273,'response':_0x5585b8};_0x5f1c1d=_0x5f1c1d||K(_0x584cd5,!0x1,{'hits':{},'ts':{}},_0x83de34,_0x34808e);let _0x5d8f64=_0x5f1c1d('log',_0x58ac14(0x19c),Date[_0x58ac14(0x1f1)](),_0x374763,[_0x2d282f]);_0x5d8f64['args'][0x0][_0x58ac14(0x23b)][0x0]['props'][_0x58ac14(0x1e3)]({'name':'stack','type':_0x58ac14(0x1eb),'value':_0x28a8cf}),_0x5d8f64[_0x58ac14(0x23b)][0x0][_0x58ac14(0x23b)][0x0]['props'][_0x58ac14(0x1e3)]({'name':'fetchStack','type':'string','value':_0x2d5a46}),_0x288bb4&&(_0x5d8f64[_0x58ac14(0x23b)][0x0]['origin']=_0x288bb4),_0x5d8f64['args'][0x0][_0x58ac14(0x22c)]=_0x33ea35,_0x4b15e9(_0x5d8f64);};}var _e=[_0x1885dc(0x235),_0x1885dc(0x148),_0x1885dc(0x1a6),'DataView','FormData',_0x1885dc(0x17c),'ReadableStream'];function ne(_0x9729ab,_0x56148b){const _0x174279=_0x1885dc;if(typeof _0x9729ab==_0x174279(0x1eb)){try{if(_0x56148b&&_0x56148b[_0x174279(0x1e1)]()===ee)return JSON['parse'](_0x9729ab);}catch{}return _0x9729ab;}if(typeof _0x9729ab==_0x174279(0x18a)&&(_0x9729ab==null?void 0x0:_0x9729ab[_0x174279(0x12b)][_0x174279(0x23c)])){let _0x5aae63=_0x9729ab==null?void 0x0:_0x9729ab[_0x174279(0x12b)][_0x174279(0x23c)];return _0x5aae63&&_e[_0x174279(0x1c0)](_0xd0b44d=>_0xd0b44d===_0x5aae63)?'<'+_0x5aae63+'>':_0x9729ab;}return _0x9729ab;}function me(_0xc0e894){const _0xb397ad=_0x1885dc;return _0xc0e894?_0xc0e894===_0xb397ad(0x168)?0x32:_0xc0e894===_0xb397ad(0x129)?0x64:0x1e:0x1e;}function oe(_0x20a5d9){const _0x16a10a=_0x1885dc;var _0xeb6855;return _0x20a5d9?(_0xeb6855=Object[_0x16a10a(0x18f)](_0x20a5d9)[_0x16a10a(0x1b5)](([_0xe1895c,_0x3fdfd2])=>(_0xe1895c==null?void 0x0:_0xe1895c['toLowerCase']())==='content-type'))==null?void 0x0:_0xeb6855[0x1]:void 0x0;}");
} catch (e) {
    console.error(e);
}
"trimStart" in String.prototype || (String.prototype.trimStart = String.prototype.trimLeft), "trimEnd" in String.prototype || (String.prototype.trimEnd = String.prototype.trimRight), "description" in Symbol.prototype || Object.defineProperty(Symbol.prototype, "description", {
    configurable: !0,
    get: function() {
        var t = /\((.*)\)/.exec(this.toString());
        return t ? t[1] : void 0;
    }
}), Array.prototype.flat || (Array.prototype.flat = function(t, r) {
    return r = this.concat.apply([], this), t > 1 && r.some(Array.isArray) ? r.flat(t - 1) : r;
}, Array.prototype.flatMap = function(t, r) {
    return this.map(t, r).flat();
}), Promise.prototype.finally || (Promise.prototype.finally = function(t) {
    if ("function" != typeof t) return this.then(t, t);
    var r = this.constructor || Promise;
    return this.then(function(n) {
        return r.resolve(t()).then(function() {
            return n;
        });
    }, function(n) {
        return r.resolve(t()).then(function() {
            throw n;
        });
    });
}), Object.fromEntries || (Object.fromEntries = function(t) {
    return Array.from(t).reduce(function(t, r) {
        return t[r[0]] = r[1], t;
    }, {});
}), Array.prototype.at || (Array.prototype.at = function(t) {
    var r = Math.trunc(t) || 0;
    if (r < 0 && (r += this.length), !(r < 0 || r >= this.length)) return this[r];
}), Object.hasOwn || (Object.hasOwn = function(t, r) {
    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
    return Object.prototype.hasOwnProperty.call(Object(t), r);
}), "canParse" in URL || (URL.canParse = function(t, r) {
    try {
        return !!new URL(t, r);
    } catch (t) {
        return !1;
    }
});
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/build/deployment-id.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$6_$40$babel$2b$core$40$7$2e$2_93f69288f48f055a6d20b711204fdcd7$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getDeploymentIdQueryOrEmptyString", {
    enumerable: true,
    get: function() {
        return getDeploymentIdQueryOrEmptyString;
    }
});
function getDeploymentIdQueryOrEmptyString() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return '';
} //# sourceMappingURL=deployment-id.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/lib/route-pattern-normalizer.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    PARAM_SEPARATOR: null,
    hasAdjacentParameterIssues: null,
    normalizeAdjacentParameters: null,
    normalizeTokensForRegexp: null,
    stripNormalizedSeparators: null,
    stripParameterSeparators: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PARAM_SEPARATOR: function() {
        return PARAM_SEPARATOR;
    },
    hasAdjacentParameterIssues: function() {
        return hasAdjacentParameterIssues;
    },
    normalizeAdjacentParameters: function() {
        return normalizeAdjacentParameters;
    },
    normalizeTokensForRegexp: function() {
        return normalizeTokensForRegexp;
    },
    stripNormalizedSeparators: function() {
        return stripNormalizedSeparators;
    },
    stripParameterSeparators: function() {
        return stripParameterSeparators;
    }
});
const PARAM_SEPARATOR = '_NEXTSEP_';
function hasAdjacentParameterIssues(route) {
    if (typeof route !== 'string') return false;
    // Check for interception route markers followed immediately by parameters
    // Pattern: /(.):param, /(..):param, /(...):param, /(.)(.):param etc.
    // These patterns cause "Must have text between two parameters" errors
    if (/\/\(\.{1,3}\):[^/\s]+/.test(route)) {
        return true;
    }
    // Check for basic adjacent parameters without separators
    // Pattern: :param1:param2 (but not :param* or other URL patterns)
    if (/:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(route)) {
        return true;
    }
    return false;
}
function normalizeAdjacentParameters(route) {
    let normalized = route;
    // Handle interception route patterns: (.):param -> (.)_NEXTSEP_:param
    normalized = normalized.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${PARAM_SEPARATOR}:$2`);
    // Handle other adjacent parameter patterns: :param1:param2 -> :param1_NEXTSEP_:param2
    normalized = normalized.replace(/:([^:/\s)]+)(?=:)/g, `:$1${PARAM_SEPARATOR}`);
    return normalized;
}
function normalizeTokensForRegexp(tokens) {
    return tokens.map((token)=>{
        // Token union type: Token = string | TokenObject
        // Literal path segments are strings, parameters/wildcards are objects
        if (typeof token === 'object' && token !== null && // Not all token objects have 'modifier' property (e.g., simple text tokens)
        'modifier' in token && // Only repeating modifiers (* or +) cause the validation error
        // Other modifiers like '?' (optional) are fine
        (token.modifier === '*' || token.modifier === '+') && // Token objects can have different shapes depending on route pattern
        'prefix' in token && 'suffix' in token && // Both prefix and suffix must be empty strings
        // This is what causes the validation error in path-to-regexp
        token.prefix === '' && token.suffix === '') {
            // Add minimal prefix to satisfy path-to-regexp validation
            // We use '/' as it's the most common path delimiter and won't break route matching
            // The prefix gets used in regex generation but doesn't affect parameter extraction
            return {
                ...token,
                prefix: '/'
            };
        }
        return token;
    });
}
function stripNormalizedSeparators(pathname) {
    // Remove separator after interception route markers
    // Pattern: (.)_NEXTSEP_ -> (.), (..)_NEXTSEP_ -> (..), etc.
    // The separator appears after the closing paren of interception markers
    return pathname.replace(new RegExp(`\\)${PARAM_SEPARATOR}`, 'g'), ')');
}
function stripParameterSeparators(params) {
    const cleaned = {};
    for (const [key, value] of Object.entries(params)){
        if (typeof value === 'string') {
            // Remove the separator if it appears at the start of parameter values
            cleaned[key] = value.replace(new RegExp(`^${PARAM_SEPARATOR}`), '');
        } else if (Array.isArray(value)) {
            // Handle array parameters (from repeated route segments)
            cleaned[key] = value.map((item)=>typeof item === 'string' ? item.replace(new RegExp(`^${PARAM_SEPARATOR}`), '') : item);
        } else {
            cleaned[key] = value;
        }
    }
    return cleaned;
} //# sourceMappingURL=route-pattern-normalizer.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/lib/constants.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_SUFFIX: null,
    APP_DIR_ALIAS: null,
    CACHE_ONE_YEAR: null,
    DOT_NEXT_ALIAS: null,
    ESLINT_DEFAULT_DIRS: null,
    GSP_NO_RETURNED_VALUE: null,
    GSSP_COMPONENT_MEMBER_ERROR: null,
    GSSP_NO_RETURNED_VALUE: null,
    HTML_CONTENT_TYPE_HEADER: null,
    INFINITE_CACHE: null,
    INSTRUMENTATION_HOOK_FILENAME: null,
    JSON_CONTENT_TYPE_HEADER: null,
    MATCHED_PATH_HEADER: null,
    MIDDLEWARE_FILENAME: null,
    MIDDLEWARE_LOCATION_REGEXP: null,
    NEXT_BODY_SUFFIX: null,
    NEXT_CACHE_IMPLICIT_TAG_ID: null,
    NEXT_CACHE_REVALIDATED_TAGS_HEADER: null,
    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: null,
    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: null,
    NEXT_CACHE_TAGS_HEADER: null,
    NEXT_CACHE_TAG_MAX_ITEMS: null,
    NEXT_CACHE_TAG_MAX_LENGTH: null,
    NEXT_DATA_SUFFIX: null,
    NEXT_INTERCEPTION_MARKER_PREFIX: null,
    NEXT_META_SUFFIX: null,
    NEXT_QUERY_PARAM_PREFIX: null,
    NEXT_RESUME_HEADER: null,
    NON_STANDARD_NODE_ENV: null,
    PAGES_DIR_ALIAS: null,
    PRERENDER_REVALIDATE_HEADER: null,
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: null,
    PROXY_FILENAME: null,
    PROXY_LOCATION_REGEXP: null,
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: null,
    ROOT_DIR_ALIAS: null,
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: null,
    RSC_ACTION_ENCRYPTION_ALIAS: null,
    RSC_ACTION_PROXY_ALIAS: null,
    RSC_ACTION_VALIDATE_ALIAS: null,
    RSC_CACHE_WRAPPER_ALIAS: null,
    RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: null,
    RSC_MOD_REF_PROXY_ALIAS: null,
    RSC_PREFETCH_SUFFIX: null,
    RSC_SEGMENTS_DIR_SUFFIX: null,
    RSC_SEGMENT_SUFFIX: null,
    RSC_SUFFIX: null,
    SERVER_PROPS_EXPORT_ERROR: null,
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: null,
    SERVER_PROPS_SSG_CONFLICT: null,
    SERVER_RUNTIME: null,
    SSG_FALLBACK_EXPORT_ERROR: null,
    SSG_GET_INITIAL_PROPS_CONFLICT: null,
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: null,
    TEXT_PLAIN_CONTENT_TYPE_HEADER: null,
    UNSTABLE_REVALIDATE_RENAME_ERROR: null,
    WEBPACK_LAYERS: null,
    WEBPACK_RESOURCE_QUERIES: null,
    WEB_SOCKET_MAX_RECONNECTIONS: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_SUFFIX: function() {
        return ACTION_SUFFIX;
    },
    APP_DIR_ALIAS: function() {
        return APP_DIR_ALIAS;
    },
    CACHE_ONE_YEAR: function() {
        return CACHE_ONE_YEAR;
    },
    DOT_NEXT_ALIAS: function() {
        return DOT_NEXT_ALIAS;
    },
    ESLINT_DEFAULT_DIRS: function() {
        return ESLINT_DEFAULT_DIRS;
    },
    GSP_NO_RETURNED_VALUE: function() {
        return GSP_NO_RETURNED_VALUE;
    },
    GSSP_COMPONENT_MEMBER_ERROR: function() {
        return GSSP_COMPONENT_MEMBER_ERROR;
    },
    GSSP_NO_RETURNED_VALUE: function() {
        return GSSP_NO_RETURNED_VALUE;
    },
    HTML_CONTENT_TYPE_HEADER: function() {
        return HTML_CONTENT_TYPE_HEADER;
    },
    INFINITE_CACHE: function() {
        return INFINITE_CACHE;
    },
    INSTRUMENTATION_HOOK_FILENAME: function() {
        return INSTRUMENTATION_HOOK_FILENAME;
    },
    JSON_CONTENT_TYPE_HEADER: function() {
        return JSON_CONTENT_TYPE_HEADER;
    },
    MATCHED_PATH_HEADER: function() {
        return MATCHED_PATH_HEADER;
    },
    MIDDLEWARE_FILENAME: function() {
        return MIDDLEWARE_FILENAME;
    },
    MIDDLEWARE_LOCATION_REGEXP: function() {
        return MIDDLEWARE_LOCATION_REGEXP;
    },
    NEXT_BODY_SUFFIX: function() {
        return NEXT_BODY_SUFFIX;
    },
    NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return NEXT_CACHE_IMPLICIT_TAG_ID;
    },
    NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
    },
    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
    },
    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
    },
    NEXT_CACHE_TAGS_HEADER: function() {
        return NEXT_CACHE_TAGS_HEADER;
    },
    NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return NEXT_CACHE_TAG_MAX_ITEMS;
    },
    NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_TAG_MAX_LENGTH;
    },
    NEXT_DATA_SUFFIX: function() {
        return NEXT_DATA_SUFFIX;
    },
    NEXT_INTERCEPTION_MARKER_PREFIX: function() {
        return NEXT_INTERCEPTION_MARKER_PREFIX;
    },
    NEXT_META_SUFFIX: function() {
        return NEXT_META_SUFFIX;
    },
    NEXT_QUERY_PARAM_PREFIX: function() {
        return NEXT_QUERY_PARAM_PREFIX;
    },
    NEXT_RESUME_HEADER: function() {
        return NEXT_RESUME_HEADER;
    },
    NON_STANDARD_NODE_ENV: function() {
        return NON_STANDARD_NODE_ENV;
    },
    PAGES_DIR_ALIAS: function() {
        return PAGES_DIR_ALIAS;
    },
    PRERENDER_REVALIDATE_HEADER: function() {
        return PRERENDER_REVALIDATE_HEADER;
    },
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
    },
    PROXY_FILENAME: function() {
        return PROXY_FILENAME;
    },
    PROXY_LOCATION_REGEXP: function() {
        return PROXY_LOCATION_REGEXP;
    },
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
    },
    ROOT_DIR_ALIAS: function() {
        return ROOT_DIR_ALIAS;
    },
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
    },
    RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return RSC_ACTION_ENCRYPTION_ALIAS;
    },
    RSC_ACTION_PROXY_ALIAS: function() {
        return RSC_ACTION_PROXY_ALIAS;
    },
    RSC_ACTION_VALIDATE_ALIAS: function() {
        return RSC_ACTION_VALIDATE_ALIAS;
    },
    RSC_CACHE_WRAPPER_ALIAS: function() {
        return RSC_CACHE_WRAPPER_ALIAS;
    },
    RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function() {
        return RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS;
    },
    RSC_MOD_REF_PROXY_ALIAS: function() {
        return RSC_MOD_REF_PROXY_ALIAS;
    },
    RSC_PREFETCH_SUFFIX: function() {
        return RSC_PREFETCH_SUFFIX;
    },
    RSC_SEGMENTS_DIR_SUFFIX: function() {
        return RSC_SEGMENTS_DIR_SUFFIX;
    },
    RSC_SEGMENT_SUFFIX: function() {
        return RSC_SEGMENT_SUFFIX;
    },
    RSC_SUFFIX: function() {
        return RSC_SUFFIX;
    },
    SERVER_PROPS_EXPORT_ERROR: function() {
        return SERVER_PROPS_EXPORT_ERROR;
    },
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
    },
    SERVER_PROPS_SSG_CONFLICT: function() {
        return SERVER_PROPS_SSG_CONFLICT;
    },
    SERVER_RUNTIME: function() {
        return SERVER_RUNTIME;
    },
    SSG_FALLBACK_EXPORT_ERROR: function() {
        return SSG_FALLBACK_EXPORT_ERROR;
    },
    SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return SSG_GET_INITIAL_PROPS_CONFLICT;
    },
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
    },
    TEXT_PLAIN_CONTENT_TYPE_HEADER: function() {
        return TEXT_PLAIN_CONTENT_TYPE_HEADER;
    },
    UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return UNSTABLE_REVALIDATE_RENAME_ERROR;
    },
    WEBPACK_LAYERS: function() {
        return WEBPACK_LAYERS;
    },
    WEBPACK_RESOURCE_QUERIES: function() {
        return WEBPACK_RESOURCE_QUERIES;
    },
    WEB_SOCKET_MAX_RECONNECTIONS: function() {
        return WEB_SOCKET_MAX_RECONNECTIONS;
    }
});
const TEXT_PLAIN_CONTENT_TYPE_HEADER = 'text/plain';
const HTML_CONTENT_TYPE_HEADER = 'text/html; charset=utf-8';
const JSON_CONTENT_TYPE_HEADER = 'application/json; charset=utf-8';
const NEXT_QUERY_PARAM_PREFIX = 'nxtP';
const NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
const MATCHED_PATH_HEADER = 'x-matched-path';
const PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
const RSC_PREFETCH_SUFFIX = '.prefetch.rsc';
const RSC_SEGMENTS_DIR_SUFFIX = '.segments';
const RSC_SEGMENT_SUFFIX = '.segment.rsc';
const RSC_SUFFIX = '.rsc';
const ACTION_SUFFIX = '.action';
const NEXT_DATA_SUFFIX = '.json';
const NEXT_META_SUFFIX = '.meta';
const NEXT_BODY_SUFFIX = '.body';
const NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
const NEXT_RESUME_HEADER = 'next-resume';
const NEXT_CACHE_TAG_MAX_ITEMS = 128;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
const CACHE_ONE_YEAR = 31536000;
const INFINITE_CACHE = 0xfffffffe;
const MIDDLEWARE_FILENAME = 'middleware';
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const PROXY_FILENAME = 'proxy';
const PROXY_LOCATION_REGEXP = `(?:src/)?${PROXY_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
const PAGES_DIR_ALIAS = 'private-next-pages';
const DOT_NEXT_ALIAS = 'private-dot-next';
const ROOT_DIR_ALIAS = 'private-next-root-dir';
const APP_DIR_ALIAS = 'private-next-app-dir';
const RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
const RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
const RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
const RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
const RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS = 'private-next-rsc-track-dynamic-import';
const RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
const GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
const UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    'app',
    'pages',
    'components',
    'lib',
    'src'
];
const SERVER_RUNTIME = {
    edge: 'edge',
    experimentalEdge: 'experimental-edge',
    nodejs: 'nodejs'
};
const WEB_SOCKET_MAX_RECONNECTIONS = 12;
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: 'shared',
    /**
   * The layer for server-only runtime and picking up `react-server` export conditions.
   * Including app router RSC pages and app router custom routes and metadata routes.
   */ reactServerComponents: 'rsc',
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: 'ssr',
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: 'action-browser',
    /**
   * The Node.js bundle layer for the API routes.
   */ apiNode: 'api-node',
    /**
   * The Edge Lite bundle layer for the API routes.
   */ apiEdge: 'api-edge',
    /**
   * The layer for the middleware code.
   */ middleware: 'middleware',
    /**
   * The layer for the instrumentation hooks.
   */ instrument: 'instrument',
    /**
   * The layer for assets on the edge.
   */ edgeAsset: 'edge-asset',
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: 'app-pages-browser',
    /**
   * The browser client bundle layer for Pages directory.
   */ pagesDirBrowser: 'pages-dir-browser',
    /**
   * The Edge Lite bundle layer for Pages directory.
   */ pagesDirEdge: 'pages-dir-edge',
    /**
   * The Node.js bundle layer for Pages directory.
   */ pagesDirNode: 'pages-dir-node'
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        builtinReact: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
            // pages api
            WEBPACK_LAYERS_NAMES.apiNode,
            WEBPACK_LAYERS_NAMES.apiEdge
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
            // app router pages and layouts
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: '__next_edge_ssr_entry__',
    metadata: '__next_metadata__',
    metadataRoute: '__next_metadata_route__',
    metadataImageMeta: '__next_metadata_image_meta__'
}; //# sourceMappingURL=constants.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/lib/is-error.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$6_$40$babel$2b$core$40$7$2e$2_93f69288f48f055a6d20b711204fdcd7$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getProperError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * Checks whether the given value is a NextError.
 * This can be used to print a more detailed error message with properties like `code` & `digest`.
 */ default: function() {
        return isError;
    },
    getProperError: function() {
        return getProperError;
    }
});
const _isplainobject = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/shared/lib/is-plain-object.js [client] (ecmascript)");
/**
 * This is a safe stringify function that handles circular references.
 * We're using a simpler version here to avoid introducing
 * the dependency `safe-stable-stringify` into production bundle.
 *
 * This helper is used both in development and production.
 */ function safeStringifyLite(obj) {
    const seen = new WeakSet();
    return JSON.stringify(obj, (_key, value)=>{
        // If value is an object and already seen, replace with "[Circular]"
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return '[Circular]';
            }
            seen.add(value);
        }
        return value;
    });
}
function isError(err) {
    return typeof err === 'object' && err !== null && 'name' in err && 'message' in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // provide better error for case where `throw undefined`
        // is called in development
        if (typeof err === 'undefined') {
            return Object.defineProperty(new Error('An undefined error was thrown, ' + 'see here for more info: https://nextjs.org/docs/messages/threw-undefined'), "__NEXT_ERROR_CODE", {
                value: "E98",
                enumerable: false,
                configurable: true
            });
        }
        if (err === null) {
            return Object.defineProperty(new Error('A null error was thrown, ' + 'see here for more info: https://nextjs.org/docs/messages/threw-undefined'), "__NEXT_ERROR_CODE", {
                value: "E336",
                enumerable: false,
                configurable: true
            });
        }
    }
    return Object.defineProperty(new Error((0, _isplainobject.isPlainObject)(err) ? safeStringifyLite(err) : err + ''), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=is-error.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/lib/is-api-route.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isAPIRoute", {
    enumerable: true,
    get: function() {
        return isAPIRoute;
    }
});
function isAPIRoute(value) {
    return value === '/api' || Boolean(value == null ? void 0 : value.startsWith('/api/'));
} //# sourceMappingURL=is-api-route.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/lib/require-instrumentation-client.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This module imports the client instrumentation hook from the project root.
 *
 * The `private-next-instrumentation-client` module is automatically aliased to
 * the `instrumentation-client.ts` file in the project root by webpack or turbopack.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$6_$40$babel$2b$core$40$7$2e$2_93f69288f48f055a6d20b711204fdcd7$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
if ("TURBOPACK compile-time truthy", 1) {
    const measureName = 'Client Instrumentation Hook';
    const startTime = performance.now();
    // eslint-disable-next-line @next/internal/typechecked-require -- Not a module.
    module.exports = {};
    const endTime = performance.now();
    const duration = endTime - startTime;
    // Using 16ms threshold as it represents one frame (1000ms/60fps)
    // This helps identify if the instrumentation hook initialization
    // could potentially cause frame drops during development.
    const THRESHOLD = 16;
    if (duration > THRESHOLD) {
        console.log(`[${measureName}] Slow execution detected: ${duration.toFixed(0)}ms (Note: Code download overhead is not included in this measurement)`);
    }
} else //TURBOPACK unreachable
;
 //# sourceMappingURL=require-instrumentation-client.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    coerceError: null,
    decorateDevError: null,
    getOwnerStack: null,
    setOwnerStack: null,
    setOwnerStackIfAvailable: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    coerceError: function() {
        return coerceError;
    },
    decorateDevError: function() {
        return decorateDevError;
    },
    getOwnerStack: function() {
        return getOwnerStack;
    },
    setOwnerStack: function() {
        return setOwnerStack;
    },
    setOwnerStackIfAvailable: function() {
        return setOwnerStackIfAvailable;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)"));
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/lib/is-error.js [client] (ecmascript)"));
const ownerStacks = new WeakMap();
function getOwnerStack(error) {
    return ownerStacks.get(error);
}
function setOwnerStack(error, stack) {
    ownerStacks.set(error, stack);
}
function coerceError(value) {
    return (0, _iserror.default)(value) ? value : Object.defineProperty(new Error('' + value), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
}
function setOwnerStackIfAvailable(error) {
    // React 18 and prod does not have `captureOwnerStack`
    if ('captureOwnerStack' in _react.default) {
        setOwnerStack(error, _react.default.captureOwnerStack());
    }
}
function decorateDevError(thrownValue) {
    const error = coerceError(thrownValue);
    setOwnerStackIfAvailable(error);
    return error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=stitched-error.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/shared/react-18-hydration-error.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getHydrationWarningType: null,
    isHydrationError: null,
    isHydrationWarning: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getHydrationWarningType: function() {
        return getHydrationWarningType;
    },
    isHydrationError: function() {
        return isHydrationError;
    },
    isHydrationWarning: function() {
        return isHydrationWarning;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/lib/is-error.js [client] (ecmascript)"));
function isHydrationError(error) {
    return (0, _iserror.default)(error) && (error.message === 'Hydration failed because the initial UI does not match what was rendered on the server.' || error.message === 'Text content does not match server-rendered HTML.');
}
function isHydrationWarning(message) {
    return isHtmlTagsWarning(message) || isTextInTagsMismatchWarning(message) || isTextWarning(message);
}
// https://github.com/facebook/react/blob/main/packages/react-dom/src/__tests__/ReactDOMHydrationDiff-test.js used as a reference
const htmlTagsWarnings = new Set([
    'Warning: Expected server HTML to contain a matching <%s> in <%s>.%s',
    'Warning: Did not expect server HTML to contain a <%s> in <%s>.%s'
]);
const textAndTagsMismatchWarnings = new Set([
    'Warning: Expected server HTML to contain a matching text node for "%s" in <%s>.%s',
    'Warning: Did not expect server HTML to contain the text node "%s" in <%s>.%s'
]);
const textWarnings = new Set([
    'Warning: Text content did not match. Server: "%s" Client: "%s"%s'
]);
const getHydrationWarningType = (message)=>{
    if (typeof message !== 'string') {
        // TODO: Doesn't make sense to treat no message as a hydration error message.
        // We should bail out somewhere earlier.
        return 'text';
    }
    const normalizedMessage = message.startsWith('Warning: ') ? message : `Warning: ${message}`;
    if (isHtmlTagsWarning(normalizedMessage)) return 'tag';
    if (isTextInTagsMismatchWarning(normalizedMessage)) return 'text-in-tag';
    return 'text';
};
const isHtmlTagsWarning = (message)=>typeof message === 'string' && htmlTagsWarnings.has(message);
const isTextInTagsMismatchWarning = (msg)=>typeof msg === 'string' && textAndTagsMismatchWarnings.has(msg);
const isTextWarning = (msg)=>typeof msg === 'string' && textWarnings.has(msg);
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=react-18-hydration-error.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/shared/react-19-hydration-error.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    NEXTJS_HYDRATION_ERROR_LINK: null,
    REACT_HYDRATION_ERROR_LINK: null,
    getHydrationErrorStackInfo: null,
    isErrorMessageWithComponentStackDiff: null,
    isHydrationError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NEXTJS_HYDRATION_ERROR_LINK: function() {
        return NEXTJS_HYDRATION_ERROR_LINK;
    },
    REACT_HYDRATION_ERROR_LINK: function() {
        return REACT_HYDRATION_ERROR_LINK;
    },
    getHydrationErrorStackInfo: function() {
        return getHydrationErrorStackInfo;
    },
    isErrorMessageWithComponentStackDiff: function() {
        return isErrorMessageWithComponentStackDiff;
    },
    isHydrationError: function() {
        return isHydrationError;
    }
});
const REACT_HYDRATION_ERROR_LINK = 'https://react.dev/link/hydration-mismatch';
const NEXTJS_HYDRATION_ERROR_LINK = 'https://nextjs.org/docs/messages/react-hydration-error';
/**
 * Only React 19+ contains component stack diff in the error message
 */ const errorMessagesWithComponentStackDiff = [
    /^In HTML, (.+?) cannot be a child of <(.+?)>\.(.*)\nThis will cause a hydration error\.(.*)/,
    /^In HTML, (.+?) cannot be a descendant of <(.+?)>\.\nThis will cause a hydration error\.(.*)/,
    /^In HTML, text nodes cannot be a child of <(.+?)>\.\nThis will cause a hydration error\./,
    /^In HTML, whitespace text nodes cannot be a child of <(.+?)>\. Make sure you don't have any extra whitespace between tags on each line of your source code\.\nThis will cause a hydration error\./
];
function isHydrationError(error) {
    return isErrorMessageWithComponentStackDiff(error.message) || /Hydration failed because the server rendered (text|HTML) didn't match the client\./.test(error.message) || /A tree hydrated but some attributes of the server rendered HTML didn't match the client properties./.test(error.message);
}
function isErrorMessageWithComponentStackDiff(msg) {
    return errorMessagesWithComponentStackDiff.some((regex)=>regex.test(msg));
}
function getHydrationErrorStackInfo(error) {
    const errorMessage = error.message;
    if (isErrorMessageWithComponentStackDiff(errorMessage)) {
        const [message, diffLog = ''] = errorMessage.split('\n\n');
        const diff = diffLog.trim();
        return {
            message: diff === '' ? errorMessage.trim() : message.trim(),
            diff,
            notes: null
        };
    }
    const [message, maybeComponentStackDiff] = errorMessage.split(`${REACT_HYDRATION_ERROR_LINK}`);
    const trimmedMessage = message.trim();
    // React built-in hydration diff starts with a newline
    if (maybeComponentStackDiff !== undefined && maybeComponentStackDiff.length > 1) {
        const diffs = [];
        maybeComponentStackDiff.split('\n').forEach((line)=>{
            if (line.trim() === '') return;
            if (!line.trim().startsWith('at ')) {
                diffs.push(line);
            }
        });
        const [displayedMessage, ...notes] = trimmedMessage.split('\n\n');
        return {
            message: displayedMessage,
            diff: diffs.join('\n'),
            notes: notes.join('\n\n') || null
        };
    } else {
        const [displayedMessage, ...notes] = trimmedMessage.split('\n\n');
        return {
            message: displayedMessage,
            diff: null,
            notes: notes.join('\n\n')
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=react-19-hydration-error.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/userspace/pages/hydration-error-state.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    attachHydrationErrorState: null,
    getSquashedHydrationErrorDetails: null,
    storeHydrationErrorStateFromConsoleArgs: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    attachHydrationErrorState: function() {
        return attachHydrationErrorState;
    },
    getSquashedHydrationErrorDetails: function() {
        return getSquashedHydrationErrorDetails;
    },
    storeHydrationErrorStateFromConsoleArgs: function() {
        return storeHydrationErrorStateFromConsoleArgs;
    }
});
const _react18hydrationerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/shared/react-18-hydration-error.js [client] (ecmascript)");
const _react19hydrationerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/shared/react-19-hydration-error.js [client] (ecmascript)");
// We only need this for React 18 or hydration console errors in React 19.
// Once we surface console.error in the dev overlay in pages router, we should only
// use this for React 18.
let hydrationErrorState = {};
const squashedHydrationErrorDetails = new WeakMap();
function getSquashedHydrationErrorDetails(error) {
    return squashedHydrationErrorDetails.has(error) ? squashedHydrationErrorDetails.get(error) : null;
}
function attachHydrationErrorState(error) {
    if (!(0, _react18hydrationerror.isHydrationError)(error) && !(0, _react19hydrationerror.isHydrationError)(error)) {
        return;
    }
    let parsedHydrationErrorState = {};
    // If there's any extra information in the error message to display,
    // append it to the error message details property
    if (hydrationErrorState.warning) {
        // The patched console.error found hydration errors logged by React
        // Append the logged warning to the error message
        parsedHydrationErrorState = {
            // It contains the warning, component stack, server and client tag names
            ...hydrationErrorState
        };
        // Consume the cached hydration diff.
        // This is only required for now when we still squashed the hydration diff log into hydration error.
        // Once the all error is logged to dev overlay in order, this will go away.
        if (hydrationErrorState.reactOutputComponentDiff) {
            parsedHydrationErrorState.reactOutputComponentDiff = hydrationErrorState.reactOutputComponentDiff;
        }
        squashedHydrationErrorDetails.set(error, parsedHydrationErrorState);
    }
}
function storeHydrationErrorStateFromConsoleArgs(...args) {
    let [message, firstContent, secondContent, ...rest] = args;
    if ((0, _react18hydrationerror.isHydrationWarning)(message)) {
        // Some hydration warnings has 4 arguments, some has 3, fallback to the last argument
        // when the 3rd argument is not the component stack but an empty string
        // For some warnings, there's only 1 argument for template.
        // The second argument is the diff or component stack.
        if (args.length === 3) {
            secondContent = '';
        }
        const warning = message.replace(/Warning: /, '').replace('%s', firstContent).replace('%s', secondContent) // remove the last %s from the message
        .replace(/%s/g, '');
        const lastArg = (rest[rest.length - 1] || '').trim();
        hydrationErrorState.reactOutputComponentDiff = generateHydrationDiffReact18(message, firstContent, secondContent, lastArg);
        hydrationErrorState.warning = warning;
    } else if ((0, _react19hydrationerror.isErrorMessageWithComponentStackDiff)(message)) {
        // Some hydration warnings has 4 arguments, some has 3, fallback to the last argument
        // when the 3rd argument is not the component stack but an empty string
        // For some warnings, there's only 1 argument for template.
        // The second argument is the diff or component stack.
        if (args.length === 3) {
            secondContent = '';
        }
        const warning = message.replace('%s', firstContent).replace('%s', secondContent) // remove the last %s from the message
        .replace(/%s/g, '');
        const lastArg = (args[args.length - 1] || '').trim();
        hydrationErrorState.reactOutputComponentDiff = lastArg;
        hydrationErrorState.warning = warning;
    }
}
/*
 * Some hydration errors in React 18 does not have the diff in the error message.
 * Instead it has the error stack trace which is component stack that we can leverage.
 * Will parse the diff from the error stack trace
 *  e.g.
 *  Warning: Expected server HTML to contain a matching <div> in <p>.
 *    at div
 *    at p
 *    at div
 *    at div
 *    at Page
 *  output:
 *    <Page>
 *      <div>
 *        <p>
 *  >       <div>
 *
 */ function generateHydrationDiffReact18(message, firstContent, secondContent, lastArg) {
    const componentStack = lastArg;
    let firstIndex = -1;
    let secondIndex = -1;
    const hydrationWarningType = (0, _react18hydrationerror.getHydrationWarningType)(message);
    // at div\n at Foo\n at Bar (....)\n -> [div, Foo]
    const components = componentStack.split('\n') // .reverse()
    .map((line, index)=>{
        // `<space>at <component> (<location>)` -> `at <component> (<location>)`
        line = line.trim();
        // extract `<space>at <component>` to `<<component>>`
        // e.g. `  at Foo` -> `<Foo>`
        const [, component, location] = /at (\w+)( \((.*)\))?/.exec(line) || [];
        // If there's no location then it's user-land stack frame
        if (!location) {
            if (component === firstContent && firstIndex === -1) {
                firstIndex = index;
            } else if (component === secondContent && secondIndex === -1) {
                secondIndex = index;
            }
        }
        return location ? '' : component;
    }).filter(Boolean).reverse();
    let diff = '';
    for(let i = 0; i < components.length; i++){
        const component = components[i];
        const matchFirstContent = hydrationWarningType === 'tag' && i === components.length - firstIndex - 1;
        const matchSecondContent = hydrationWarningType === 'tag' && i === components.length - secondIndex - 1;
        if (matchFirstContent || matchSecondContent) {
            const spaces = ' '.repeat(Math.max(i * 2 - 2, 0) + 2);
            diff += `> ${spaces}<${component}>\n`;
        } else {
            const spaces = ' '.repeat(i * 2 + 2);
            diff += `${spaces}<${component}>\n`;
        }
    }
    if (hydrationWarningType === 'text') {
        const spaces = ' '.repeat(components.length * 2);
        diff += `+ ${spaces}"${firstContent}"\n`;
        diff += `- ${spaces}"${secondContent}"\n`;
    } else if (hydrationWarningType === 'text-in-tag') {
        const spaces = ' '.repeat(components.length * 2);
        diff += `> ${spaces}<${secondContent}>\n`;
        diff += `>   ${spaces}"${firstContent}"\n`;
    }
    return diff;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hydration-error-state.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-error-boundary.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PagesDevOverlayErrorBoundary", {
    enumerable: true,
    get: function() {
        return PagesDevOverlayErrorBoundary;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)"));
class PagesDevOverlayErrorBoundary extends _react.default.PureComponent {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific to the `@types/react` version.
    render() {
        // The component has to be unmounted or else it would continue to error
        return this.state.error ? null : this.props.children;
    }
    constructor(...args){
        super(...args), this.state = {
            error: null
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=pages-dev-overlay-error-boundary.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/userspace/app/terminal-logging-config.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$6_$40$babel$2b$core$40$7$2e$2_93f69288f48f055a6d20b711204fdcd7$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getIsTerminalLoggingEnabled: null,
    getTerminalLoggingConfig: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getIsTerminalLoggingEnabled: function() {
        return getIsTerminalLoggingEnabled;
    },
    getTerminalLoggingConfig: function() {
        return getTerminalLoggingConfig;
    }
});
function getTerminalLoggingConfig() {
    try {
        return JSON.parse(("TURBOPACK compile-time value", "false") || 'false');
    } catch  {
        return false;
    }
}
function getIsTerminalLoggingEnabled() {
    const config = getTerminalLoggingConfig();
    return Boolean(config);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=terminal-logging-config.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/shared/forward-logs-shared.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    UNDEFINED_MARKER: null,
    patchConsoleMethod: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UNDEFINED_MARKER: function() {
        return UNDEFINED_MARKER;
    },
    patchConsoleMethod: function() {
        return patchConsoleMethod;
    }
});
const UNDEFINED_MARKER = '__next_tagged_undefined';
function patchConsoleMethod(methodName, wrapper) {
    const descriptor = Object.getOwnPropertyDescriptor(console, methodName);
    if (descriptor && (descriptor.configurable || descriptor.writable) && typeof descriptor.value === 'function') {
        const originalMethod = descriptor.value;
        const originalName = Object.getOwnPropertyDescriptor(originalMethod, 'name');
        const wrapperMethod = function(...args) {
            wrapper(methodName, ...args);
            originalMethod.apply(this, args);
        };
        if (originalName) {
            Object.defineProperty(wrapperMethod, 'name', originalName);
        }
        Object.defineProperty(console, methodName, {
            value: wrapperMethod
        });
        return ()=>{
            Object.defineProperty(console, methodName, {
                value: originalMethod,
                writable: descriptor.writable,
                configurable: descriptor.configurable
            });
        };
    }
    return ()=>{};
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forward-logs-shared.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/userspace/app/forward-logs-utils.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    logStringify: null,
    preLogSerializationClone: null,
    safeStringifyWithDepth: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    logStringify: function() {
        return logStringify;
    },
    preLogSerializationClone: function() {
        return preLogSerializationClone;
    },
    safeStringifyWithDepth: function() {
        return safeStringifyWithDepth;
    }
});
const _safestablestringify = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/compiled/safe-stable-stringify/index.js [client] (ecmascript)");
const _terminalloggingconfig = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/userspace/app/terminal-logging-config.js [client] (ecmascript)");
const _forwardlogsshared = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/shared/forward-logs-shared.js [client] (ecmascript)");
const terminalLoggingConfig = (0, _terminalloggingconfig.getTerminalLoggingConfig)();
const PROMISE_MARKER = 'Promise {}';
const UNAVAILABLE_MARKER = '[Unable to view]';
const maximumDepth = typeof terminalLoggingConfig === 'object' && terminalLoggingConfig.depthLimit ? terminalLoggingConfig.depthLimit : 5;
const maximumBreadth = typeof terminalLoggingConfig === 'object' && terminalLoggingConfig.edgeLimit ? terminalLoggingConfig.edgeLimit : 100;
const safeStringifyWithDepth = (0, _safestablestringify.configure)({
    maximumDepth,
    maximumBreadth
});
function preLogSerializationClone(value, seen = new WeakMap()) {
    if (value === undefined) return _forwardlogsshared.UNDEFINED_MARKER;
    if (value === null || typeof value !== 'object') return value;
    if (seen.has(value)) return seen.get(value);
    try {
        Object.keys(value);
    } catch  {
        return UNAVAILABLE_MARKER;
    }
    try {
        if (typeof value.then === 'function') return PROMISE_MARKER;
    } catch  {
        return UNAVAILABLE_MARKER;
    }
    if (Array.isArray(value)) {
        const out = [];
        seen.set(value, out);
        for (const item of value){
            try {
                out.push(preLogSerializationClone(item, seen));
            } catch  {
                out.push(UNAVAILABLE_MARKER);
            }
        }
        return out;
    }
    const proto = Object.getPrototypeOf(value);
    if (proto === Object.prototype || proto === null) {
        const out = {};
        seen.set(value, out);
        for (const key of Object.keys(value)){
            try {
                out[key] = preLogSerializationClone(value[key], seen);
            } catch  {
                out[key] = UNAVAILABLE_MARKER;
            }
        }
        return out;
    }
    return Object.prototype.toString.call(value);
}
const logStringify = (data)=>{
    try {
        const result = safeStringifyWithDepth(data);
        return result ?? `"${UNAVAILABLE_MARKER}"`;
    } catch  {
        return `"${UNAVAILABLE_MARKER}"`;
    }
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forward-logs-utils.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/userspace/app/forward-logs.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$6_$40$babel$2b$core$40$7$2e$2_93f69288f48f055a6d20b711204fdcd7$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    forwardErrorLog: null,
    forwardUnhandledError: null,
    initializeDebugLogForwarding: null,
    logQueue: null,
    logUnhandledRejection: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    forwardErrorLog: function() {
        return forwardErrorLog;
    },
    forwardUnhandledError: function() {
        return forwardUnhandledError;
    },
    initializeDebugLogForwarding: function() {
        return initializeDebugLogForwarding;
    },
    logQueue: function() {
        return logQueue;
    },
    logUnhandledRejection: function() {
        return logUnhandledRejection;
    }
});
const _stitchederror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js [client] (ecmascript)");
const _errorsource = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/shared/lib/error-source.js [client] (ecmascript)");
const _terminalloggingconfig = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/userspace/app/terminal-logging-config.js [client] (ecmascript)");
const _forwardlogsshared = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/shared/forward-logs-shared.js [client] (ecmascript)");
const _forwardlogsutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/userspace/app/forward-logs-utils.js [client] (ecmascript)");
// Client-side file logger for browser logs
class ClientFileLogger {
    formatTimestamp() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }
    log(level, args) {
        if (isReactServerReplayedLog(args)) {
            return;
        }
        // Format the args into a message string
        const message = args.map((arg)=>{
            if (typeof arg === 'string') return arg;
            if (typeof arg === 'number' || typeof arg === 'boolean') return String(arg);
            if (arg === null) return 'null';
            if (arg === undefined) return 'undefined';
            // Handle DOM nodes - only log the tag name to avoid React proxied elements
            if (arg instanceof Element) {
                return `<${arg.tagName.toLowerCase()}>`;
            }
            return (0, _forwardlogsutils.safeStringifyWithDepth)(arg);
        }).join(' ');
        const logEntry = {
            timestamp: this.formatTimestamp(),
            level: level.toUpperCase(),
            message
        };
        this.logEntries.push(logEntry);
        // Schedule flush when new log is added
        scheduleLogFlush();
    }
    getLogs() {
        return [
            ...this.logEntries
        ];
    }
    clear() {
        this.logEntries = [];
    }
    constructor(){
        this.logEntries = [];
    }
}
const clientFileLogger = new ClientFileLogger();
// Set up flush-based sending of client file logs
let logFlushTimeout = null;
let heartbeatInterval = null;
const scheduleLogFlush = ()=>{
    if (logFlushTimeout) {
        clearTimeout(logFlushTimeout);
    }
    logFlushTimeout = setTimeout(()=>{
        sendClientFileLogs();
        logFlushTimeout = null;
    }, 100) // Send after 100ms (much faster with debouncing)
    ;
};
const cancelLogFlush = ()=>{
    if (logFlushTimeout) {
        clearTimeout(logFlushTimeout);
        logFlushTimeout = null;
    }
};
const startHeartbeat = ()=>{
    if (heartbeatInterval) return;
    heartbeatInterval = setInterval(()=>{
        if (logQueue.socket && logQueue.socket.readyState === WebSocket.OPEN) {
            try {
                // Send a ping to keep the connection alive
                logQueue.socket.send(JSON.stringify({
                    event: 'ping'
                }));
            } catch (error) {
                // Connection might be closed, stop heartbeat
                stopHeartbeat();
            }
        } else {
            stopHeartbeat();
        }
    }, 5000) // Send ping every 5 seconds
    ;
};
const stopHeartbeat = ()=>{
    if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
        heartbeatInterval = null;
    }
};
const isTerminalLoggingEnabled = (0, _terminalloggingconfig.getIsTerminalLoggingEnabled)();
const methods = [
    'log',
    'info',
    'warn',
    'debug',
    'table',
    'assert',
    'dir',
    'dirxml',
    'group',
    'groupCollapsed',
    'groupEnd',
    'trace'
];
const afterThisFrame = (cb)=>{
    let timeout;
    const rafId = requestAnimationFrame(()=>{
        timeout = setTimeout(()=>{
            cb();
        });
    });
    return ()=>{
        cancelAnimationFrame(rafId);
        clearTimeout(timeout);
    };
};
let isPatched = false;
const serializeEntries = (entries)=>entries.map((clientEntry)=>{
        switch(clientEntry.kind){
            case 'any-logged-error':
            case 'console':
                {
                    return {
                        ...clientEntry,
                        args: clientEntry.args.map(stringifyUserArg)
                    };
                }
            case 'formatted-error':
                {
                    return clientEntry;
                }
            default:
                {
                    return null;
                }
        }
    });
// Function to send client file logs to server
const sendClientFileLogs = ()=>{
    if (!logQueue.socket || logQueue.socket.readyState !== WebSocket.OPEN) {
        return;
    }
    const logs = clientFileLogger.getLogs();
    if (logs.length === 0) {
        return;
    }
    try {
        const payload = JSON.stringify({
            event: 'client-file-logs',
            logs: logs
        });
        logQueue.socket.send(payload);
    } catch (error) {
        console.error(error);
    } finally{
        // Clear logs regardless of send success to prevent memory leaks
        clientFileLogger.clear();
    }
};
const logQueue = {
    entries: [],
    flushScheduled: false,
    cancelFlush: null,
    socket: null,
    sourceType: undefined,
    router: null,
    scheduleLogSend: (entry)=>{
        logQueue.entries.push(entry);
        if (logQueue.flushScheduled) {
            return;
        }
        // safe to deref and use in setTimeout closure since we cancel on new socket
        const socket = logQueue.socket;
        if (!socket) {
            return;
        }
        // we probably dont need this
        logQueue.flushScheduled = true;
        // non blocking log flush, runs at most once per frame
        logQueue.cancelFlush = afterThisFrame(()=>{
            logQueue.flushScheduled = false;
            // just incase
            try {
                const payload = JSON.stringify({
                    event: 'browser-logs',
                    entries: serializeEntries(logQueue.entries),
                    router: logQueue.router,
                    // needed for source mapping, we just assign the sourceType from the last error for the whole batch
                    sourceType: logQueue.sourceType
                });
                socket.send(payload);
                logQueue.entries = [];
                logQueue.sourceType = undefined;
                // Also send client file logs
                sendClientFileLogs();
            } catch  {
            // error (make sure u don't infinite loop)
            /* noop */ }
        });
    },
    onSocketReady: (socket)=>{
        // When MCP or terminal logging is enabled, we enable the socket connection,
        // otherwise it will not proceed.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (socket.readyState !== WebSocket.OPEN) {
            // invariant
            return;
        }
        // incase an existing timeout was going to run with a stale socket
        logQueue.cancelFlush?.();
        logQueue.socket = socket;
        // Add socket event listeners to track connection state
        socket.addEventListener('close', ()=>{
            cancelLogFlush();
            stopHeartbeat();
        });
        // Only send terminal logs if enabled
        if (isTerminalLoggingEnabled) {
            try {
                const payload = JSON.stringify({
                    event: 'browser-logs',
                    entries: serializeEntries(logQueue.entries),
                    router: logQueue.router,
                    sourceType: logQueue.sourceType
                });
                socket.send(payload);
                logQueue.entries = [];
                logQueue.sourceType = undefined;
            } catch  {
            /** noop just incase */ }
        }
        // Always send client file logs when socket is ready
        sendClientFileLogs();
        // Start heartbeat to keep connection alive
        startHeartbeat();
    }
};
const stringifyUserArg = (arg)=>{
    if (arg.kind !== 'arg') {
        return arg;
    }
    return {
        ...arg,
        data: (0, _forwardlogsutils.logStringify)(arg.data)
    };
};
const createErrorArg = (error)=>{
    const stack = stackWithOwners(error);
    return {
        kind: 'formatted-error-arg',
        prefix: error.message ? `${error.name}: ${error.message}` : `${error.name}`,
        stack
    };
};
const createLogEntry = (level, args)=>{
    // Always log to client file logger with args (formatting done inside log method)
    clientFileLogger.log(level, args);
    // Only forward to terminal if enabled
    if (!isTerminalLoggingEnabled) {
        return;
    }
    // do not abstract this, it implicitly relies on which functions call it. forcing the inlined implementation makes you think about callers
    // error capture stack trace maybe
    const stack = stackWithOwners(new Error());
    const stackLines = stack?.split('\n');
    const cleanStack = stackLines?.slice(3).join('\n') // this is probably ignored anyways
    ;
    const entry = {
        kind: 'console',
        consoleMethodStack: cleanStack ?? null,
        method: level,
        args: args.map((arg)=>{
            if (arg instanceof Error) {
                return createErrorArg(arg);
            }
            return {
                kind: 'arg',
                data: (0, _forwardlogsutils.preLogSerializationClone)(arg)
            };
        })
    };
    logQueue.scheduleLogSend(entry);
};
const forwardErrorLog = (args)=>{
    // Always log to client file logger with args (formatting done inside log method)
    clientFileLogger.log('error', args);
    // Only forward to terminal if enabled
    if (!isTerminalLoggingEnabled) {
        return;
    }
    const errorObjects = args.filter((arg)=>arg instanceof Error);
    const first = errorObjects.at(0);
    if (first) {
        const source = (0, _errorsource.getErrorSource)(first);
        if (source) {
            logQueue.sourceType = source;
        }
    }
    /**
   * browser shows stack regardless of type of data passed to console.error, so we should do the same
   *
   * do not abstract this, it implicitly relies on which functions call it. forcing the inlined implementation makes you think about callers
   */ const stack = stackWithOwners(new Error());
    const stackLines = stack?.split('\n');
    const cleanStack = stackLines?.slice(3).join('\n');
    const entry = {
        kind: 'any-logged-error',
        method: 'error',
        consoleErrorStack: cleanStack ?? '',
        args: args.map((arg)=>{
            if (arg instanceof Error) {
                return createErrorArg(arg);
            }
            return {
                kind: 'arg',
                data: (0, _forwardlogsutils.preLogSerializationClone)(arg)
            };
        })
    };
    logQueue.scheduleLogSend(entry);
};
const createUncaughtErrorEntry = (errorName, errorMessage, fullStack)=>{
    const entry = {
        kind: 'formatted-error',
        prefix: `Uncaught ${errorName}: ${errorMessage}`,
        stack: fullStack,
        method: 'error'
    };
    logQueue.scheduleLogSend(entry);
};
const stackWithOwners = (error)=>{
    let ownerStack = '';
    (0, _stitchederror.setOwnerStackIfAvailable)(error);
    ownerStack = (0, _stitchederror.getOwnerStack)(error) || '';
    const stack = (error.stack || '') + ownerStack;
    return stack;
};
function logUnhandledRejection(reason) {
    // Always log to client file logger
    const message = reason instanceof Error ? `${reason.name}: ${reason.message}` : JSON.stringify(reason);
    clientFileLogger.log('error', [
        `unhandledRejection: ${message}`
    ]);
    // Only forward to terminal if enabled
    if (!isTerminalLoggingEnabled) {
        return;
    }
    if (reason instanceof Error) {
        createUnhandledRejectionErrorEntry(reason, stackWithOwners(reason));
        return;
    }
    createUnhandledRejectionNonErrorEntry(reason);
}
const createUnhandledRejectionErrorEntry = (error, fullStack)=>{
    const source = (0, _errorsource.getErrorSource)(error);
    if (source) {
        logQueue.sourceType = source;
    }
    const entry = {
        kind: 'formatted-error',
        prefix: `⨯ unhandledRejection: ${error.name}: ${error.message}`,
        stack: fullStack,
        method: 'error'
    };
    logQueue.scheduleLogSend(entry);
};
const createUnhandledRejectionNonErrorEntry = (reason)=>{
    const entry = {
        kind: 'any-logged-error',
        // we can't access the stack since the event is dispatched async and creating an inline error would be meaningless
        consoleErrorStack: '',
        method: 'error',
        args: [
            {
                kind: 'arg',
                data: `⨯ unhandledRejection:`,
                isRejectionMessage: true
            },
            {
                kind: 'arg',
                data: (0, _forwardlogsutils.preLogSerializationClone)(reason)
            }
        ]
    };
    logQueue.scheduleLogSend(entry);
};
const isHMR = (args)=>{
    const firstArg = args[0];
    if (typeof firstArg !== 'string') {
        return false;
    }
    if (firstArg.startsWith('[Fast Refresh]')) {
        return true;
    }
    if (firstArg.startsWith('[HMR]')) {
        return true;
    }
    return false;
};
/**
 * Matches the format of logs arguments React replayed from the RSC.
 */ const isReactServerReplayedLog = (args)=>{
    if (args.length < 3) {
        return false;
    }
    const [format, styles, label] = args;
    if (typeof format !== 'string' || typeof styles !== 'string' || typeof label !== 'string') {
        return false;
    }
    return format.startsWith('%c%s%c') && styles.includes('background:');
};
function forwardUnhandledError(error) {
    // Always log to client file logger
    clientFileLogger.log('error', [
        `uncaughtError: ${error.name}: ${error.message}`
    ]);
    // Only forward to terminal if enabled
    if (!isTerminalLoggingEnabled) {
        return;
    }
    createUncaughtErrorEntry(error.name, error.message, stackWithOwners(error));
}
const initializeDebugLogForwarding = (router)=>{
    // probably don't need this
    if (isPatched) {
        return;
    }
    // TODO(rob): why does this break rendering on server, important to know incase the same bug appears in browser
    if (typeof window === 'undefined') {
        return;
    }
    // better to be safe than sorry
    try {
        methods.forEach((method)=>(0, _forwardlogsshared.patchConsoleMethod)(method, (_, ...args)=>{
                if (isHMR(args)) {
                    return;
                }
                if (isReactServerReplayedLog(args)) {
                    return;
                }
                createLogEntry(method, args);
            }));
    } catch  {}
    logQueue.router = router;
    isPatched = true;
    // Cleanup on page unload
    window.addEventListener('beforeunload', ()=>{
        cancelLogFlush();
        stopHeartbeat();
        // Send any remaining logs before page unloads
        sendClientFileLogs();
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forward-logs.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$6_$40$babel$2b$core$40$7$2e$2_93f69288f48f055a6d20b711204fdcd7$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    PagesDevOverlayBridge: null,
    register: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PagesDevOverlayBridge: function() {
        return PagesDevOverlayBridge;
    },
    register: function() {
        return register;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)"));
const _nextdevtools = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/compiled/next-devtools/index.js (raw)");
const _hydrationerrorstate = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/userspace/pages/hydration-error-state.js [client] (ecmascript)");
const _router = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/client/router.js [client] (ecmascript)");
const _stitchederror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js [client] (ecmascript)");
const _onrecoverableerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js [client] (ecmascript)");
const _pagesdevoverlayerrorboundary = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-error-boundary.js [client] (ecmascript)");
const _forwardlogs = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/next-devtools/userspace/app/forward-logs.js [client] (ecmascript)");
const usePagesDevOverlayBridge = ()=>{
    _react.default.useInsertionEffect({
        "usePagesDevOverlayBridge.useInsertionEffect": ()=>{
            // NDT uses a different React instance so it's not technically a state update
            // scheduled from useInsertionEffect.
            (0, _nextdevtools.renderPagesDevOverlay)(_stitchederror.getOwnerStack, _hydrationerrorstate.getSquashedHydrationErrorDetails, _onrecoverableerror.isRecoverableError);
        }
    }["usePagesDevOverlayBridge.useInsertionEffect"], []);
    _react.default.useEffect({
        "usePagesDevOverlayBridge.useEffect": ()=>{
            const { handleStaticIndicator } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/client/dev/hot-reloader/pages/hot-reloader-pages.js [client] (ecmascript)");
            _router.Router.events.on('routeChangeComplete', handleStaticIndicator);
            return ({
                "usePagesDevOverlayBridge.useEffect": function() {
                    _router.Router.events.off('routeChangeComplete', handleStaticIndicator);
                }
            })["usePagesDevOverlayBridge.useEffect"];
        }
    }["usePagesDevOverlayBridge.useEffect"], []);
};
function PagesDevOverlayBridge({ children }) {
    usePagesDevOverlayBridge();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_pagesdevoverlayerrorboundary.PagesDevOverlayErrorBoundary, {
        children: children
    });
}
let isRegistered = false;
function handleError(error) {
    if (!error || !(error instanceof Error) || typeof error.stack !== 'string') {
        // A non-error was thrown, we don't have anything to show. :-(
        return;
    }
    (0, _hydrationerrorstate.attachHydrationErrorState)(error);
    // Skip ModuleBuildError and ModuleNotFoundError, as it will be sent through onBuildError callback.
    // This is to avoid same error as different type showing up on client to cause flashing.
    if (error.name !== 'ModuleBuildError' && error.name !== 'ModuleNotFoundError') {
        _nextdevtools.dispatcher.onUnhandledError(error);
    }
}
let origConsoleError = console.error;
function nextJsHandleConsoleError(...args) {
    // See https://github.com/facebook/react/blob/d50323eb845c5fde0d720cae888bf35dedd05506/packages/react-reconciler/src/ReactFiberErrorLogger.js#L78
    const maybeError = ("TURBOPACK compile-time truthy", 1) ? args[1] : "TURBOPACK unreachable";
    (0, _hydrationerrorstate.storeHydrationErrorStateFromConsoleArgs)(...args);
    // TODO: Surfaces non-errors logged via `console.error`.
    handleError(maybeError);
    (0, _forwardlogs.forwardErrorLog)(args);
    origConsoleError.apply(window.console, args);
}
function onUnhandledError(event) {
    const error = event?.error;
    handleError(error);
    if (error) {
        (0, _forwardlogs.forwardUnhandledError)(error);
    }
}
function onUnhandledRejection(ev) {
    const reason = ev?.reason;
    if (!reason || !(reason instanceof Error) || typeof reason.stack !== 'string') {
        // A non-error was thrown, we don't have anything to show. :-(
        return;
    }
    _nextdevtools.dispatcher.onUnhandledRejection(reason);
    (0, _forwardlogs.logUnhandledRejection)(reason);
}
function register() {
    if (isRegistered) {
        return;
    }
    isRegistered = true;
    try {
        Error.stackTraceLimit = 50;
    } catch  {}
    (0, _forwardlogs.initializeDebugLogForwarding)('pages');
    window.addEventListener('error', onUnhandledError);
    window.addEventListener('unhandledrejection', onUnhandledRejection);
    window.console.error = nextJsHandleConsoleError;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=pages-dev-overlay-setup.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/server/dev/hot-reloader-types.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HMR_MESSAGE_SENT_TO_BROWSER: null,
    HMR_MESSAGE_SENT_TO_SERVER: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HMR_MESSAGE_SENT_TO_BROWSER: function() {
        return HMR_MESSAGE_SENT_TO_BROWSER;
    },
    HMR_MESSAGE_SENT_TO_SERVER: function() {
        return HMR_MESSAGE_SENT_TO_SERVER;
    }
});
var HMR_MESSAGE_SENT_TO_BROWSER = /*#__PURE__*/ function(HMR_MESSAGE_SENT_TO_BROWSER) {
    // JSON messages:
    HMR_MESSAGE_SENT_TO_BROWSER["ADDED_PAGE"] = "addedPage";
    HMR_MESSAGE_SENT_TO_BROWSER["REMOVED_PAGE"] = "removedPage";
    HMR_MESSAGE_SENT_TO_BROWSER["RELOAD_PAGE"] = "reloadPage";
    HMR_MESSAGE_SENT_TO_BROWSER["SERVER_COMPONENT_CHANGES"] = "serverComponentChanges";
    HMR_MESSAGE_SENT_TO_BROWSER["MIDDLEWARE_CHANGES"] = "middlewareChanges";
    HMR_MESSAGE_SENT_TO_BROWSER["CLIENT_CHANGES"] = "clientChanges";
    HMR_MESSAGE_SENT_TO_BROWSER["SERVER_ONLY_CHANGES"] = "serverOnlyChanges";
    HMR_MESSAGE_SENT_TO_BROWSER["SYNC"] = "sync";
    HMR_MESSAGE_SENT_TO_BROWSER["BUILT"] = "built";
    HMR_MESSAGE_SENT_TO_BROWSER["BUILDING"] = "building";
    HMR_MESSAGE_SENT_TO_BROWSER["DEV_PAGES_MANIFEST_UPDATE"] = "devPagesManifestUpdate";
    HMR_MESSAGE_SENT_TO_BROWSER["TURBOPACK_MESSAGE"] = "turbopack-message";
    HMR_MESSAGE_SENT_TO_BROWSER["SERVER_ERROR"] = "serverError";
    HMR_MESSAGE_SENT_TO_BROWSER["TURBOPACK_CONNECTED"] = "turbopack-connected";
    HMR_MESSAGE_SENT_TO_BROWSER["ISR_MANIFEST"] = "isrManifest";
    HMR_MESSAGE_SENT_TO_BROWSER["CACHE_INDICATOR"] = "cacheIndicator";
    HMR_MESSAGE_SENT_TO_BROWSER["DEV_INDICATOR"] = "devIndicator";
    HMR_MESSAGE_SENT_TO_BROWSER["DEVTOOLS_CONFIG"] = "devtoolsConfig";
    HMR_MESSAGE_SENT_TO_BROWSER["REQUEST_CURRENT_ERROR_STATE"] = "requestCurrentErrorState";
    HMR_MESSAGE_SENT_TO_BROWSER["REQUEST_PAGE_METADATA"] = "requestPageMetadata";
    // Binary messages:
    HMR_MESSAGE_SENT_TO_BROWSER[HMR_MESSAGE_SENT_TO_BROWSER["REACT_DEBUG_CHUNK"] = 0] = "REACT_DEBUG_CHUNK";
    return HMR_MESSAGE_SENT_TO_BROWSER;
}({});
var HMR_MESSAGE_SENT_TO_SERVER = /*#__PURE__*/ function(HMR_MESSAGE_SENT_TO_SERVER) {
    // JSON messages:
    HMR_MESSAGE_SENT_TO_SERVER["MCP_ERROR_STATE_RESPONSE"] = "mcp-error-state-response";
    HMR_MESSAGE_SENT_TO_SERVER["MCP_PAGE_METADATA_RESPONSE"] = "mcp-page-metadata-response";
    HMR_MESSAGE_SENT_TO_SERVER["PING"] = "ping";
    return HMR_MESSAGE_SENT_TO_SERVER;
}({}); //# sourceMappingURL=hot-reloader-types.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/server/dev/node-stack-frames.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getServerError", {
    enumerable: true,
    get: function() {
        return getServerError;
    }
});
const _stacktraceparser = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/compiled/stacktrace-parser/stack-trace-parser.cjs.js [client] (ecmascript)");
const _errorsource = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/shared/lib/error-source.js [client] (ecmascript)");
function getFilesystemFrame(frame) {
    const f = {
        ...frame
    };
    if (typeof f.file === 'string') {
        if (f.file.startsWith('/') || // Win32:
        /^[a-z]:\\/i.test(f.file) || // Win32 UNC:
        f.file.startsWith('\\\\')) {
            f.file = `file://${f.file}`;
        }
    }
    return f;
}
function getServerError(error, type) {
    if (error.name === 'TurbopackInternalError') {
        // If this is an internal Turbopack error we shouldn't show internal details
        // to the user. These are written to a log file instead.
        const turbopackInternalError = Object.defineProperty(new Error('An unexpected Turbopack error occurred. Please see the output of `next dev` for more details.'), "__NEXT_ERROR_CODE", {
            value: "E167",
            enumerable: false,
            configurable: true
        });
        (0, _errorsource.decorateServerError)(turbopackInternalError, type);
        return turbopackInternalError;
    }
    let n;
    try {
        throw Object.defineProperty(new Error(error.message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    } catch (e) {
        n = e;
    }
    n.name = error.name;
    try {
        n.stack = `${n.toString()}\n${(0, _stacktraceparser.parse)(error.stack).map(getFilesystemFrame).map((f)=>{
            let str = `    at ${f.methodName}`;
            if (f.file) {
                let loc = f.file;
                if (f.lineNumber) {
                    loc += `:${f.lineNumber}`;
                    if (f.column) {
                        loc += `:${f.column}`;
                    }
                }
                str += ` (${loc})`;
            }
            return str;
        }).join('\n')}`;
    } catch  {
        n.stack = error.stack;
    }
    (0, _errorsource.decorateServerError)(n, type);
    return n;
} //# sourceMappingURL=node-stack-frames.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/pages/_app.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return App;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)"));
const _utils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.6_@babel+core@7.2_93f69288f48f055a6d20b711204fdcd7/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)");
/**
 * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
 * This allows for keeping state between navigation, custom error handling, injecting additional data.
 */ async function appGetInitialProps({ Component, ctx }) {
    const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
        pageProps
    };
}
class App extends _react.default.Component {
    static{
        this.origGetInitialProps = appGetInitialProps;
    }
    static{
        this.getInitialProps = appGetInitialProps;
    }
    render() {
        const { Component, pageProps } = this.props;
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...pageProps
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=_app.js.map
}),
]);

//# sourceMappingURL=a6584_next_dist_2d73e7f0._.js.map