import { c as create_ssr_component, n as noop, s as safe_not_equal, a as compute_rest_props, b as createEventDispatcher, d as spread, e as escape_attribute_value, f as escape_object, g as add_attribute, h as escape, i as setContext, o as onDestroy, j as getContext, k as subscribe, v as validate_component } from "./app-fc380b10.js";
import { c as classnames, C as Container } from "./Offcanvas.svelte_svelte_type_style_lang-4d80c442.js";
import "cookie";
import "@lukeed/uuid";
const PageTransition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { refresh = "" } = $$props;
  if ($$props.refresh === void 0 && $$bindings.refresh && refresh !== void 0)
    $$bindings.refresh(refresh);
  return `


<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const subscriber_queue = [];
function writable(value, start2 = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn2) {
    set(fn2(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start2(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const Collapse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "isOpen",
    "class",
    "navbar",
    "onEntering",
    "onEntered",
    "onExiting",
    "onExited",
    "expand",
    "toggler"
  ]);
  const dispatch = createEventDispatcher();
  let { isOpen = false } = $$props;
  let { class: className = "" } = $$props;
  let { navbar = false } = $$props;
  let { onEntering = () => dispatch("opening") } = $$props;
  let { onEntered = () => dispatch("open") } = $$props;
  let { onExiting = () => dispatch("closing") } = $$props;
  let { onExited = () => dispatch("close") } = $$props;
  let { expand = false } = $$props;
  let { toggler = null } = $$props;
  let windowWidth = 0;
  let _wasMaximized = false;
  const minWidth = {};
  minWidth["xs"] = 0;
  minWidth["sm"] = 576;
  minWidth["md"] = 768;
  minWidth["lg"] = 992;
  minWidth["xl"] = 1200;
  function notify() {
    dispatch("update", isOpen);
  }
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.navbar === void 0 && $$bindings.navbar && navbar !== void 0)
    $$bindings.navbar(navbar);
  if ($$props.onEntering === void 0 && $$bindings.onEntering && onEntering !== void 0)
    $$bindings.onEntering(onEntering);
  if ($$props.onEntered === void 0 && $$bindings.onEntered && onEntered !== void 0)
    $$bindings.onEntered(onEntered);
  if ($$props.onExiting === void 0 && $$bindings.onExiting && onExiting !== void 0)
    $$bindings.onExiting(onExiting);
  if ($$props.onExited === void 0 && $$bindings.onExited && onExited !== void 0)
    $$bindings.onExited(onExited);
  if ($$props.expand === void 0 && $$bindings.expand && expand !== void 0)
    $$bindings.expand(expand);
  if ($$props.toggler === void 0 && $$bindings.toggler && toggler !== void 0)
    $$bindings.toggler(toggler);
  classes = classnames(className, navbar && "navbar-collapse");
  {
    if (navbar && expand) {
      if (windowWidth >= minWidth[expand] && !isOpen) {
        isOpen = true;
        _wasMaximized = true;
        notify();
      } else if (windowWidth < minWidth[expand] && _wasMaximized) {
        isOpen = false;
        _wasMaximized = false;
        notify();
      }
    }
  }
  return `

${isOpen ? `<div${spread([
    {
      style: escape_attribute_value(navbar ? void 0 : "overflow: hidden;")
    },
    escape_object($$restProps),
    { class: escape_attribute_value(classes) }
  ])}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let classes;
  let defaultAriaLabel;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "active",
    "block",
    "children",
    "close",
    "color",
    "disabled",
    "href",
    "inner",
    "outline",
    "size",
    "style",
    "value"
  ]);
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { block = false } = $$props;
  let { children = void 0 } = $$props;
  let { close = false } = $$props;
  let { color = "secondary" } = $$props;
  let { disabled = false } = $$props;
  let { href = "" } = $$props;
  let { inner = void 0 } = $$props;
  let { outline = false } = $$props;
  let { size = null } = $$props;
  let { style = "" } = $$props;
  let { value = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0)
    $$bindings.close(close);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  ariaLabel = $$props["aria-label"];
  classes = classnames(className, close ? "btn-close" : "btn", close || `btn${outline ? "-outline" : ""}-${color}`, size ? `btn-${size}` : false, block ? "d-block w-100" : false, { active });
  defaultAriaLabel = close ? "Close" : null;
  return `${href ? `<a${spread([
    escape_object($$restProps),
    { class: escape_attribute_value(classes) },
    { disabled: disabled || null },
    { href: escape_attribute_value(href) },
    {
      "aria-label": escape_attribute_value(ariaLabel || defaultAriaLabel)
    },
    { style: escape_attribute_value(style) }
  ])}${add_attribute("this", inner, 0)}>${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</a>` : `<button${spread([
    escape_object($$restProps),
    { class: escape_attribute_value(classes) },
    { disabled: disabled || null },
    { value: escape_attribute_value(value) },
    {
      "aria-label": escape_attribute_value(ariaLabel || defaultAriaLabel)
    },
    { style: escape_attribute_value(style) }
  ])}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : `
      ${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}
    `}</button>`}`;
});
function getBoundingClientRect(element, includeScale) {
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function getVariation(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var passive = {
  passive: true
};
function effect$2(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect$2,
  data: {}
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets;
  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref4) {
  var state = _ref4.state, options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$1(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$1,
  requires: ["computeStyles"]
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = popperOffsets2[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets2[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets2[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets2[mainAxis] + maxOffset - offsetModifierValue;
    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets2[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
function createPopperActions(initOptions) {
  let contentNode;
  let options = initOptions;
  let popperInstance = null;
  let referenceNode;
  const initPopper = () => {
    if (referenceNode && contentNode) {
      popperInstance = createPopper(referenceNode, contentNode, options);
    }
  };
  const deinitPopper = () => {
    if (popperInstance) {
      popperInstance.destroy();
      popperInstance = null;
    }
  };
  const referenceAction = (node) => {
    referenceNode = node;
    initPopper();
    return {
      destroy() {
        deinitPopper();
      }
    };
  };
  const contentAction = (node, contentOptions) => {
    contentNode = node;
    options = Object.assign(Object.assign({}, initOptions), contentOptions);
    initPopper();
    return {
      update(newContentOptions) {
        options = Object.assign(Object.assign({}, initOptions), newContentOptions);
        if (popperInstance && options) {
          popperInstance.setOptions(options);
        }
      },
      destroy() {
        deinitPopper();
      }
    };
  };
  return [referenceAction, contentAction, () => popperInstance];
}
const createContext = () => writable({});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let subItemIsActive;
  let classes;
  let handleToggle;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "active",
    "addonType",
    "direction",
    "dropup",
    "group",
    "inNavbar",
    "isOpen",
    "nav",
    "setActiveFromChild",
    "size",
    "toggle"
  ]);
  const noop2 = () => void 0;
  let context = createContext();
  setContext("dropdownContext", context);
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { addonType = false } = $$props;
  let { direction = "down" } = $$props;
  let { dropup = false } = $$props;
  let { group = false } = $$props;
  let { inNavbar = false } = $$props;
  let { isOpen = false } = $$props;
  let { nav = false } = $$props;
  let { setActiveFromChild = false } = $$props;
  let { size = "" } = $$props;
  let { toggle = void 0 } = $$props;
  const [popperRef, popperContent] = createPopperActions();
  const validDirections = ["up", "down", "left", "right", "start", "end"];
  if (validDirections.indexOf(direction) === -1) {
    throw new Error(`Invalid direction sent: '${direction}' is not one of 'up', 'down', 'left', 'right', 'start', 'end'`);
  }
  let component;
  let dropdownDirection;
  function handleDocumentClick(e) {
    if (e && (e.which === 3 || e.type === "keyup" && e.which !== 9))
      return;
    if (component.contains(e.target) && component !== e.target && (e.type !== "keyup" || e.which === 9)) {
      return;
    }
    handleToggle(e);
  }
  onDestroy(() => {
    if (typeof document !== "undefined") {
      ["click", "touchstart", "keyup"].forEach((event) => document.removeEventListener(event, handleDocumentClick, true));
    }
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.addonType === void 0 && $$bindings.addonType && addonType !== void 0)
    $$bindings.addonType(addonType);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.dropup === void 0 && $$bindings.dropup && dropup !== void 0)
    $$bindings.dropup(dropup);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.inNavbar === void 0 && $$bindings.inNavbar && inNavbar !== void 0)
    $$bindings.inNavbar(inNavbar);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.nav === void 0 && $$bindings.nav && nav !== void 0)
    $$bindings.nav(nav);
  if ($$props.setActiveFromChild === void 0 && $$bindings.setActiveFromChild && setActiveFromChild !== void 0)
    $$bindings.setActiveFromChild(setActiveFromChild);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  subItemIsActive = !!(setActiveFromChild && component && typeof component.querySelector === "function" && component.querySelector(".active"));
  {
    {
      if (direction === "left")
        dropdownDirection = "start";
      else if (direction === "right")
        dropdownDirection = "end";
      else
        dropdownDirection = direction;
    }
  }
  handleToggle = toggle || (() => isOpen = !isOpen);
  classes = classnames(className, direction !== "down" && `drop${dropdownDirection}`, nav && active ? "active" : false, setActiveFromChild && subItemIsActive ? "active" : false, {
    [`input-group-${addonType}`]: addonType,
    "btn-group": group,
    [`btn-group-${size}`]: !!size,
    dropdown: !group && !addonType,
    show: isOpen,
    "nav-item": nav
  });
  {
    {
      if (typeof document !== "undefined") {
        if (isOpen) {
          ["click", "touchstart", "keyup"].forEach((event) => document.addEventListener(event, handleDocumentClick, true));
        } else {
          ["click", "touchstart", "keyup"].forEach((event) => document.removeEventListener(event, handleDocumentClick, true));
        }
      }
    }
  }
  {
    {
      context.update(() => {
        return {
          toggle: handleToggle,
          isOpen,
          direction: direction === "down" && dropup ? "up" : direction,
          inNavbar,
          popperRef: nav ? noop2 : popperRef,
          popperContent: nav ? noop2 : popperContent
        };
      });
    }
  }
  return `${nav ? `<li${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }])}${add_attribute("this", component, 0)}>${slots.default ? slots.default({}) : ``}</li>` : `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }])}${add_attribute("this", component, 0)}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "active", "disabled", "divider", "header", "toggle", "href"]);
  let $$unsubscribe_context;
  const context = getContext("dropdownContext");
  $$unsubscribe_context = subscribe(context, (value) => value);
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { disabled = false } = $$props;
  let { divider = false } = $$props;
  let { header = false } = $$props;
  let { toggle = true } = $$props;
  let { href = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0)
    $$bindings.divider(divider);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  classes = classnames(className, {
    disabled,
    "dropdown-item": !divider && !header,
    active,
    "dropdown-header": header,
    "dropdown-divider": divider
  });
  $$unsubscribe_context();
  return `${header ? `<h6${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }])}>${slots.default ? slots.default({}) : ``}</h6>` : `${divider ? `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }])}>${slots.default ? slots.default({}) : ``}</div>` : `${href ? `<a${spread([
    escape_object($$restProps),
    { click: true },
    { href: escape_attribute_value(href) },
    { class: escape_attribute_value(classes) }
  ])}>${slots.default ? slots.default({}) : ``}</a>` : `<button${spread([
    { type: "button" },
    escape_object($$restProps),
    { class: escape_attribute_value(classes) }
  ])}>${slots.default ? slots.default({}) : ``}</button>`}`}`}`;
});
const DropdownMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "dark", "end", "right"]);
  let $context, $$unsubscribe_context;
  const context = getContext("dropdownContext");
  $$unsubscribe_context = subscribe(context, (value) => $context = value);
  let { class: className = "" } = $$props;
  let { dark = false } = $$props;
  let { end: end2 = false } = $$props;
  let { right: right2 = false } = $$props;
  const popperPlacement = (direction, end3) => {
    let prefix = direction;
    if (direction === "up")
      prefix = "top";
    else if (direction === "down")
      prefix = "bottom";
    let suffix = end3 ? "end" : "start";
    return `${prefix}-${suffix}`;
  };
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  if ($$props.end === void 0 && $$bindings.end && end2 !== void 0)
    $$bindings.end(end2);
  if ($$props.right === void 0 && $$bindings.right && right2 !== void 0)
    $$bindings.right(right2);
  ({
    modifiers: [
      { name: "flip" },
      {
        name: "offset",
        options: { offset: [0, 2] }
      }
    ],
    placement: popperPlacement($context.direction, end2 || right2)
  });
  classes = classnames(className, "dropdown-menu", {
    "dropdown-menu-dark": dark,
    "dropdown-menu-end": end2 || right2,
    show: $context.isOpen
  });
  $$unsubscribe_context();
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }])}>${slots.default ? slots.default({}) : ``}</div>`;
});
const DropdownToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let btnClasses;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "ariaLabel",
    "active",
    "block",
    "caret",
    "color",
    "disabled",
    "inner",
    "nav",
    "outline",
    "size",
    "split",
    "tag"
  ]);
  let $context, $$unsubscribe_context;
  const context = getContext("dropdownContext");
  $$unsubscribe_context = subscribe(context, (value) => $context = value);
  let { class: className = "" } = $$props;
  let { ariaLabel = "Toggle Dropdown" } = $$props;
  let { active = false } = $$props;
  let { block = false } = $$props;
  let { caret = false } = $$props;
  let { color = "secondary" } = $$props;
  let { disabled = false } = $$props;
  let { inner = void 0 } = $$props;
  let { nav = false } = $$props;
  let { outline = false } = $$props;
  let { size = "" } = $$props;
  let { split = false } = $$props;
  let { tag = null } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  if ($$props.caret === void 0 && $$bindings.caret && caret !== void 0)
    $$bindings.caret(caret);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.nav === void 0 && $$bindings.nav && nav !== void 0)
    $$bindings.nav(nav);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.split === void 0 && $$bindings.split && split !== void 0)
    $$bindings.split(split);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  classes = classnames(className, {
    "dropdown-toggle": caret || split,
    "dropdown-toggle-split": split,
    "nav-link": nav
  });
  btnClasses = classnames(classes, "btn", `btn${outline ? "-outline" : ""}-${color}`, size ? `btn-${size}` : false, block ? "d-block w-100" : false, { active });
  $$unsubscribe_context();
  return `${nav ? `<a${spread([
    escape_object($$restProps),
    { href: "#nav" },
    {
      "aria-expanded": escape_attribute_value($context.isOpen)
    },
    { class: escape_attribute_value(classes) }
  ])}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : `
      <span class="${"visually-hidden"}">${escape(ariaLabel)}</span>
    `}</a>` : `${tag === "div" ? `<div${spread([
    escape_object($$restProps),
    {
      "aria-expanded": escape_attribute_value($context.isOpen)
    },
    { class: escape_attribute_value(classes) }
  ])}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : `
      <span class="${"visually-hidden"}">${escape(ariaLabel)}</span>
    `}</div>` : `${tag === "span" ? `<span${spread([
    escape_object($$restProps),
    {
      "aria-expanded": escape_attribute_value($context.isOpen)
    },
    { class: escape_attribute_value(classes) }
  ])}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : `
      <span class="${"visually-hidden"}">${escape(ariaLabel)}</span>
    `}</span>` : `<button${spread([
    escape_object($$restProps),
    { type: "button" },
    {
      "aria-expanded": escape_attribute_value($context.isOpen)
    },
    {
      class: escape_attribute_value(btnClasses)
    }
  ])}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : `
      <span class="${"visually-hidden"}">${escape(ariaLabel)}</span>
    `}</button>`}`}`}`;
});
function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === "xs") {
    return "flex-column";
  }
  return `flex-${vertical}-column`;
}
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "tabs",
    "pills",
    "vertical",
    "horizontal",
    "justified",
    "fill",
    "navbar",
    "card"
  ]);
  let { class: className = "" } = $$props;
  let { tabs = false } = $$props;
  let { pills = false } = $$props;
  let { vertical = false } = $$props;
  let { horizontal = "" } = $$props;
  let { justified = false } = $$props;
  let { fill = false } = $$props;
  let { navbar = false } = $$props;
  let { card = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0)
    $$bindings.tabs(tabs);
  if ($$props.pills === void 0 && $$bindings.pills && pills !== void 0)
    $$bindings.pills(pills);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.justified === void 0 && $$bindings.justified && justified !== void 0)
    $$bindings.justified(justified);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.navbar === void 0 && $$bindings.navbar && navbar !== void 0)
    $$bindings.navbar(navbar);
  if ($$props.card === void 0 && $$bindings.card && card !== void 0)
    $$bindings.card(card);
  classes = classnames(className, navbar ? "navbar-nav" : "nav", horizontal ? `justify-content-${horizontal}` : false, getVerticalClass(vertical), {
    "nav-tabs": tabs,
    "card-header-tabs": card && tabs,
    "nav-pills": pills,
    "card-header-pills": card && pills,
    "nav-justified": justified,
    "nav-fill": fill
  });
  return `<ul${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }])}>${slots.default ? slots.default({}) : ``}</ul>`;
});
function getExpandClass(expand) {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === "xs") {
    return "navbar-expand";
  }
  return `navbar-expand-${expand}`;
}
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "container", "color", "dark", "expand", "fixed", "light", "sticky"]);
  let { class: className = "" } = $$props;
  let { container = "fluid" } = $$props;
  let { color = "" } = $$props;
  let { dark = false } = $$props;
  let { expand = "" } = $$props;
  let { fixed = "" } = $$props;
  let { light = false } = $$props;
  let { sticky = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  if ($$props.expand === void 0 && $$bindings.expand && expand !== void 0)
    $$bindings.expand(expand);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.sticky === void 0 && $$bindings.sticky && sticky !== void 0)
    $$bindings.sticky(sticky);
  classes = classnames(className, "navbar", getExpandClass(expand), {
    "navbar-light": light,
    "navbar-dark": dark,
    [`bg-${color}`]: color,
    [`fixed-${fixed}`]: fixed,
    [`sticky-${sticky}`]: sticky
  });
  return `<nav${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }])}>${container ? `${validate_component(Container, "Container").$$render($$result, { fluid: container === "fluid" }, {}, {
    default: () => `${slots.default ? slots.default({}) : ``}`
  })}` : `${slots.default ? slots.default({}) : ``}`}</nav>`;
});
const NavItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "active"]);
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  classes = classnames(className, "nav-item", active ? "active" : false);
  return `<li${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }])}>${slots.default ? slots.default({}) : ``}</li>`;
});
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "disabled", "active", "href"]);
  let { class: className = "" } = $$props;
  let { disabled = false } = $$props;
  let { active = false } = $$props;
  let { href = "#" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  classes = classnames(className, "nav-link", { disabled, active });
  return `<a${spread([
    escape_object($$restProps),
    { href: escape_attribute_value(href) },
    { class: escape_attribute_value(classes) }
  ])}>${slots.default ? slots.default({}) : ``}</a>`;
});
const NavbarBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "href"]);
  let { class: className = "" } = $$props;
  let { href = "/" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  classes = classnames(className, "navbar-brand");
  return `<a${spread([
    escape_object($$restProps),
    { class: escape_attribute_value(classes) },
    { href: escape_attribute_value(href) }
  ])}>${slots.default ? slots.default({}) : ``}</a>`;
});
const NavbarToggler = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = classnames(className, "navbar-toggler");
  return `${validate_component(Button, "Button").$$render($$result, Object.assign($$restProps, { class: classes }), {}, {
    default: () => `${slots.default ? slots.default({}) : `
    <span class="${"navbar-toggler-icon"}"></span>
  `}`
  })}`;
});
const load = async ({ page }) => ({ props: { key: page.path } });
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { key } = $$props;
  let isOpen = false;
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  return `





<div>${validate_component(Navbar, "Navbar").$$render($$result, { color: "dark", dark: true, expand: "md" }, {}, {
    default: () => `${validate_component(NavbarBrand, "NavbarBrand").$$render($$result, { href: "/" }, {}, { default: () => `Kakotsu` })}
	  ${validate_component(NavbarToggler, "NavbarToggler").$$render($$result, {}, {}, {})}
	  ${validate_component(Collapse, "Collapse").$$render($$result, { isOpen, navbar: true, expand: "md" }, {}, {
      default: () => `${validate_component(Nav, "Nav").$$render($$result, { class: "ms-auto", navbar: true }, {}, {
        default: () => `${validate_component(Dropdown, "Dropdown").$$render($$result, {
          nav: true,
          inNavbar: true,
          dark: true,
          color: "dark"
        }, {}, {
          default: () => `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { nav: true, caret: true }, {}, { default: () => `Projects` })}
				${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { end: true, dark: true, color: "dark" }, {}, {
            default: () => `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, { default: () => `AnataJS` })}
					${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
					${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, { default: () => `KokoroBridge` })}
					${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
					${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, { default: () => `TakumiJS` })}
					${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, { default: () => `TakumiTS` })}
					${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, { default: () => `TakumiPY` })}`
          })}`
        })}
		  ${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
          default: () => `${validate_component(NavLink, "NavLink").$$render($$result, { href: "/credits" }, {}, { default: () => `Credits` })}`
        })}
		  ${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
          default: () => `${validate_component(NavLink, "NavLink").$$render($$result, { href: "/" }, {}, { default: () => `About` })}`
        })}`
      })}`
    })}`
  })}

	
	${validate_component(PageTransition, "PageTransition").$$render($$result, { refresh: key }, {}, {
    default: () => `${slots.default ? slots.default({}) : ``}`
  })}</div>`;
});
export { _layout as default, load };
