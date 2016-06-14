import BaseMixin from '../_mixin/baseMixin'
import Bs3Row from '/components/bootstrap3/row'
import Bs3Col from '/components/bootstrap3/col'

export default {
    template: __inline('main.html'),
    mixins: [BaseMixin],
    components: {
        Bs3Row,
        Bs3Col
    }
};