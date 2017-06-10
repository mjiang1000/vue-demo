webpackJsonp([0],{

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(59)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(58),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\workspace\\vue-cnode-client\\vue-demo\\src\\view\\TopicView.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TopicView.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1bd5ec3c", Component.options)
  } else {
    hotAPI.reload("data-v-1bd5ec3c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function fetchTopic(store, route) {
  // debugger
  return store.dispatch('FETCH_TOPIC', { id: route.params.id });
}
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'topic',
  components: {},
  data() {

    return {
      loading: true
    };
  },

  computed: {
    topic() {
      return this.$store.state.topics[this.$route.params.id];
    }
  },
  beforeMount() {
    fetchTopic(this.$store, this.$route).then(() => {
      this.loading = false;
    });
  }
});

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n.topic-view {\n  margin: 0 5px;\n  background-color: #fff;\n}\n.topic-view .topic-title {\n  color: #222;\n  margin: 0;\n  padding: 8px;\n  line-height: 1.5;\n  font-weight: bold;\n}\n.topic-view .meta-info {\n  position: relative;\n  height: 50px;\n  margin: 5px 0;\n}\n.topic-view .meta-info .avatar {\n  display: block;\n  float: left;\n}\n.topic-view .meta-info .avatar img {\n  width: 50px;\n  height: 50px;\n  border-radius: 30px;\n}\n.topic-view .meta-info .type {\n  position: relative;\n  left: 10px;\n  font-size: 0.8em;\n  top: 3px;\n  padding: 3px 4px;\n  border-radius: 5px;\n  color: #555;\n  background-color: #e1e1e1;\n}\n.topic-view .meta-info .comb {\n  position: absolute;\n  bottom: 3px;\n  left: 60px;\n  display: block;\n  font-size: 0.8em;\n}\n.topic-view .meta-info .createat {\n  display: inline-block;\n}\n.topic-view .meta-info .visit {\n  display: inline-block;\n}\n.topic-view .meta-info .collect {\n  position: absolute;\n  right: 20px;\n  color: #789;\n}\n.topic-view .content {\n  padding: 10px;\n  padding-top: 0;\n}\n.topic-view .reply-list {\n  margin: 10px auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "topic-view"
  }, [_c('div', {
    staticClass: "topic-title"
  }, [_vm._v(_vm._s(_vm.topic.title))]), _vm._v(" "), _c('div', {
    staticClass: "meta-info"
  }, [_c('a', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "src": _vm.topic.author.avatar_url
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "type"
  }, [_vm._v(_vm._s(_vm.topic.tab))]), _vm._v(" "), _c('span', {
    staticClass: "comb"
  }, [_c('span', {
    staticClass: "createat"
  }, [_vm._v(_vm._s(_vm._f("timeAgo")(_vm.topic.create_at)) + "前创建")]), _vm._v(" "), _c('span', {
    staticClass: "visit"
  }, [_vm._v(" " + _vm._s(_vm.topic.visit_count) + "次浏览")])]), _vm._v(" "), _c('span', {
    staticClass: "collect"
  }, [_vm._v("收藏")])]), _vm._v(" "), _c('div', {
    staticClass: "content",
    domProps: {
      "innerHTML": _vm._s(_vm.topic.content)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "reply-list"
  }, [_c('p', [_vm._v(_vm._s(_vm.topic.reply_count) + "次评论")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1bd5ec3c", module.exports)
  }
}

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("74532692", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/_css-loader@0.28.4@css-loader/index.js!../../node_modules/_vue-loader@12.2.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1bd5ec3c\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/_stylus-loader@3.0.1@stylus-loader/index.js!../../node_modules/_vue-loader@12.2.1@vue-loader/lib/selector.js?type=styles&index=0!./TopicView.vue", function() {
     var newContent = require("!!../../node_modules/_css-loader@0.28.4@css-loader/index.js!../../node_modules/_vue-loader@12.2.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1bd5ec3c\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/_stylus-loader@3.0.1@stylus-loader/index.js!../../node_modules/_vue-loader@12.2.1@vue-loader/lib/selector.js?type=styles&index=0!./TopicView.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});