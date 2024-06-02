<template>
    <!-- 弹窗 -->
    <div v-show="showLeftViewSign === 1" class="home_left_bar"
        v-bind:class="{ homeLeftViewToLeft: homeLeftViewLeftActive, homeLeftViewToRight: homeLeftViewRightActive }"
        :style="{ left: homeLeftbarLeft + '%' }">
        <div class="home_left_bar_top">
            <div class="home_left_bar_top_title">实时状态</div>
            <div class="home_left_bar_top_main" id="home_left_view_bottom_echart">

            </div>
        </div>

        <div class="home_left_bar_bottom">
            <div class="home_left_bar_top_title">程度统计</div>
            <div class="home_left_bar_top_main" id="home_left_view_top_echart">

            </div>
        </div>

    </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    name: 'home_left_view',
    props: {
        showLeftViewSign: {
            type: Number,  //类型判断
            default: 1    //默认值
        }
    },
    data() {
        return {
            // 激活菜单选项
            active: 1,
            topBarTop: -8,
            homeLeftbarLeft: 5,
            homeLeftViewLeftActive: false,
            homeLeftViewRightActive: true,
            left_top_chart: null,
            left_bottom_chart: null
        }
    },
    methods: {
        init_left_top_echart() {
            let domEchart = document.getElementById('home_left_view_top_echart');
            domEchart.removeAttribute('_echarts_instance_');
            var echarts = require('echarts');
            this.left_top_chart = echarts.init(document.getElementById('home_left_view_top_echart'));
            
            var plantCap = [{
                name: '超高峰',
                value: '222'
            }, {
                name: '高峰',
                value: '115'
            }, {
                name: '小高峰',
                value: '113'
            }, {
                name: '正常',
                value: '95'
            }, {
                name: '小低峰',
                value: '92'
            }, {
                name: '低峰',
                value: '87'
            }];
            var datalist = [{
                offset: [56, 48],
                symbolSize: 110,
                // opacity: .95,
                color: 'rgba(73,188,247,.14)',

            }, {

                offset: [30, 70],
                symbolSize: 70,
                color: 'rgba(73,188,247,.14)'
            }, {
                offset: [0, 43],
                symbolSize: 60,
                color: 'rgba(73,188,247,.14)'

            }, {
                offset: [93, 30],
                symbolSize: 70,
                color: 'rgba(73,188,247,.14)'
            }, {
                offset: [26, 19],
                symbolSize: 65,
                color: 'rgba(73,188,247,.14)'
            }, {
                offset: [75, 75],
                symbolSize: 60,
                color: 'rgba(73,188,247,.14)'

            }];

            var datas = [];
            for (var i = 0; i < plantCap.length; i++) {
                var item = plantCap[i];
                var itemToStyle = datalist[i];
                datas.push({
                    name: item.value + '\n' + item.name,
                    value: itemToStyle.offset,
                    symbolSize: itemToStyle.symbolSize,
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: 14
                            }
                        }
                    },

                    itemStyle: {
                        normal: {
                            color: itemToStyle.color,
                            opacity: itemToStyle.opacity
                        }
                    },
                })
            }
            var option = {
                grid: {
                    show: false,
                    top: 10,
                    bottom: 10
                },

                xAxis: [{
                    gridIndex: 0,
                    type: 'value',
                    show: false,
                    min: 0,
                    max: 100,
                    nameLocation: 'middle',
                    nameGap: 5
                }],

                yAxis: [{
                    gridIndex: 0,
                    min: 0,
                    show: false,
                    max: 100,
                    nameLocation: 'middle',
                    nameGap: 30
                }],
                series: [{
                    type: 'scatter',
                    symbol: 'circle',
                    symbolSize: 120,
                    label: {
                        normal: {
                            show: true,
                            formatter: '{b}',
                            color: '#FFF',
                            textStyle: {
                                fontSize: '30'
                            }
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#F30'
                        }
                    },
                    data: datas
                }]

            };
            this.left_top_chart.setOption(option);
            var that = this;
            window.addEventListener("resize", function () {
                that.left_top_chart.resize();
            });
        },
        init_left_bottom_echart() {
            let domEchart = document.getElementById('home_left_view_bottom_echart');
            domEchart.removeAttribute('_echarts_instance_');
            var echarts = require('echarts');
            this.left_bottom_chart = echarts.init(document.getElementById('home_left_view_bottom_echart'));

            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },
                legend: {
                    right: 0,
                    top: 30,
                    height: 160,
                    itemWidth: 10,
                    itemHeight: 10,
                    itemGap: 10,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 12
                    },
                    orient: 'vertical',
                    data: ['正常', '异常', '警告', '中断']
                },
                calculable: true,
                series: [
                    {
                        name: ' ',
                        color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#7562c9', '#c96262', '#c25775', '#00b7be'],
                        type: 'pie',
                        radius: [30, 70],
                        center: ['35%', '50%'],
                        roseType: 'radius',
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },

                        lableLine: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },

                        data: [
                            { value: 75, name: '正常' },
                            { value: 5, name: '异常' },
                            { value: 15, name: '警告' },
                            { value: 5, name: '中断' },
                        ]
                    },
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            this.left_bottom_chart.setOption(option);
            var that = this;
            window.addEventListener("resize", function () {
                that.left_bottom_chart.resize();
            });
        }
    },
    mounted() {
        this.init_left_top_echart();
        this.init_left_bottom_echart();
    }
}
</script>

<style>
/* 左部菜单栏样式 */
.home_left_bar {
    position: absolute;
    /* left:0; */
    top: 120px;
    width: 450px;
    height: calc(100% - 200px);
    z-index: 900;
    /* pointer-events: none; */
}

.home_left_bar .menu-cover {
    width: 300px;
    height: 813px;
}

/* 收起菜单 */
.homeLeftViewToLeft {
    animation: homeleftview_to_left 1000ms;
    -moz-animation: homeleftview_to_left 1000ms;
    /* Firefox */
    -webkit-animation: homeleftview_to_left 1000ms;
    /* Safari 和 Chrome */
    -o-animation: homeleftview_to_left 1000ms;
    /* Opera */
}

.home_left_bar_top {
    width: 100%;
    height: 48%;
    background: url(@/assets/images/home_view_bg.png) no-repeat;
    background-size: 100% 100%;
}

.home_left_bar_bottom {
    margin-top: 1%;
    width: 100%;
    height: 48%;
    background: url(@/assets/images/home_view_bg.png) no-repeat;
    background-size: 100% 100%;
}

.home_left_bar_top_title {
    font-size: 16px;
    color: #FFFFFF;
    padding-left: 11%;
    padding-top: 6%;
}

.home_left_bar_top_main {
    width: 80%;
    height: 76%;
    margin: auto;
    margin-top: 4%;
}

@keyframes homeleftview_to_left {
    from {
        left: 0%;
    }

    to {
        left: -9%;
    }
}

@-moz-keyframes homeleftview_to_left {
    from {
        left: 0%;
    }

    to {
        left: -9%;
    }
}

@-webkit-keyframes homeleftview_to_left {
    from {
        left: 0%;
    }

    to {
        left: -9%;
    }
}

@-o-keyframes homeleftview_to_left {
    from {
        left: 0%;
    }

    to {
        left: -9%;
    }
}

/* 弹出菜单 */
.homeLeftViewToRight {
    animation: homeleftview_to_right 700ms;
    -moz-animation: homeleftview_to_right 700ms;
    /* Firefox */
    -webkit-animation: homeleftview_to_right 700ms;
    /* Safari 和 Chrome */
    -o-animation: homeleftview_to_right 700ms;
    /* Opera */
}

@keyframes homeleftview_to_right {
    from {
        left: -10%;
    }

    to {
        left: 5%;
    }
}

@-moz-keyframes homeleftview_to_right {
    from {
        left: -10%;
    }

    to {
        left: 5%;
    }
}

@-webkit-keyframes homeleftview_to_right {
    from {
        left: -10%;
    }

    to {
        left: 5%;
    }
}

@-o-keyframes homeleftview_to_right {
    from {
        left: -10%;
    }

    to {
        left: 5%;
    }
}
</style>