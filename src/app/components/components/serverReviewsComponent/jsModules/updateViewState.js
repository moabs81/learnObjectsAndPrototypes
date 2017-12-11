'use strict';
exports.updateViewState = function () {
    const mockAPICall = function () { //mock API call - would really fetch data, but in this case is importing a test data module
        const dataMod = require('../../../testData/bddDatav4'),
            testData = dataMod.bddData();
        return testData;
    };
    const setComponentData = function (selectedUser, cbReturn) {
        const componentData = (mockAPICall())[0];
        var stepsArr = [],
            rowObj = {},
            dataArr = [],
            user = selectedUser;
        componentData.user[user].scenarios.forEach(function (element) {
            rowObj.name = element.name;
            rowObj.path = element.paths[0].name;
            element.paths[0].steps.forEach(function (element) {
                stepsArr.push(element.Given);
                stepsArr.push(element.When);
                stepsArr.push(element.Then);
            })
            rowObj.steps = stepsArr.join('');
            dataArr.push(rowObj);
            rowObj = {};
            if (element.paths[1]) {
                rowObj.name = element.name;
                rowObj.path = element.paths[1].name;
                element.paths[1].steps.forEach(function (element) {
                    stepsArr.push(element.Given);
                    stepsArr.push(element.When);
                    stepsArr.push(element.Then);
                })
                rowObj.steps = stepsArr.join('');
                dataArr.push(rowObj);
                rowObj = {};
            }
        });
        cbReturn(dataArr);
    };

    const sortDataArr = function (dataArr, sortCol, sortOrd, cbReturn) {
        const sortAsc = function () {
            console.log('ASC - sorting ' + sortCol + ' in order: ' + sortOrd);
            dataArr.sort(function (firstEl, secondEl) {
                if (firstEl[sortCol] < secondEl[sortCol]) {
                    return -1;
                };
                if (firstEl[sortCol] > secondEl[sortCol]) {
                    return 1;
                };
                return 0;
            });
        };
        const sortDec = function () {
            console.log('DEC - sorting ' + sortCol + ' in order: ' + sortOrd);
            dataArr.sort(function (firstEl, secondEl) {
                if (firstEl[sortCol] > secondEl[sortCol]) {
                    return -1;
                };
                if (firstEl[sortCol] < secondEl[sortCol]) {
                    return 1;
                };
                return 0;
            });
        };

        sortOrd == 'asc' ? sortAsc() : sortDec();

        cbReturn(dataArr);
    };

    const eventListeners = function () {
        const moreButtonEvent = function (e) {
            e.preventDefault();
            $('.tBodyContentRow:hidden').slice(0, 4).fadeIn('slow');
            if ($('.tBodyContentRow:hidden').length == 0) {
                console.log('no more hidden!');
                $('.tBodyButtonRow .tCol1').html('<button type="button" id="noMoreButton" style="position: relative; color: #f1f1f1; border-width: 0px; padding: 30px; background-color: rgb(247,61,61)" disabled>No More!</button>');
            };
        }
        var returnMethods = {
            moreButtonEvent: moreButtonEvent
        }
        return returnMethods;
    }

    const returnMethods = {
        setComponentData: setComponentData,
        eventListeners: eventListeners
    };
    return returnMethods;
}