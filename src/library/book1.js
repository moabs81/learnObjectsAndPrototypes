const paintForm = function() {
    const enterFunct = function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            this(e);
        };
    };
    window.addEventListener('keydown', enterFunct.bind(this));
    $('.titleContainer').append('<div id="alertBanner"></div>');
    $('#contentContainer').append(
        '<div id = "formDiv">' +
        '<form id="getTickerForm">' +
        'Ticker Symbol:<br>' +
        '<input type="text" name="Ticker" id="tickerInputField" autocomplete="off" autofocus><br>' +
        '<button type="button" id="formSubmitButton">Submit</button>' +
        '</form>' +
        '</div>' +
        '<div id="ResultTable">' +
        '<table></table>' +
        '</div>' +
        '<div id="searchHistory">' +
        '<table></table>' +
        '</div>'
    );
    document.getElementById('formSubmitButton').addEventListener('click', this);
};

export { paintForm };