
export default {
    template: __inline('main.html'),
    components: {
        asyncPanel: (resolve)=>{
            require(['/components/test/async/asyncPanel'], function (main) {
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
};