'use strict';

require('./style.less');

import { apiData } from '../library/ajaxCalls';

import { paintForm } from '../library/book1';

var cbReturn = function(e) {
    e.preventDefault();
    const apiRequest = {
        baseURI: 'https://api.iextrading.com/1.0',
        searchReq: '/stock/' + e.srcElement.parentElement.childNodes[2].value + '/quote',
        method: 'GET',
        success: function() {
            //console.log(this);
            $('#alertBanner').html(' ');
            if (this.status == 404) {
                $('#alertBanner').html('404 ERROR - ' + this.statusText);
            } else {
                var returnObj = JSON.parse(this.response);
                //console.log(returnObj);                
                $('#ResultTable table').html(
                    '<tr><td> ' + returnObj.symbol + ' </td></tr>' +
                    '<tr><td> ' + returnObj.companyName + ' </td></tr>' +
                    '<tr><td> ' + returnObj.sector + ' </td></tr>' +
                    '<tr><td> ' + returnObj.latestPrice + ' </td></tr>' +
                    '<tr><td> ' + returnObj.primaryExchange + ' </td></tr>' +
                    '<tr><td> ' + returnObj.latestTime + ' </td></tr>'
                );
                $('#searchHistory table').append(
                    '<tr><td> ' + returnObj.companyName + ' (' + returnObj.symbol + ')</td></tr>'
                );

            }
        }
    };
    apiData.call(apiRequest);
    document.getElementById('tickerInputField').value = '';
    document.getElementById('tickerInputField').focus();
};
paintForm.call(cbReturn);