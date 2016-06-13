var Vue = require('/common/lib/vue');

var Button = require('/components/bootstrap3/button');
var MyComponent2 = Vue.extend(Button);
Vue.component('he-button', MyComponent2);

// 定义
var MyComponent = Vue.extend({
    template: '<div>A custom component!</div>'
})

// 注册
Vue.component('my-component', MyComponent);

window.app = new Vue({
    el: '#app',
    data:{
        test:'iam test'
    },
    // components: {
    //     Button
    // },
    ready: function () {

    }
});

