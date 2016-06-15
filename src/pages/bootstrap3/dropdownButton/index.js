import BaseMixin from '../_mixin/baseMixin'
import Bs3DropdownButton from '/components/bootstrap3/dropdownButton'
import Bs3DropdownMenu from '/components/bootstrap3/dropdownMenu'
import Bs3MenuItem from '/components/bootstrap3/menuItem'

export default {
    template: __inline('main.html'),
    mixins: [BaseMixin],
    components: {
        Bs3DropdownButton,
        Bs3DropdownMenu,
        Bs3MenuItem
    },
    data: ()=> {
        return {
            styleList: ['default', 'primary', 'success', 'info', 'warning', 'danger'],
            sizeList: ['lg', '', 'sm', 'xs']
        }
    },
    methods: {
        testAction() {
            alert('Action Clicked');
        },
        splitModeClick() {
            alert('splitModeClick Clicked');
        }
    }
};