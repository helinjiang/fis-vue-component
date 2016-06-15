/**
 * anchor 链接标签
 *
 * @param href 默认 'javascript:;'
 * @param target
 * @param disabled 默认 false
 * @param on-click
 *
 * 这个组件的好处是定义了disabled的时候，点击可以阻止跳转，除此之外，请用 a 标签直接使用
 *
 * 仅内部使用
 *
 */

import LinkMixin from '../_mixin/linkMixin';

export default {
    template: __inline('main.html'),
    mixins: [LinkMixin],
    props: {
        onClick: {
            type: Function,
            default: ()=> {
            }
        }
    },
    methods: {
        clickHandle(e){
            if (!this.href || this.href === 'javascript:;' || this.href === '#' || this.disabled) {
                e.preventDefault();
            }
            if (this.onClick && !this.disabled) {
                this.onClick(e);
            }
        }
    }
}