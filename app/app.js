import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;
App = Ember.Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver: Resolver
});

App.initializer({
	name: 'my-initializer',
    initialize: function(container, application) {
    	console.log("Container", container);
        console.log("RootElement", application.rootElement);
        /*if (application.rootElement !== '#ember-application') {
            application.reopen({
                rootElement: '#ember-application'
            });
        }*/
        application.reopen({
            ready: function() {
                Ember.debug("Application is ready");
            }
        });
        Ember.debug("Application is initializing");
        /*application.deferReadiness();
	window.startConfigurator = function(){
		application.advanceReadiness();
	};*/
    }
});

loadInitializers(App, config.modulePrefix);

export default App;