/**
 * 下拉框按钮mixin
 */

import ButtonGroup from '../buttonGroup'
import Button from '../button'
import ButtonMixin from './buttonMixin'

export default {
    mixins: [ButtonMixin],

    props: {
        dropup: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            open: false,
            classes: {'dropup': false}
        }
    },

    components: {
        Button,
        ButtonGroup
    },

    created() {

        if (this.dropup) {
            this.classes['dropup'] = true;
        }

    },

}
