export default {
    methods: {
        highlightCode() {
            $('pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
        }
    },
    ready() {
        this.highlightCode();
    }
};
