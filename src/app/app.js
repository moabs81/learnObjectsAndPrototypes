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
                var resultsArr = [
                    ['Symbol', returnObj.symbol],
                    ['Company', returnObj.companyName],
                    ['Sector', returnObj.sector],
                    ['Price', returnObj.latestPrice],
                    ['Exchange', returnObj.primaryExchange],
                    ['Last Time', returnObj.latestTime]
                ];
                $('#ResultTable table').html('');
                resultsArr.forEach(element => {
                    $('#ResultTable table').append('<tr><td> ' + element[0] + ' </td><td> ' + element[1] + ' </td></tr>');
                });
                $('#searchHistory table').prepend(
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