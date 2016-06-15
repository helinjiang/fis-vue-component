/**
 * 下拉框按钮mixin
 */

import ButtonGroup from '../buttonGroup'
import Button from '../button'
import ButtonMixin from './buttonMixin'

import Vue from '/common/lib/vue'

const _ = Vue.util;

export default {
    mixins: [ButtonMixin],

    props: {
        dropup: {
            type: Boolean,
            default: false
        },
        dropdown: {
            type: Boolean,
            default: true
        },
        isShow: {
            type: Function
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            open: false,
            classes: {'dropup': false, 'dropdown': true, 'open': false}
        }
    },

    components: {
        Button,
        ButtonGroup
    },

    methods: {
        toggleOpen(e) {
            if (this.disabled) {
                // disabled 状态时，一定要处理下这里，不然a标签会跳转
                if (e){
                    e.preventDefault();
                }

                return;
            }

            this.open = !this.open;
            this.classes['open'] = this.open;

            if (this.isShow) {
                this.isShow(this.open);
            }
        }
    },

    created() {

        if (this.dropup) {
            this.classes['dropup'] = true;
        }
        if (this.dropdown) {
            this.classes['dropdown'] = false;
        }

    },

    ready() {
        let self = this;
        //失去焦点后隐藏
        _.on(window, "click", (e)=> {
            if (self.open && self.$el && !self.$el.nextSibling.contains(e.target)) {
                self.toggleOpen();
            }
        });
    },

    beforeDestroy() {
        _.off(window, "click");
    }
}
