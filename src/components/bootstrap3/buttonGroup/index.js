/**
 * buttonGroup 按钮组
 *
 * @param size  xs,sm,lg
 * @param algin vertical,justified
 *
 */

export default {
    template: __inline('main.html'),
    props: {
        'size': {
            type: String
        },
        'align': {
            type: String
        }
    },
    data(){
        return {
            classes: "btn-group"
        };
    },
    computed: {
        bSize: function () {
            return this.size || null;
        },
        bAlign: function () {
            return this.align || null;
        }
    },
    created(){
        if (this.bAlign) {
            this.classes += " btn-group-" + this.bAlign;
        }
        if (this.bSize) {
            this.classes += " btn-group-" + this.bSize;
        }
    }
}