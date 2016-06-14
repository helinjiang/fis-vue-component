/**
 * col 列
 *
 */


export default {
    template: __inline('main.html'),
    props: {
        xs: {
            type: String
        },
        sm: {
            type: String
        },
        md: {
            type: String
        },
        lg: {
            type: String
        }
    },
    data(){
        return {
            classes: {}
        }
    },
    created(){
        if (!!this.xs) {
            this.classes['col-xs-' + this.xs] = true;
        }
        if (!!this.sm) {
            this.classes['col-sm-' + this.sm] = true;
        }
        if (!!this.md) {
            this.classes['col-md-' + this.md] = true;
        }
        if (!!this.lg) {
            this.classes['col-lg-' + this.lg] = true;
        }
    }
}