module.exports=function(t){var e={};function i(a){if(e[a])return e[a].exports;var l=e[a]={i:a,l:!1,exports:{}};return t[a].call(l.exports,l,l.exports,i),l.l=!0,l.exports}return i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)i.d(a,l,function(e){return t[e]}.bind(null,l));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=11)}([function(t,e){t.exports=require("jquery")},function(t,e){t.exports=require("markdownparser")},function(t,e){t.exports=require("markdown-it")},function(t,e){t.exports=require("codemirror")},function(t,e){t.exports=require("codemirror/lib/codemirror.css")},function(t,e,i){},function(t,e){t.exports=require("codemirror/addon/display/fullscreen.js")},function(t,e){t.exports=require("codemirror/mode/markdown/markdown.js")},function(t,e){t.exports=require("codemirror/mode/gfm/gfm.js")},function(t,e){t.exports=require("codemirror/addon/display/placeholder.js")},function(t,e){t.exports=require("codemirror/addon/selection/active-line.js")},function(t,e,i){"use strict";i.r(e);i(4),i(5);var a=i(0),l=i.n(a),r=i(1),o=i.n(r),s=i(2),n=i.n(s),d=i(3),c=i.n(d);i(6),i(7),i(8),i(9),i(10);var u=function(t,e,i,a,l,r,o,s){var n,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=i,d._compiled=!0),a&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),o?(n=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),l&&l.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=n):l&&(n=s?function(){l.call(this,this.$root.$options.shadowRoot)}:l),n)if(d.functional){d._injectStyles=n;var c=d.render;d.render=function(t,e){return n.call(e),c(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,n):[n]}return{exports:t,options:d}}({props:{css:{type:String},width:{type:String,default:"100%"},height:{type:String,default:"280px"},toolbar:{type:String,default:"clipboard redo undo | bold italic strikethrough heading | image link | numlist bullist code quote | preview fullscreen"},name:{type:String,default:"html"},value:{type:String,default:"",required:!1},buttonClass:{type:String,default:"btn btn-outline-secondary"},options:{type:Object,default:function(){return{}}}},data:()=>({id:"v-md-editor-"+(new Date).getTime(),editor:null,preview:!1,buttons:{bold:{title:"Bold",className:"far fa-bold",cmd:"bold",hotkey:"Ctrl-B"},italic:{title:"Italic",className:"far fa-italic",cmd:"italic",hotkey:"Ctrl-I"},strikethrough:{cmd:"strikethrough",className:"far fa-strikethrough",title:"Strikethrough"},heading:{title:"Heading",className:"far fa-heading",cmd:"heading",hotkey:"Ctrl-H"},code:{title:"Code",className:"far fa-code",cmd:"code",hotkey:"Ctrl-X"},quote:{title:"Quote",className:"far fa-quote-left",cmd:"quote",hotkey:"Ctrl-Q"},link:{title:"Link",className:"far fa-link",cmd:"link",hotkey:"Ctrl-K"},image:{title:"Image",className:"far fa-image",cmd:"image",hotkey:"Ctrl-P"},fullscreen:{cmd:"fullscreen",className:"far fa-arrows-alt no-disable no-mobile",title:"Toggle Fullscreen",hotkey:"F11",ready:!0},preview:{cmd:"preview",className:"far fa-eye no-disable",title:"Toggle Preview",hotkey:"Ctrl-P",ready:!0},clipboard:{cmd:"clipboard",className:"far fa-clipboard",title:"Copy & Markdown Format",hotkey:"Ctrl-V"},undo:{cmd:"undo",className:"far fa-undo",title:"Undo",hotkey:"Ctrl-Z"},redo:{cmd:"redo",className:"far fa-repeat",title:"Redo",hotkey:"Ctrl-Y"},bullist:{cmd:"bullist",className:"far fa-list-ul",title:"Generic List"},numlist:{cmd:"numlist",className:"far fa-list-ol",title:"Numbered List"}},defaults:{mode:"gfm",theme:"elegent",lineNumbers:!0,styleActiveLine:!0,styleSelectedText:!0,lineWrapping:!0,indentWithTabs:!0,autoRefresh:!0,tabSize:2,indentUnit:2},shortcuts:{}}),watch:{value(t){t!=this.editor.getValue()&&this.editor.setValue(t)}},computed:{styles(){return{width:isNaN(this.width)?this.width:this.width+"%",height:isNaN(this.height)?this.height:this.height+"%"}}},methods:{isEmpty:function(t){return null==t||/^[\s\xa0]*$/.test(t)},isUrl:function(t){return!this.isEmpty(t)&&t.match(/((http|https):\/\/)?(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi)},format(){for(var t=arguments[0],e=1;e<=arguments.length;e++)t=t.replace(/%[a-z]/,arguments[e]);return t},uid(t){return this.format("%s-%s",this.id,t)},obj(t){return l()("#"+this.uid(t))},_toggleBlock(t,e,i){i=this.isEmpty(i)?e:i;var a,l=this.editor,r=l.getCursor("start"),o=l.getCursor("end");this.state()[t]?(e=(a=l.getLine(r.line)).slice(0,r.ch),i=a.slice(r.ch),"bold"==t?(e=e.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/,""),i=i.replace(/(\*\*|__)/,"")):"italic"==t?(e=e.replace(/(\*|_)(?![\s\S]*(\*|_))/,""),i=i.replace(/(\*|_)/,"")):"strikethrough"==t&&(e=e.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/,""),i=i.replace(/(\*\*|~~)/,"")),l.replaceRange(e+i,{line:r.line,ch:0},{line:r.line,ch:99999999999999}),"bold"==t||"strikethrough"==t?(r.ch-=2,r!==o&&(o.ch-=2)):"italic"==t&&(r.ch-=1,r!==o&&(o.ch-=1))):(a=l.getSelection(),"bold"==t?a=(a=a.split("**").join("")).split("__").join(""):"italic"==t?a=(a=a.split("*").join("")).split("_").join(""):"strikethrough"==t&&(a=a.split("~~").join("")),l.replaceSelection(e+a+i),r.ch+=e.length,o.ch=r.ch+a.length),l.setSelection(r,o)},_toggleLine(t){for(var e=this.editor,i=this.state(),a=e.getCursor("start"),l=e.getCursor("end"),r={quote:/^(\s*)\>\s+/,bullist:/^(\s*)(\*|\-|\+)\s+/,numlist:/^(\s*)\d+\.\s+/},o={quote:"> ",bullist:"* ",numlist:"1. "},s=a.line;s<=l.line;s++)!function(a){var l=e.getLine(a);l=i[t]?l.replace(r[t],"$1"):o[t]+l,e.replaceRange(l,{line:a,ch:0},{line:a,ch:99999999999999})}(s)},state(t){t=t||this.editor.getCursor("start");var e=this.editor.getTokenAt(t);if(!e.type)return{};for(var i,a,l=e.type.split(" "),r={},o=0;o<l.length;o++)"strong"===(i=l[o])?r.bold=!0:"variable-2"===i?(a=this.editor.getLine(t.line),/^\s*\d+\.\s/.test(a)?r.numlist=!0:r.bullist=!0):"atom"===i?r.quote=!0:"em"===i?r.italic=!0:"quote"===i?r.quote=!0:"strikethrough"===i?r.strikethrough=!0:"comment"===i?r.code=!0:"link"===i?r.link=!0:"tag"===i?r.image=!0:i.match(/^header(\-[1-6])?$/)&&(r[i.replace("header","heading")]=!0);return r},_replaceSelection(t,e,i){var a,l=this.editor,r=e[0],o=e[1],s=l.getCursor("start"),n=l.getCursor("end");i&&Object.keys(i).forEach(t=>{r=r.replace("#"+t+"#",i[t]),o=o.replace("#"+t+"#",i[t])}),t?(a=l.getLine(s.line),r=a.slice(0,s.ch),o=a.slice(s.ch),l.replaceRange(r+o,{line:s.line,ch:0})):(a=l.getSelection(),l.replaceSelection(r+a+o),s.ch+=r.length,s!==n&&(n.ch+=r.length)),l.setSelection(s,n),l.focus()},command(t){var e=this.editor,i=e.getSelection();this.state();switch(t){case"undo":e.undo();break;case"redo":e.redo();break;case"bold":this._toggleBlock("bold","**");break;case"italic":this._toggleBlock("italic","*");break;case"strikethrough":this._toggleBlock("strikethrough","~~");break;case"code":this._toggleBlock("code","```");break;case"heading":e.replaceSelection("\n### "+i);break;case"clipboard":this.obj("modal-clipboard").modal("show");break;case"image":this.obj("modal-image").modal("show");break;case"link":this.obj("modal-link").modal("show");break;case"quote":case"quote":this._toggleLine("quote");break;case"numlist":this._toggleLine("numlist");break;case"bullist":this._toggleLine("bullist");break;case"preview":var a=new n.a({html:!0,linkify:!0,typographer:!0,breaks:!0,quotes:"“”‘’",langPrefix:"language-",highlight:function(t,e){return'<pre class="hljs" data-lang="'+e+'"><code>'+a.utils.escapeHtml(t)+"</code></pre>"}}),l=a.render(e.getValue());this.obj("html-preview").html(l).toggle(),this.obj("preview").toggleClass("active"),this.preview^=!0,this.obj("toolbar").find('.btn:not(".ready")').prop("disabled",this.preview);break;case"fullscreen":this.obj("container").toggleClass("v-md-fullscreen"),this.obj("fullscreen").toggleClass("active"),e.setOption("fullScreen",!e.getOption("fullScreen"))}e.focus()},drawImage(){var t=this.obj("img-src").val(),e=this.obj("img-title").val();if(this.isUrl(t)){var i=this.state();this._replaceSelection(i.image,["![#title#](",'#url# "#title#")'],{title:e,url:t}),this.hideModal("modal-image")}else this.obj("image-alert").fadeIn()},drawLink(){var t=this.obj("link-src").val(),e=this.obj("link-title").val();if(this.isUrl(t)){var i=this.state();this._replaceSelection(i.link,["[#title#]",'(#url# "#title#")'],{title:e,url:t}),this.hideModal("modal-link")}else this.obj("link-alert").fadeIn()},toMarkdown(){var t=this.obj("clipboard-text").val(),e=o.a.parse(t);this.editor.replaceSelection(e),this.editor.focus(),this.hideModal("modal-clipboard")},hideModal(t){this.obj(t).modal("hide")},build(){if(this.isEmpty(this.toolbar))console.error("You must set toolbar!");else if(!this.__rendered){for(var t=this,e=t.toolbar.toLowerCase().split(/(\s)/).filter(function(e){return!t.isEmpty(e)}),i=l()('<div class="btn-group mr-3" role="group"></div>'),a=t.obj("toolbar"),r=0;r<e.length;r++){var o=e[r],s=t.buttons[o];s&&(o=l()(t.format('<button type="button" id="%s-%s" data-cmd="%s" title="%s" class="%s %s"><i class="%s" aria-hidden="true"></i></button>',t.id,o,s.cmd,s.title,t.buttonClass,s.ready?"ready":"",s.className)).on("click",function(){t.command(l()(this).attr("data-cmd"))}),i.append(o)),"|"!==o&&r!=e.length-1||(a.append(i),i=i.clone().empty())}var n=Object.assign({},{extraKeys:t.shortcuts,initialValue:t.value},t.defaults,t.options),d=document.getElementById(t.id+"-input");t.editor=c.a.fromTextArea(d,n),t.editor.on("change",function(e){t.$emit("input",e.getValue())}),t.editor.on("cursorActivity",function(){var e=t.state();t.obj("toolbar").find(".btn.active:not(.ready)").removeClass("active"),Object.keys(e).forEach(e=>{t.obj(e).addClass("active")})}),t.__rendered=!0}}},mounted(){this.build()},destroyed(){this.editor=null}},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["v-md-container",t.css],attrs:{id:t.uid("container")}},[i("div",{staticClass:"v-md-toolbar",attrs:{id:t.uid("toolbar")}}),t._v(" "),i("div",{staticClass:"v-md-wrapper"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],style:t.styles,attrs:{id:t.uid("input"),name:t.name},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),t._v(" "),i("div",{staticClass:"v-md-preview",attrs:{id:t.uid("html-preview")}})]),t._v(" "),t._t("clipboard",[i("div",{staticClass:"modal fade",attrs:{id:t.uid("modal-clipboard"),"data-backdrop":"false","aria-labelledby":"v-md-editor-modal-clipboard-label","aria-hidden":"true",role:"dialog",tabindex:"-1"}},[i("div",{staticClass:"modal-dialog modal-center"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("h4",{staticClass:"modal-title",attrs:{id:"v-md-editor-modal-clipboard-label"}},[t._v("Html to Markdown")]),t._v(" "),i("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){t.hideModal("modal-clipboard")}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),i("div",{staticClass:"modal-body"},[i("div",{staticClass:"form-group"},[i("textarea",{staticClass:"form-control clipboard-text",attrs:{id:t.uid("clipboard-text")}})])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){t.hideModal("modal-clipboard")}}},[t._v("Close")]),t._v(" "),i("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:t.toMarkdown}},[t._v("Convert")])])])])])]),t._v(" "),t._t("image",[i("div",{staticClass:"modal fade",attrs:{id:t.uid("modal-image"),"data-backdrop":"false","aria-labelledby":"v-md-editor-modal-image-label","aria-hidden":"true",role:"dialog",tabindex:"-1"}},[i("div",{staticClass:"modal-dialog modal-center"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("h4",{staticClass:"modal-title",attrs:{id:"v-md-editor-modal-image-label"}},[t._v("Image")]),t._v(" "),i("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){t.hideModal("modal-image")}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),i("div",{staticClass:"modal-body"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Image title")]),t._v(" "),i("input",{staticClass:"form-control",attrs:{placeholder:"Image title",id:t.uid("img-title")}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Source")]),t._v(" "),i("input",{staticClass:"form-control",attrs:{placeholder:"http://",id:t.uid("img-src")}})]),t._v(" "),i("div",{staticClass:"alert alert-danger alert-dismissible",staticStyle:{display:"none"},attrs:{role:"alert",id:t.uid("image-alert")}},[i("span",[t._v("Image source is invalid!")]),t._v(" "),t._m(0)])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-outline-secondary float-left",attrs:{type:"button"},on:{click:function(e){t.hideModal("modal-image")}}},[t._v("Close")]),t._v(" "),i("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:t.drawImage}},[t._v(" Ok ")])])])])])]),t._v(" "),t._t("link",[i("div",{staticClass:"modal fade",attrs:{id:t.uid("modal-link"),"data-backdrop":"false","aria-labelledby":"v-md-editor-modal-link-label","aria-hidden":"true",role:"dialog",tabindex:"-1"}},[i("div",{staticClass:"modal-dialog modal-center"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("h4",{staticClass:"modal-title",attrs:{id:"v-md-editor-modal-link-label"}},[t._v("Link")]),t._v(" "),i("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){t.hideModal("modal-link")}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),i("div",{staticClass:"modal-body"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Link title")]),t._v(" "),i("input",{staticClass:"form-control",attrs:{placeholder:"Link title",id:t.uid("link-title")}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Source")]),t._v(" "),i("input",{staticClass:"form-control",attrs:{placeholder:"http://",id:t.uid("link-src")}})]),t._v(" "),i("div",{staticClass:"alert alert-danger alert-dismissible",staticStyle:{display:"none"},attrs:{role:"alert",id:t.uid("link-alert")}},[i("span",[t._v("Link is invalid!")]),t._v(" "),t._m(1)])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-outline-secondary float-left",attrs:{type:"button"},on:{click:function(e){t.hideModal("modal-link")}}},[t._v("Cancel")]),t._v(" "),i("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:t.drawLink}},[t._v(" Ok ")])])])])])])],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}],!1,null,null,null);u.options.__file="editor.vue";var m=u.exports;const h={install:function(t){t.__md_editor_installed||(t.__md_editor_installed=!0,t.component("markdown-editor",m))}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(h);e.default=h}]);