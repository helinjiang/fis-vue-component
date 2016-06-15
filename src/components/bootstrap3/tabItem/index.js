/**
 * tabItem 选项卡
 *
 * @param {String} title 标题
 * @param {Boolean} disabled
 *
 */

export default {
    template: __inline('main.html'),
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            validator: (value)=> {
                return value.trim() != ''
            }
        }
    },
    data() {
        return {
            classes: []
        }
    },
    methods: {
        setActive(){
            this.classes.push('active');
        },
        animateIn(){
            this.classes.push('in');
        },
        animateOut(){
            this.classes.splice(0, 2);
            this.classes = [];
        }
    },
    created() {
        this.$parent.addItem(this);
    }
}