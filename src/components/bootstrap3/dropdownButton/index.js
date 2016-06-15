/**
 * dropdownButton 下拉按钮
 *
 * @param {String} bsStyle default,primary,success,info,warning,danger
 * @param {String} lg,xs,sm
 *
 * @param {Boolean} dropup 向上弹出菜单
 * @param {Boolean} dropdown 向下弹出菜单 默认值
 * @param {Boolean} disabled
 * @param {Boolean} split 是否为分裂式按钮下拉菜单，默认 false
 * @param {Function} splitBtnClick split模式时，大按钮的click事件
 *
 *
 *
 */

import MenuButtonMixin from '../_mixin/menuButtonMixin';

export default {
    template: __inline('main.html'),
    mixins: [MenuButtonMixin],
    props: {
        split: {
            type: Boolean,
            default: false
        },
        splitBtnClick: {
            type: Function,
            default: ()=>{}
        }
    },
    methods: {
        toggleOpen(e) {
            console.log('--in2--');
            if (this.disabled) {
                // disabled 状态时，一定要处理下这里，不然a标签会跳转
                e && e.preventDefault();
                return;
            }

            // split=true时，只有箭头按钮才打开菜单
            if (e && this.split && !this._isToggleElem(e.target)) {
                e.preventDefault();
                return;
            }

            this.open = !this.open;
            this.classes['open'] = this.open;

            if (this.isShow) {
                this.isShow(this.open);
            }
        },

        _isToggleElem(elem) {

            // 当前元素就是toggle
            if (elem && this._isToggleClassName(elem.className)) {
                return true;
            }

            // 查看当前元素的父元素
            if (elem && elem.parentNode && this._isToggleClassName(elem.parentNode.className)) {
                return true;
            }

            return false;
        },

        _isToggleClassName(className) {
            return className && className.indexOf('dropdown-toggle') > -1;
        }

    },
}