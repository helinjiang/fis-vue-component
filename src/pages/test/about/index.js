var Vue = require('/common/lib/vue');
// import Bs3Button from '/components/bootstrap3/button'

module.exports = Vue.extend({
    template: __inline('main.html'),
    components: {
        test: (resolve)=>{
            require(['/components/bootstrap3/buttonAsync'], function (main) {
                console.log('=========main==========', main);
                resolve(main);
            });
        }
    },
    ready: function () {
        console.log('--about--ready');
        // setTimeout(()=> {
        //     require(['/components/bootstrap3/buttonAsync'], function (main) {
        //         console.log('=========main==========', main);
        //     });
        // }, 3000);
    }
});