import BaseMixin from '../_mixin/baseMixin'
import Bs3Tab from '/components/bootstrap3/tab'
import Bs3TabItem from '/components/bootstrap3/tabItem'



export default {
    template: __inline('main.html'),
    mixins: [BaseMixin],
    components: {
        Bs3Tab,
        Bs3TabItem
    }
};