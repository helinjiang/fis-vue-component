import Vue from '/common/lib/vue'
import VueRouter from '/common/lib/vue-router'
import {configRouter} from './route-config'

// Only Test
window.Vue = Vue;

export default {
    init() {
        // install router
        Vue.use(VueRouter);

        // create router
        const router = new VueRouter({
            // history: true,
            saveScrollPosition: true
        });

        // configure router
        configRouter(router);

        // boostrap the app
        const App = Vue.extend({});

        // now we can start the app!
        // router will create an instance of App and mount to
        // the element matching the selector #app.
        router.start(App, '#app');

        // just for debugging
        window.router = router;
    }
}
