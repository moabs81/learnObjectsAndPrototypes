'use strict';

require('./style.less');

import { apiData } from '../library/ajaxCalls';

import { paintForm } from '../library/book1';

const cbReturn = function(e) {
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
                console.log(returnObj);
                var resultsArr = [
                    ['Symbol', returnObj.symbol],
                    ['Company', returnObj.companyName],
                    ['Sector', returnObj.sector],
                    ['Price', returnObj.latestPrice],
                    ['Exchange', returnObj.primaryExchange],
                    ['Last Time', returnObj.latestTime]
                ];
                $('#ResultTable table').html('');
                resultsArr.forEach(element => { $('#ResultTable table').append('<tr><td> ' + element[0] + ' </td><td><span id="cover"></span><span id="content"> ' + element[1] + ' </span></td></tr>'); });
                $('#searchHistory table').prepend(
                    '<tr><td id="' + resultsArr[0][1] + '_Cell"> ' + resultsArr[1][1] + ' (' + resultsArr[0][1] + ')</td></tr>'
                );
                document.getElementById(resultsArr[0][1] + '_Cell').addEventListener('click', function(e) {
                    var target = e.srcElement.id.slice(0, -5);
                });

            }
        }
    };
    apiData.call(apiRequest);
    document.getElementById('tickerInputField').value = '';
    document.getElementById('tickerInputField').focus();
};
paintForm.call(cbReturn);