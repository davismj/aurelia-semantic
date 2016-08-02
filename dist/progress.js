"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var ProgressViewModel;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("ProgressViewModel", ProgressViewModel = function () {
        function ProgressViewModel() {
          _classCallCheck(this, ProgressViewModel);

          this.showLabel = false;
        }

        ProgressViewModel.prototype.increment = function increment() {
          if (!this.progress) {
            this.progress = 0;
          }
          this.progress += 10;
        };

        ProgressViewModel.prototype.toggleLabel = function toggleLabel() {
          this.showLabel = !this.showLabel;
        };

        return ProgressViewModel;
      }());

      _export("ProgressViewModel", ProgressViewModel);
    }
  };
});
//# sourceMappingURL=progress.js.map
