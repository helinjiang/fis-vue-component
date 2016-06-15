/**
 * navItem 导航菜单
 *
 * @param {String} href
 * @param {String} target
 * @param {Boolean} disabled
 * @param {Boolean} active
 * @param {Boolean} dropdown
 *
 */

import LinkMixin from '../_mixin/linkMixin';
import Anchor from '../anchor';

export default {
    template: __inline('main.html'),
    mixins: [LinkMixin],
    props: {
        active: {
            type: Boolean,
            default: false
        },
        dropdown: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Anchor
    }
}