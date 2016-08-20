'use strict';

System.register(['aurelia-framework', 'jquery', 'semantic-ui'], function (_export, _context) {
  "use strict";

  var inject, bindable, customElement, bindingMode, $, _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, SProgressCustomElement;

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
      customElement = _aureliaFramework.customElement;
      bindingMode = _aureliaFramework.bindingMode;
    }, function (_jquery) {
      $ = _jquery.default;
    }, function (_semanticUi) {}],
    execute: function () {
      _export('SProgressCustomElement', SProgressCustomElement = (_dec = inject(Element), _dec2 = customElement('s-progress'), _dec3 = bindable({ defaultBindingMode: bindingMode.oneTime }), _dec4 = bindable({ defaultBindingMode: bindingMode.oneWay }), _dec(_class = _dec2(_class = (_class2 = function () {
        function SProgressCustomElement(element) {
          _classCallCheck(this, SProgressCustomElement);

          _initDefineProp(this, 'label', _descriptor, this);

          _initDefineProp(this, 'labeled', _descriptor2, this);

          _initDefineProp(this, 'progress', _descriptor3, this);

          this.element = element;
        }

        SProgressCustomElement.prototype.bind = function bind() {
          this.labeled = this.labeled || this.element.hasAttribute('labeled');
          this.label = this.label || this.element.getAttribute('label');
          this.progress = this.progress || this.element.getAttribute('progress');
        };

        SProgressCustomElement.prototype.attached = function attached() {
          $(this.element).progress({
            text: {
              active: this.label
            }
          });
        };

        SProgressCustomElement.prototype.detached = function detached() {};

        SProgressCustomElement.prototype.progressChanged = function progressChanged(newValue) {
          $(this.element).progress('set progress', newValue);
        };

        return SProgressCustomElement;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'label', [_dec3], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'labeled', [_dec4], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'progress', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('SProgressCustomElement', SProgressCustomElement);
    }
  };
});
//# sourceMappingURL=progressCustomElement.js.map
