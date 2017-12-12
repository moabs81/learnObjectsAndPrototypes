const paintForm = function() {
    console.log(this);
    const cbFunction = this;
    const enterFunct = function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            console.log(cbFunction);
        };
    };
    window.addEventListener('keydown', enterFunct);
    /*window.addEventListener('keydown', function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            console.log(this);
        };
    });*/
    $('.titleContainer').append('<div id="alertBanner"></div>');
    $('#contentContainer').append(
        '<div id = "formDiv">' +
        '<form id="getTickerForm">' +
        'Ticker Symbol:<br>' +
        '<input type="text" name="Ticker" id="tickerInputField" autofocus><br>' +
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