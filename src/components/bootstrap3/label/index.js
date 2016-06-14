/**
 * label 标签
 *
 * @param bsStyle default,primary,success,info,warning,danger
 *
 */

import BsMixin from '../_mixin/bsMixin';

export default {
    template: __inline('main.html'),
    mixins: [BsMixin],
    data() {
        return {
            tag: 'label',
            classes: {}
        }
    }
}