/**
 * button 按钮
 *
 * @param {String} type button,submit
 * @param {String} bsStyle default,primary,success,info,warning,danger,link
 * @param {String} size lg,xs,sm
 * @param {Boolean} disabled
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