require.resourceMap({
    res: {
        asyncPanel: {
            url: __uri('/components/test/async/asyncPanel'),
            // deps: ['asyncPanel_css'],
            // isMod: false
        },
        asyncPanel_css: {
            url: __uri('/components/test/async/asyncPanel/main.scss'),
            deps: [],
            type: 'css'
        }
    },
    pkg: {}
});

export default {
    template: __inline('main.html'),
    components: {
        asyncPanel: (resolve)=> {
            setTimeout(()=> {
                console.log('---begin-3--');
                // require(['/components/test/async/asyncPanel'], function (main) {
                require(['asyncPanel'], function (main) {
                    console.log('=========main==========', main);
                    resolve(main);
                });
            }, 3000);
        }
    }
};