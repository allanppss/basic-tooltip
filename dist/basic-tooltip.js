
var AppBasicTooltip = function () {

    var getBTelements = function () {
        let elements = $('*[data-bt-msg]');
        let qtdEl = elements.length;
        putTooltipsElements(elements, qtdEl);
    }

    let putTooltipsElements = function (elements, qtdEl) {
        elements.map((index, element) => {
            let classes = '';
            let bg = '';
            let fill = '';
            let color = '';
            let msg = $(element).attr('data-bt-msg');

            // Se contem alinhamento
            if ($(element).attr('data-bt-align')) {
                classes += 'align-' + $(element).attr('data-bt-align');
            };

            //Se contem BG
            if ($(element).attr('data-bt-bg')) {
                bg = `background: ${$(element).attr('data-bt-bg')};`;
                fill = `fill: ${$(element).attr('data-bt-bg')};`;
            };

            //Se contem Color
            if ($(element).attr('data-bt-color')) {
                color = `color: ${$(element).attr('data-bt-color')};`;
            };

            $(element).append(`
                <span class="basic-tooltip ${classes}" style="${bg}${color}">
                    ${msg}
                    <svg style="${fill}" height="30" width="30" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M14 20l10 10 10-10z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
                </span>
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
