import Vue from '/common/lib/vue'

// define some components
var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
});

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
});

var NotFound = require('./not-found');

export function configRouter(router) {

    // normal routes
    router.map({
        '/foo': {
            component: Foo
        },

        '/bar': {
            component: Bar
        },

        '/404': {
            component: NotFound
        },

        // not found handler
        '*': {
            component: require('./not-found')
        }
    });

}
