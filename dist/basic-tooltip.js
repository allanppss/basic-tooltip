
var AppBasicTooltip = function () {

    var getBTelements = function () {
        let elements = $('*[data-bt-msg]');
        let qtdEl = elements.length;
        putTooltipsElements(elements, qtdEl);
    }

    let putTooltipsElements = function (elements, qtdEl) {
        elements.map((index, element) => {
            let classes = '';
            let msg = $(element).attr('data-bt-msg');
            
            if ($(element).attr('data-bt-align')) {
                classes += 'align-' + $(element).attr('data-bt-align');
            };

            $(element).append(`
                <span class="basic-tooltip ${classes}">${msg}</span>
            `);
        });
    }

    return {
        init: function () {
            getBTelements();
        }
    }
}();

jQuery(document).ready(function () {
    AppBasicTooltip.init();
});
