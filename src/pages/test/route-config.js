export function configRouter(router) {

    // normal routes
    router.map({
        '/async': {
            component: require('./async')
        },

        '*': {
            component: require('./about')
        }
    });

}
