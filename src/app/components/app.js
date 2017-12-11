'use strict';
const pageLayoutMod = require('./components/pageLayout/jsModules/pageLayout'),
    pageLayout = pageLayoutMod.pageLayout();
const controlViewStateMod = require('./components/serverReviewsComponent/jsModules/controlViewState'),
    controller = controlViewStateMod.controller();
import tile from './components/pageLayout/lessStyles/imgs/paint2.jpg';
pageLayout.buildTableComponent(tile, function(result) {
    if (result == 'bddAppContainer') {
        controller.setInitialState(result, function(result) {
            console.log(result + ' with building application');
        });
    } else {
        console.log('whoops, something happened');
    }
});