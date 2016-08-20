'use strict';

System.register(['aurelia-framework', 'jquery', 'semantic-ui'], function (_export, _context) {
  "use strict";

  var inject, $, _dec, _class, SAccordionCustomAttribute;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_jquery) {
      $ = _jquery.default;
    }, function (_semanticUi) {}],
    execute: function () {
      _export('SAccordionCustomAttribute', SAccordionCustomAttribute = (_dec = inject(Element), _dec(_class = function () {
        function SAccordionCustomAttribute(element) {
          _classCallCheck(this, SAccordionCustomAttribute);

          this.element = element;
        }

        SAccordionCustomAttribute.prototype.attached = function attached() {
          $(this.element).accordion();
        };

        return SAccordionCustomAttribute;
      }()) || _class));

      _export('SAccordionCustomAttribute', SAccordionCustomAttribute);
    }
  };
});
//# sourceMappingURL=accordionCustomAttribute.js.map
