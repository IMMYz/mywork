'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var id = 1000;

exports.default = {
    data: function data() {
        return {
            data4: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        };
    },


    methods: {
        append: function append(data) {
            var newChild = { id: id++, label: 'testtest', children: [] };
            if (!data.children) {
                this.$set(data, 'children', []);
            }
            data.children.push(newChild);
        },
        remove: function remove(node, data) {
            var parent = node.parent;
            var children = parent.data.children || parent.data;
            var index = children.findIndex(function (d) {
                return d.id === data.id;
            });
            children.splice(index, 1);
        },
        renderContent: function renderContent(h, _ref) {
            var _this = this;

            var node = _ref.node,
                data = _ref.data,
                store = _ref.store;

            return h(
                'span',
                { style: 'flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;' },
                [h(
                    'span',
                    null,
                    [h(
                        'span',
                        null,
                        [node.label]
                    )]
                ), h(
                    'span',
                    null,
                    [h(
                        'el-button',
                        { style: 'font-size: 12px;', attrs: { type: 'text' },
                            on: {
                                'click': function click() {
                                    return _this.append(data);
                                }
                            }
                        },
                        ['Append']
                    ), h(
                        'el-button',
                        { style: 'font-size: 12px;', attrs: { type: 'text' },
                            on: {
                                'click': function click() {
                                    return _this.remove(node, data);
                                }
                            }
                        },
                        ['Delete']
                    )]
                )]
            );
        }
    }
};
