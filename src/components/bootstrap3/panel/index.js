/**
 * panel 面板
 *
 * slot 分发：panel-header (panel-body) panel-extend
 *
 * @param bsStyle default,primary,success,info,warning,danger
 *
 * 目前只支持同时包含 panel-header 和 panel-body 的场景，后续也考虑是否支持：
 * 1. 只有 panel-body 的场景
 * 2. 同时包含 panel-footer 和 panel-body 的场景
 * 3. 三者都包含的场景
 */

import BsMixin from '../_mixin/bsMixin';

export default {
    template: __inline('main.html'),
    mixins: [BsMixin],
    data(){
        return {
            tag: 'panel',
            classes: {}
        }
    }
}