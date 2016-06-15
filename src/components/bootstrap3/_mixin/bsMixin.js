export default {
    props: {
        bsStyle: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'md'
        }
    },
    created: function () {
        var character = '-';
        var self = this;
        if (self.tag) {
            //默认添加tag class
            self.classes[self.tag] = true;
            //添加style，例如：btn-primary
            if (self.bsStyle) {
                var list = self.bsStyle.split(',');
                if (list.length === 0) {
                    self.classes[self.tag + character + list[0]] = true;
                } else {
                    list.forEach(function (style) {
                        self.classes[self.tag + character + style] = true;
                    })
                }

            }
            //大小，例如：btn-sm
            if (self.size && self.size !== 'md') {
                self.classes[self.tag + character + self.size] = true;
            }

        }
    }
};
