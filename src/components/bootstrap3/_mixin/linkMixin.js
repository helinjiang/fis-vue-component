/**
 * 链接mixin
 */
export default {
    props: {
        'href': {
            type: String,
            default: 'javascript:;'
        },
        'target': {
            type: String
        },
        'disabled': {
            type: Boolean,
            default: false
        }
    }
};
