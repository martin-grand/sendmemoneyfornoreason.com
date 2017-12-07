(function () {
    document.querySelectorAll('[data-answer]').forEach(function (element) {
        (function ($this) {
            $this.addEventListener('click', function () {
                document.querySelector('[data-answer-block="' + $this.getAttribute('data-answer') + '"]')
                    .setAttribute('class', 'open');
            });
        })(element);
    });
    document.querySelector('[data-open-overlay]').addEventListener('click', function () {
        document.querySelector('[data-wrapper]').setAttribute('data-wrapper', 'overlay');
    });
})();