import BaseMixin from '../_mixin/baseMixin'
import Bs3Alert from '/components/bootstrap3/alert'

export default {
    template: __inline('main.html'),
    mixins: [BaseMixin],
    components: {
        Bs3Alert
    }
};