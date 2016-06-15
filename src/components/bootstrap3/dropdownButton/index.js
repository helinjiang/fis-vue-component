/**
 * dropdownButton 按钮式下拉菜单
 *
 * @param {String} bsStyle default,primary,success,info,warning,danger
 * @param {String} lg,xs,sm
 *
 * @param {Boolean} dropup 向上弹出菜单，默认 false
 * @param {Boolean} disabled 是否为禁用，默认 false。禁用之后按钮式下拉菜单将置灰
 * @param {Boolean} split 是否为分裂式按钮下拉菜单，默认 false
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
        }
    }
}