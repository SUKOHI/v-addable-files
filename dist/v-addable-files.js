'use strict';

Vue.directive('addable-files', {
    bind: function bind(el, binding, vnode) {

        var max = el.hasAttribute('max') ? parseInt(el.max) : -1;

        el.addEventListener('change', function () {

            var key = binding.expression;
            var currentFiles = vnode.context[key];

            for (var i = 0; i < this.files.length; i++) {

                if (max > 0 && currentFiles.length === max) {

                    var event = document.createEvent('CustomEvent');
                    event.initCustomEvent('too-many', false, false, {
                        el: el,
                        files: {
                            current: currentFiles,
                            input: this.files
                        }
                    });
                    el.dispatchEvent(event);
                    this.value = '';
                    return;
                }

                var file = this.files[i];
                currentFiles.push(file);
            }

            this.value = '';
        });
    }
});