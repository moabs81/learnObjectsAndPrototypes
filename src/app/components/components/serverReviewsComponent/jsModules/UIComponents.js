'use strict';
require('../lessStyles/serverReviews.less');
//const updateViewStateMod = require('./updateViewState'), updateViews = updateViewStateMod.updateViewState();
exports.UIComponents = function () {
    //************************THE MAIN CONTAINER********************************************************************
    const buildTableContainer = function (propsObj, stateObj, cbReturn) {
        const headerProps = { //my children's properties
            headerText: propsObj.headerText,
            whichHeader: stateObj.whichHeader,
            whichDirection: stateObj.whichDirection,
            targetDiv: 'tableContainer'
        };
        const bodyProps = { //my children's properties
            data: stateObj.data,
            targetDiv: 'tableContainer'
        };
        $('#' + propsObj.targetDiv).append( //my UI responsibilities
            '<div class="componentContainer">' +
            '<div class="componentContainerTitle">' + propsObj.componentTitle + '</div>' +
            '<div class="tableContainer">' +
            '</div>' +
            '</div>'
        );
        buildTHeaderContainer(headerProps, function (result) { //call my children
            console.log(result);
        });
        buildTBodyContainer(bodyProps, function (result) { //call my children
            console.log(result);
        });
        cbReturn('Done building table container.'); //all done
    };
    //************************END OF THE MAIN CONTAINER********************************************************************    
    //************************THE HEADER********************************************************************
    const buildTHeaderContainer = function (propsObj, cbReturn) {
        $('.' + propsObj.targetDiv).append( //my UI responsibilities
            '<div class="tHeaderRow">' +
            '</div>'
        );
        propsObj.headerText.forEach(function (element, index) { //loop through my headerText property            
            const textProps = { //my children's properties
                headerText: element,
                targetDiv: 'tCol' + index
            };
            const buttonProps = { //my children's properties
                //(function() {if (propsObj.whichDirection == index) { return true } else { return false }})()                
                whichHeader: propsObj.whichHeader == index ? true : false,
                whichDirection: propsObj.whichDirection,
                targetDiv: 'tCol' + index
            };
            $('.tHeaderRow').append('<div class="tHeaderCell tCol' + index + '"></div>'); //my UI responsibilities            
            buildTHeaderText(textProps, function (result) { //call my children
                console.log(index + ' - ' + result);
            });
            buildTHeaderButton(buttonProps, function (result) { //call my children
                console.log(index + ' - ' + result);
            });
        });
        cbReturn('done building the header container'); //all done
    }; //************ END buildTHeaderContainer ****************************************    
    const buildTHeaderText = function (propsObj, cbReturn) {
        $('.' + propsObj.targetDiv).append( //my UI Responsibilities
            '<div class="tHeadertext">' +
            propsObj.headerText +
            '</div>'
        );
        cbReturn('done building the header text'); //all done
    }; //************ END buildTHeaderText ****************************************    
    const buildTHeaderButton = function (propsObj, cbReturn) {
        propsObj.activeSort = 'inactive'; //my children's properties *******THIS NEEDS TO BE OPTIMIZED        
        if (propsObj.whichHeader == true) {
            propsObj.activeSort = ' ' + propsObj.whichDirection;
        };
        $('.' + propsObj.targetDiv).append( //my UI responsibilities
            '<div class="tHeaderButton">' +
            '<span class = "tHeaderButtonSpan' + propsObj.activeSort + '">' + propsObj.activeSort + '</span>' +
            '</div>'
        );
        cbReturn('done building the header sort button'); //all done
    }; //************ END buildTHeaderButton ****************************************    
    //************************END OF THE HEADER*******************************************************************    
    //************************THE BODY********************************************************************
    const buildTBodyContainer = function (propsObj, cbReturn) {
        const buttonProps = { //my children's properties
            targetDiv: propsObj.targetDiv
        };
        propsObj.data.forEach(function (element, index) { //loop through my data property            
            const rowProps = { //my children's properties
                targetDiv: propsObj.targetDiv,
                path: element.path,
                name: element.name,
                steps: element.steps
            };
            buildTBodyRow(rowProps, function (result) { //call my chlidren
                console.log(index + ' - ' + result);
            });
        });
        buildTBodyMoreButton(buttonProps, function (result) { //call my children
            console.log(result);
        });
        cbReturn('done building the body content'); //all done
    }; //************ END buildTBodyContainer ****************************************    
    const buildTBodyRow = function (propsObj, cbReturn) {
        $('.' + propsObj.targetDiv).append( //my UI responsibilities
            '<div class="tBodyRow tBodyContentRow">' +
            '<div class="tBodyCell tCol0"><div class="tBodyCol0">' + propsObj.path + '</div></div>' +
            '<div class="tBodyCell tCol1"><div class="tBodyCol1Title">' + propsObj.name + '</div><div class="tBodyCol1Body">' + propsObj.steps + '</div></div>' +
            '</div>'
        );
        cbReturn('done building the content row'); //all done
    }; //************ END BuildTBodyRow ****************************************
    const buildTBodyMoreButton = function (propsObj, cbReturn) {
        $('.' + propsObj.targetDiv).append( //my UI responsibilities
            '<div class="tBodyRow tBodyButtonRow">' +
            '<div class="tBodyCell tCol0"></div>' +
            '<div class="tBodyCell tCol1">' +
            '</div>' +
            '</div>'
        );
        $('.tBodyButtonRow .tCol1').append('<button type="button" id="getMoreButton"><span></span>More!</button>');
        cbReturn('done building the content more button'); //all done
    }
    //************************END OF THE BODY********************************************************************    
    const returnMethods = {
        buildTableContainer: buildTableContainer
    };
    return returnMethods;
}