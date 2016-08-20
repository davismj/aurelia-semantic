'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var AccordionViewModel;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('AccordionViewModel', AccordionViewModel = function AccordionViewModel() {
        _classCallCheck(this, AccordionViewModel);

        this.articles = [{
          title: 'Custom Elements and CSS Frameworks in Aurelia',
          author: 'Matthew James Davis',
          blurb: 'Using Aurelia custom elements to integrate CSS frameworks into an Aurelia application'
        }, {
          title: 'Aurelia Application Structure',
          author: 'Patrick Walters',
          blurb: 'Here\'s my updated version of application structure with a great example to show it off.'
        }, {
          title: 'How Aurelia Works',
          author: 'Jeremy Danyow',
          blurb: 'This article explains how the binding system works.'
        }];
      });

      _export('AccordionViewModel', AccordionViewModel);
    }
  };
});
//# sourceMappingURL=accordion.js.map
