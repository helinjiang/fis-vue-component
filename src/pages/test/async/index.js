export default {
    template: __inline('main.html'),
    components: {
        asyncPanel: (resolve)=> {
            setTimeout(()=> {
                console.log('---begin---');
                require(['/components/test/async/asyncPanel'], function (main) {
                    console.log('=========main==========', main);
                    resolve(main);
                });
            }, 3000);
        }
    }
};