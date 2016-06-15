/**
 * tab 选选项卡
 *
 * @param {Function} onSelect 标签点击事件
 * 编译结束和 $el 第一次插入文档之后调用，遍历content内部的tab项，
 * 根据name属性，动态添加标签导航列表，并根据序列号（$index）切换
 */

import Vue from '/common/lib/vue'
import MyNav from '../nav'
import NavItem from '../navItem'
import TabItem from '../tabItem';

export default {
    template: __inline('main.html'),
    props: {
        onSelect: {
            type: Function
        }
    },
    data() {
        return {
            tabList: [],
            count: 0,
            activeIndex: 0,
            disabledList: []
        }
    },
    methods: {
        switchTab(activeIndex){
            let self = this;
            if (activeIndex === self.activeIndex) return;
            if (self.disabledList.indexOf(activeIndex) > -1)return;

            if (this.onSelect) {
                this.onSelect(self.tabList[activeIndex]);
            }
            let prevIndex = self.activeIndex;
            self.tabList[activeIndex].setActive();

            self.tabList[prevIndex].animateOut();

            Vue.nextTick(()=> {
                //reflow
                self.tabList[activeIndex].$el.offsetWidth;
                self.tabList[activeIndex].animateIn();
            });

            this.activeIndex = activeIndex;

        },
        addItem(vItem){
            if (vItem.disabled) {
                this.disabledList.push(this.count)
            }
            this.tabList.push(vItem);
            this.count++;
        }
    },
    components: {
        MyNav,
        NavItem,
        TabItem
    },
    ready() {
        if (this.tabList[this.activeIndex]) {
            this.tabList[this.activeIndex].setActive();
            this.tabList[this.activeIndex].animateIn();
        }
    }
}