/**
 * button 按钮
 *
 * @param type button,submit
 * @param bsStyle default,primary,success,info,warning,danger,link
 * @param size lg,xs,sm
 * @param disabled
 *
 */

import BsMixin from '../_mixin/bsMixin';

export default {
    template: __inline('main.html'),
    mixins: [BsMixin],
    props: {
        'type': {
            type: String,
            default: "button"
        },
        'disabled': {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            tag: 'btn',
            classes: {}
        }
    }
}