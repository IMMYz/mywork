(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.vueCuteTimeline = {})));
}(this, (function (exports) { 'use strict';

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " .timeline { padding: 0; position: relative; list-style: none; font-family: PingFangSC-light, Avenir, Helvetica, Arial, Hiragino Sans GB, Microsoft YaHei, sans-serif; color: #37414a; -webkit-font-smoothing: antialiased; margin: 10px 20px; } .timeline:after { position: absolute; content: ''; left: 0; top: 0; width: 1px; height: 100%; background-color: var(--timelineTheme); } .timeline-item { position: relative; margin: 1.5em 0 0 28px; padding-bottom: 1.5em; border-bottom: 1px dotted var(--timelineTheme); } .timeline-item:last-child { border-bottom: none; } .timeline-circle { position: absolute; top: .28em; left: -34px; width: 10px; height: 10px; border-radius: 50%; border: 1px solid var(--timelineTheme); background-color: var(--timelineTheme); z-index: 1; box-sizing: content-box; } .timeline-title { position: relative; display: inline-block; /** * BFC inline-block 元素与其兄弟元素、子元素和父元素的外边距都不会折叠（包括其父元素和子元素） */ color: #37414a; cursor: crosshair; margin: -.15em 0 15px 28px } .timeline-title:not(:first-child) { margin-top: 28px; } .timeline-title-circle { left: -36px; top: .15em; width: 16px; height: 16px; } .timeline-others { width: 40px; height: auto; top: .2em; left: -48px; line-height: 1; padding: 2px 0; text-align: center; border: none; background-color: #fff; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var Timeline = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', { ref: "timeline", staticClass: "timeline" }, [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'Timeline',

  props: {
    timelineTheme: {
      type: String,
      default: '#dbdde0'
    }
  },

  mounted: function mounted() {
    var timeline = this.$refs.timeline;
    timeline.style.setProperty('--timelineTheme', this.timelineTheme);
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = "";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();
var timelineItemBase = {
  name: 'TimelineItemBase',

  props: {
    color: {
      type: String,
      default: ''
    },
    lineColor: {
      type: String,
      default: ''
    },
    hollow: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      slotOthers: false
    };
  },

  computed: {
    circleStyle: function circleStyle() {
      if (!this.color && !this.lineColor && !this.hollow) { return; }
      var style = {};
      if (this.color) {
        style = {
          'border-color': this.color,
          'background-color': this.color
        };
      }
      if (this.lineColor) {
        style = Object.assign({}, style, {
          'border-color': this.lineColor
        });
      }
      if (this.hollow) {
        style = Object.assign({}, style, {
          'background-color': '#fff'
        });
      }
      return style;
    },
    slotClass: function slotClass() {
      return this.slotOthers ? 'timeline-others' : '';
    }
  },

  mounted: function mounted() {
    this.slotOthers = !!this.$refs.others.innerHTML;
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = "";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var TimelineItem = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('li', { staticClass: "timeline-item" }, [_c('div', { ref: "others", staticClass: "timeline-circle", class: _vm.slotClass, style: _vm.circleStyle }, [_vm._t("others")], 2), _vm._v(" "), _vm._t("default")], 2);
  }, staticRenderFns: [],
  extends: timelineItemBase
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = "";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var TimelineTitle = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('h3', { staticClass: "timeline-title" }, [_c('div', { ref: "others", staticClass: "timeline-circle timeline-title-circle", class: _vm.slotClass, style: _vm.circleStyle }, [_vm._t("others")], 2), _vm._v(" "), _vm._t("default")], 2);
  }, staticRenderFns: [],
  extends: timelineItemBase
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(Timeline.name, Timeline);
  window.Vue.component(TimelineItem.name, TimelineItem);
  window.Vue.component(TimelineTitle.name, TimelineTitle);
}

exports.Timeline = Timeline;
exports.TimelineItem = TimelineItem;
exports.TimelineTitle = TimelineTitle;

Object.defineProperty(exports, '__esModule', { value: true });

})));
