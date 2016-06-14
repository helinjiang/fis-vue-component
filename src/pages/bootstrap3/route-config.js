export function configRouter(router) {

    // normal routes
    router.map({
        '/404': {
            component: require('./not-found')
        },

        '/button': {
            component: require('./button')
        },

        '/buttonGroup': {
            component: require('./buttonGroup')
        },

        '/label': {
            component: require('./label')
        },

        '*': {
            component: require('./about')
        }
    });

}
