/**
 * MenuItem 列表下的子菜单链接
 *
 * @param href 默认 'javascript:;'
 * @param target
 * @param disabled 默认 false
 * @param header 默认 false
 * @param divider 默认 false
 *
 */

import LinkMixin from '../_mixin/linkMixin';
import Anchor from '../anchor';

export default {
    template: __inline('main.html'),
    mixins: [LinkMixin],
    props: {
        header: {
            type: Boolean,
            default: false
        },
        divider: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Anchor
    }
}