import BaseMixin from '../_mixin/baseMixin.js'
import Button from '/components/bootstrap3/button'

export default {
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
};