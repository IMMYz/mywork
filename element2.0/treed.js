'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var id = 1000;

exports.default = {
    data: function data() {
        var numberValid = function numberValid(rule, value, callback) {
            if (!value) {
                callback();
            }
            var regExp = /^[1-9]\d*$/;
            if (regExp.test(value) === false) {
                callback(new Error('请填写正确的数字'));
            } else {
                callback();
            }
        };
        return {
            isAppend: true,
            rules: {
                name: [{ required: true, message: '请输入名字', trigger: 'blur' }],
                boughtNum: [{ validator: numberValid, trigger: 'blur' }]
            },
            isFirst: false,
            personDetail: {
                name: '',
                id: '',
                idcard: '',
                boughtNum: '',
                subsBoughtNum: '',
                sum: ''
            },
            data4: [{
                id: 1,
                name: '一级 1',
                nameBought: '一级 1(100)',
                idcard: '530102199208171136',
                boughtNum: '100',
                subsBoughtNum: '50',
                sum: '650',
                children: [{
                    id: 4,
                    name: '二级 1-1',
                    nameBought: '一级 1(300)',
                    idcard: '530102199208171136',
                    boughtNum: '300',
                    subsBoughtNum: '50',
                    sum: '350',
                    children: [{
                        id: 9,
                        name: '三级 1-1-1',
                        nameBought: '三级 1-1-1()',
                        idcard: '',
                        boughtNum: '',
                        subsBoughtNum: '',
                        sum: ''
                    }, {
                        id: 10,
                        name: '三级 1-1-2',
                        nameBought: '三级 1-1-2()',
                        idcard: '',
                        boughtNum: '',
                        subsBoughtNum: '',
                        sum: ''
                    }]
                }]
            }, {
                id: 2,
                name: '一级 2',
                nameBought: '三级 2()',
                idcard: '',
                boughtNum: '',
                subsBoughtNum: '',
                sum: '',
                children: [{
                    id: 5,
                    name: '二级 2-1',
                    nameBought: '三级 2-1()',
                    idcard: '',
                    boughtNum: '',
                    subsBoughtNum: '',
                    sum: ''
                }, {
                    id: 6,
                    name: '二级 2-2',
                    nameBought: '三级 2-2()',
                    idcard: '',
                    boughtNum: '',
                    subsBoughtNum: '',
                    sum: ''
                }]
            }, {
                id: 3,
                name: '一级 3',
                nameBought: '三级 3()',
                idcard: '',
                boughtNum: '',
                subsBoughtNum: '',
                sum: '',
                children: [{
                    id: 7,
                    name: '二级 3-1',
                    nameBought: '三级 3-1()',
                    idcard: '',
                    boughtNum: '',
                    subsBoughtNum: '',
                    sum: ''
                }, {
                    id: 8,
                    name: '二级 3-2',
                    nameBought: '三级 3-2()',
                    idcard: '',
                    boughtNum: '',
                    subsBoughtNum: '',
                    sum: ''
                }]
            }],
            currentData: '',
            defaultProps: {
                children: 'children',
                label: 'nameBought'
            }
        };
    },


    methods: {
        save: function save(data) {
            data.name = this.personDetail.name;
            data.idcard = this.personDetail.idcard;
            data.sum = this.personDetail.sum;
            data.subsBoughtNum = this.personDetail.subsBoughtNum;
            data.boughtNum = this.personDetail.boughtNum;
        },
        appendClick: function appendClick(data) {
            this.isFirst = true;
            this.isAppend = true;
            this.currentData = data;
            this.personDetail = {
                name: '',
                id: '',
                idcard: '',
                boughtNum: '',
                subsBoughtNum: '',
                sum: ''
            };
        },
        append: function append(data) {
            var newChild = {
                id: '',
                treeid: treeid++,
                name: this.personDetail.name,
                nameBought: this.personDetail.name + '(' + this.boughtNum + ')',
                idcard: this.personDetail.idcard,
                boughtNum: this.personDetail.boughtNum,
                subsBoughtNum: this.personDetail.subsBoughtNum,
                sum: this.personDetail.sum,
                children: []
            };
            if (!data.children) {
                this.$set(data, 'children', []);
            }
            data.children.push(newChild);
        },
        showDetail: function showDetail(data) {
            this.isFirst = true;
            this.isAppend = false;
            this.currentData = data;
            this.personDetail.name = data.name;
            this.personDetail.idcard = data.idcard;
            this.personDetail.sum = data.sum;
            this.personDetail.subsBoughtNum = data.subsBoughtNum;
            this.personDetail.boughtNum = data.boughtNum;
        },
        remove: function remove(node, data) {
            var parent = node.parent;
            var children = parent.data.children || parent.data;
            var index = children.findIndex(function (d) {
                return d.treeid === data.treeid;
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
                        { style: 'font-size: 12px;', 'class': 'glyphicon glyphicon-search', attrs: { type: 'text' },
                            on: {
                                'click': function click() {
                                    return _this.showDetail(data);
                                }
                            }
                        },
                        []
                    ), h(
                        'el-button',
                        { style: 'font-size: 12px;', 'class': 'glyphicon glyphicon-plus', attrs: { type: 'text' },
                            on: {
                                'click': function click() {
                                    return _this.appendClick(data);
                                }
                            }
                        },
                        []
                    ), h(
                        'el-button',
                        { style: 'font-size: 12px;', 'class': 'glyphicon glyphicon-arrow-up', directives: [{
                                name: 'v-if',
                                value: '!isAppend'
                            }],
                            attrs: { type: 'text' },
                            on: {
                                'click': function click() {
                                    return _this.addUpMember(data);
                                }
                            }
                        },
                        []
                    ), h(
                        'el-button',
                        { style: 'font-size: 12px;', 'class': 'glyphicon glyphicon-trash', attrs: { type: 'text' },
                            on: {
                                'click': function click() {
                                    return _this.remove(node, data);
                                }
                            }
                        },
                        []
                    )]
                )]
            );
        }
    }
};
