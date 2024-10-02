/*! For license information please see 178.54420846.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbcalc=self.webpackChunkbcalc||[]).push([[178],{178:function(_,e,t){t.r(e);var r=t(166),n=t.n(r),c=t(250),o=t(852),a=t(184);var i=function(){return(0,a.jsx)("div",{className:"App",children:(0,a.jsx)(o.Z,{})})},s=function(_){_&&_ instanceof Function&&t.e(787).then(t.bind(t,787)).then((function(e){var t=e.getCLS,r=e.getFID,n=e.getFCP,c=e.getLCP,o=e.getTTFB;t(_),r(_),n(_),c(_),o(_)}))};c.createRoot(document.getElementById("root")).render((0,a.jsx)(n().StrictMode,{children:(0,a.jsx)(i,{})})),s()},714:function(_,e,t){var r=t(341),n=t(184),c=["C","^","%","/",7,8,9,"*",4,5,6,"-",1,2,3,"+",0,".","<","="];e.Z=function(_){var e=_.onBtnClick;return(0,n.jsx)("div",{className:r.Z.btnsPanel,children:c.map((function(_){return(0,n.jsx)("div",{className:r.Z.btn,onClick:function(){return e(_)},children:_},_)}))})}},852:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _Users_sumanbarick_Documents_codes_github_codotronix_bcalc_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(152),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(166),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Calc_module_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(341),_Display__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(598),_Buttons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(714),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(184),Calc=function Calc(props){var _props$initTxt=props.initTxt,initTxt=void 0===_props$initTxt?"":_props$initTxt,forceUpdate=props.forceUpdate,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),_useState2=(0,_Users_sumanbarick_Documents_codes_github_codotronix_bcalc_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_useState,2),txt=_useState2[0],setTxt=_useState2[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setTxt(initTxt)}),[initTxt,forceUpdate]);var btnClicked=function btnClicked(c){if(c=c.toString(),"C"===c)setTxt("");else if("="===c)try{var _txt=txt.replace(/\^/g,"**");setTxt(eval(_txt))}catch(err){console.log(err),setTxt("ERROR")}else if("<"===c){var s=txt.toString();setTxt(s.substring(0,s.length-1))}else setTxt("ERROR"===txt?c:function(_){return _+c})};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1__.Z.root,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1__.Z.innerContiner,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Display__WEBPACK_IMPORTED_MODULE_2__.Z,{txt:txt}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons__WEBPACK_IMPORTED_MODULE_3__.Z,{onBtnClick:btnClicked})]})})};__webpack_exports__.Z=Calc},598:function(_,e,t){var r=t(341),n=t(184);e.Z=function(_){var e=_.txt;return(0,n.jsx)("div",{className:r.Z.display,children:e||"0"})}},250:function(_,e,t){var r=t(909);e.createRoot=r.createRoot,e.hydrateRoot=r.hydrateRoot},374:function(_,e,t){var r=t(400),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(_,e,t){var r,c={},s=null,u=null;for(r in void 0!==t&&(s=""+t),void 0!==e.key&&(s=""+e.key),void 0!==e.ref&&(u=e.ref),e)o.call(e,r)&&!i.hasOwnProperty(r)&&(c[r]=e[r]);if(_&&_.defaultProps)for(r in e=_.defaultProps)void 0===c[r]&&(c[r]=e[r]);return{$$typeof:n,type:_,key:s,ref:u,props:c,_owner:a.current}}e.jsx=s,e.jsxs=s},184:function(_,e,t){_.exports=t(374)},341:function(_,e){e.Z={root:"Calc_root__9QinB",innerContiner:"Calc_innerContiner__LQEz2",display:"Calc_display__c0JtW",btnsPanel:"Calc_btnsPanel__N9LQu",btn:"Calc_btn__ZkQEi"}},152:function(_,e,t){function r(_,e){(null==e||e>_.length)&&(e=_.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=_[t];return r}function n(_,e){return function(_){if(Array.isArray(_))return _}(_)||function(_,e){var t=null==_?null:"undefined"!=typeof Symbol&&_[Symbol.iterator]||_["@@iterator"];if(null!=t){var r,n,c,o,a=[],i=!0,s=!1;try{if(c=(t=t.call(_)).next,0===e){if(Object(t)!==t)return;i=!1}else for(;!(i=(r=c.call(t)).done)&&(a.push(r.value),a.length!==e);i=!0);}catch(_){s=!0,n=_}finally{try{if(!i&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(s)throw n}}return a}}(_,e)||function(_,e){if(_){if("string"===typeof _)return r(_,e);var t=Object.prototype.toString.call(_).slice(8,-1);return"Object"===t&&_.constructor&&(t=_.constructor.name),"Map"===t||"Set"===t?Array.from(_):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(_,e):void 0}}(_,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(e,{Z:function(){return n}})}}]);
//# sourceMappingURL=178.54420846.chunk.js.map