import Vue from '/common/lib/vue'
import BaseMixin from '../_mixin/baseMixin.js'
import Button from '/components/bootstrap3/button'

export default Vue.extend({
    template: __inline('main.html'),
    mixins: [BaseMixin],
    components: {
        Button
    },
    methods: {
        clickButton() {
            alert('this is button');
        }
    }
});