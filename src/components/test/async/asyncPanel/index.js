/**
 * 异步的方式引入其css文件
 * https://github.com/fex-team/mod
 */
require.loadCss ({url: __uri('./main.css')});

/**
 * 如果该css文件不大，也可以选择将css和其他文件一起打包，提前下载，只需要申明@require main.css即可。
 * http://fis.baidu.com/fis3/docs/user-dev/require.html
 */

export default {
    template: __inline('main.html'),
    data() {
        return {
            name: 'God'
        }
    }
}