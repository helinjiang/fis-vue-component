import Vue from '/common/lib/vue'

import Button from '/components/bootstrap3/button'

export default Vue.extend({
    template: __inline('main.html'),
    data() {
        return {
            styleList: ['default', "primary", "success", "info", "warning", "danger"]
        }
    },
    components: {
        Button
    },
    methods: {
        clickButton() {
            alert('this is button');
        }
    },
    ready() {

    }
});