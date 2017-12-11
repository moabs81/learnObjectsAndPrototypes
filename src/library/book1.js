const paintForm = function() {
    window.addEventListener('keydown', function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
        };
    });
    $('.titleContainer').append('<div id="alertBanner"></div>');
    $('#contentContainer').append(
        '<div id = "formDiv">' +
        '<form id="getTickerForm">' +
        'Ticker Symbol:<br>' +
        '<input type="text" name="Ticker"><br>' +
        '<button type="button" id="formSubmitButton">Submit</button>' +
        '</form>' +
        '</div>' +
        '<div id="ResultTable">' +
        '</div>' +
        '<div id="searchHistory">' +
        '<table></table>' +
        '</div>'
    );
    document.getElementById('formSubmitButton').addEventListener('click', this);
};

export { paintForm };