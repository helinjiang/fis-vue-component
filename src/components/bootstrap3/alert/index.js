/**
 * alert 警告框
 *
 * @param bsStyle success,info,warning,danger
 *
 */

import BsMixin from '../_mixin/bsMixin';

export default {
    template: __inline('main.html'),
    mixins: [BsMixin],
    data() {
        return {
            tag: 'alert',
            classes: {}
        }
    }
}