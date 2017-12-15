'use strict';

require('./style.less');

import {
    apiData
} from '../library/ajaxCalls';

import {
    paintForm
} from '../library/book1';

let ticker;

const cbReturn = function (e) {
    e.preventDefault();
    ticker = e.srcElement.parentElement.childNodes[2].value;

    const apiRequest = {
        baseURI: 'https://api.iextrading.com/1.0',
        searchReq: '/stock/' + ticker + '/quote',
        method: 'GET',
        success: function () {
            //console.log(this);
            $('#alertBanner').html(' ');
            if (this.status == 404) {
                $('#alertBanner').html('404 ERROR - ' + this.statusText);
            } else {
                const returnObj = JSON.parse(this.response);
                console.log(returnObj);
                const resultsArr = [
                    ['Symbol', returnObj.symbol],
                    ['Company', returnObj.companyName],
                    ['Sector', returnObj.sector],
                    ['Price', returnObj.latestPrice],
                    ['Exchange', returnObj.primaryExchange],
                    ['Last Time', returnObj.latestTime]
                ];
                $('#ResultTable table').html('');
                resultsArr.forEach(element => {
                    $('#ResultTable table').append('<tr><td> ' + element[0] + ' </td><td><span id="cover"></span><span id="content"> ' + element[1] + ' </span></td></tr>');
                });
                $('#searchHistory table').prepend(
                    '<tr><td id="' + resultsArr[0][1] + '_Cell"> ' + resultsArr[1][1] + ' (' + resultsArr[0][1] + ')</td></tr>'
                );
                document.getElementById(resultsArr[0][1] + '_Cell').addEventListener('click', function (e) {
                    const target = e.srcElement.id.slice(0, -5);
                });

            }
        }
    };
    const branchAPIReq = {
        baseURI: 'http://localhost:3000',
        searchReq: '/branches?branchName=' + ticker.substring(7),
        method: 'GET',
        success: function () {
            const returnObj = JSON.parse(this.response);
            $('#alertBanner').html(' ');
            if (returnObj.length == 0) {
                $('#alertBanner').html('Sorry, ' + ticker.substring(7) + ' does not appear to be a branch.');
            } else {
                const resultsArr = [
                    ['Branch Number', returnObj[0].branchNumber],
                    ['Branch Name', returnObj[0].branchName],
                    ['Phone Number', returnObj[0].primaryPhone]
                ];
                $('#ResultTable table').html('');
                resultsArr.forEach(element => {
                    $('#ResultTable table').append('<tr><td> ' + element[0] + ' </td><td><span id="cover"></span><span id="content"> ' + element[1] + ' </span></td></tr>');
                });
                $('#searchHistory table').prepend(
                    '<tr><td id="' + resultsArr[0][1] + '_Cell"> ' + resultsArr[1][1] + ' (' + resultsArr[0][1] + ')</td></tr>'
                );
            }
        }
    };

    if ((/Branch:/).test(ticker) == true) {
        apiData.call(branchAPIReq);
    } else {
        (/[A-Za-z]/).test(ticker) ? apiData.call(apiRequest) : console.log('nope, not a valid symbol');
    };
    document.getElementById('tickerInputField').value = 'Branch:';
    document.getElementById('tickerInputField').focus();
};
paintForm.call(cbReturn);

const localAPI = {
    baseURI: 'http://localhost:3000',
    searchReq: '/branches?branchName=King',
    method: 'GET',
    success: function () {
        const returnObj = JSON.parse(this.response);
        console.log(returnObj);
    }
};

apiData.call(localAPI);

const myInit = {
    method: 'GET'
};

fetch('http://localhost:3000/branches', myInit)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });