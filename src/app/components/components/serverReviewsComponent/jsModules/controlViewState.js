'use strict';
const UIComponentsMod = require('./UIComponents'),
    UIComponents = UIComponentsMod.UIComponents();
const updateViewStateMod = require('./updateViewState'),
    updateView = updateViewStateMod.updateViewState();
exports.controller = function() {
    //************************************************************
    var appState = { //entire application state store        *
        propsObj: { //                                       *
            componentTitle: 'BDD Scenarios', //              *
            headerText: ['path', 'name'] //                  *
        }, //                                                *
        stateObj: { //                                       *
            whichHeader: 0, //                               *
            whichDirection: 'asc' //                         *
        } //                                                 *
    }; //                                                    *
    //************************************************************
    const setInitialState = function(targetDiv, cbReturn) {
        appState.propsObj.targetDiv = targetDiv;
        updateView.setComponentData('1', function(result) {
            appState.stateObj.data = result;
            UIComponents.buildTableContainer(appState.propsObj, appState.stateObj, function(result) {
                console.log(result);
            });
            eventListenersOnTableContainer(function(result) {
                console.log(result);
            })
        });
    };
    const eventListenersOnTableContainer = function(cbReturn) {
        const setInitialView = function() {
            $('.tBodyContentRow').slice(0, 4).fadeIn('fast');
            setButtonEvent();
            setSortEvent();
        };

        const setSortEvent = function() {
            for (var i = 0; i < document.getElementsByClassName('tHeaderButtonSpan').length; i++) {
                document.getElementsByClassName('tHeaderButton')[i].addEventListener('click', function(e) {
                    componentFunctions.sortEvent(e);
                });
            };
        };

        const doStuffWithSort = function(e) {
            console.log(e);
            console.log(e.srcElement.classList[1]);
            console.log(e.path[2].childNodes[0].innerText);
        };

        const setButtonEvent = function() {
            document.getElementById('getMoreButton').addEventListener('click', function(e) {
                updateView.eventListeners().moreButtonEvent(e);
            });
        };
        setInitialView();
        cbReturn('done');
    };
    const returnMethods = {
        setInitialState: setInitialState
    };
    return returnMethods;
};