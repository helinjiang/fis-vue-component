import Vue from '/common/lib/vue'

// define some components
var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
});

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
});


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
            component: require('./not-found')
        },

        '/button': {
            component: require('./button')
        },

        // not found handler
        '*': {
            component: require('./about')
        }
    });

}
