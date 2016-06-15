import BaseMixin from '../_mixin/baseMixin'
import Bs3Nav from '/components/bootstrap3/nav'
import Bs3NavItem from '/components/bootstrap3/navItem'

import Bs3DropdownButton from '/components/bootstrap3/dropdownButton'
import Bs3DropdownMenu from '/components/bootstrap3/dropdownMenu'
import Bs3MenuItem from '/components/bootstrap3/menuItem'

export default {
    template: __inline('main.html'),
    mixins: [BaseMixin],
    components: {
        Bs3Nav,
        Bs3NavItem,
        Bs3DropdownButton,
        Bs3DropdownMenu,
        Bs3MenuItem
    }
};