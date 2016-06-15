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

        '/panel': {
            component: require('./panel')
        },

        '/alert': {
            component: require('./alert')
        },

        '/row': {
            component: require('./row')
        },

        '/col': {
            component: require('./col')
        },

        '/dropdownButton': {
            component: require('./dropdownButton')
        },

        '/nav': {
            component: require('./nav')
        },

        '*': {
            component: require('./about')
        }
    });

}
