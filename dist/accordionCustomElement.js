'use strict';

System.register(['aurelia-framework', 'jquery', 'semantic-ui'], function (_export, _context) {
  "use strict";

  var inject, bindable, $, _dec, _class, _desc, _value, _class2, _descriptor, SAccordionCustomElement;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_jquery) {
      $ = _jquery.default;
    }, function (_semanticUi) {}],
    execute: function () {
      _export('SAccordionCustomElement', SAccordionCustomElement = (_dec = inject(Element), _dec(_class = (_class2 = function () {
        function SAccordionCustomElement(element) {
          _classCallCheck(this, SAccordionCustomElement);

          _initDefineProp(this, 'items', _descriptor, this);

          this.element = element;
        }

        SAccordionCustomElement.prototype.attached = function attached() {
          $(this.element).accordion();
        };

        return SAccordionCustomElement;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'items', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class));

      _export('SAccordionCustomElement', SAccordionCustomElement);
    }
  };
});
//# sourceMappingURL=accordionCustomElement.js.map
