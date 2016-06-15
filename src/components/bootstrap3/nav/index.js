/**
 * nav 导航
 *
 * @param {String} bsStyle tabs,pills
 * @param {Boolean} justified
 * @param {Boolean} stacked
 *
 */

// import BsMixin from '../_mixin/bsMixin';

export default {
    template: __inline('main.html'),
    // mixins: [BsMixin],
    props: {
        bsStyle: {
            type: String,
            default: 'tabs'
        },
        justified: {
            type: Boolean,
            default: false
        },
        stacked: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            tag: 'nav',
            classes: {}
        }
    },
    created() {
        if (this.bsStyle && !this.stacked) {
            this.classes[this.tag + '-' + this.bsStyle] = true;
        }
        if (this.justified) {
            this.classes[this.tag + '-justified'] = true;
        }
        if (this.stacked) {
            this.classes[this.tag + "-stacked"] = true;
            this.classes[this.tag + '-pills'] = true;
        }
    }
}