import BaseMixin from '../_mixin/baseMixin.js'
import Bs3ButtonGroup from '/components/bootstrap3/buttonGroup'
import Bs3Button from '/components/bootstrap3/button'

export default {
    template: __inline('main.html'),
    mixins: [BaseMixin],
    components: {
        Bs3ButtonGroup,
        Bs3Button
    },
    methods: {
        clickButton() {
            alert('this is button');
        }
    }
};