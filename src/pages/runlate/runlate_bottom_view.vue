<template>
    <!-- 弹窗 -->
    <div v-show="showBottomViewSign === 1" class="runlate_bottom_bar"
        v-bind:class="{ runlateBottomViewToTop: runlateBottomViewToTopActive }"
        :style="{ bottom: runlateBottomBarBottom + '%' }">
        <div class="chart_view">
            <div class="chart_view_title">数量统计</div>
            <div class="chart_view_main" id="runlate_chart_view_echart1">
                <div class="navboxall">

                    <div class="sycm">
                        <ul class="clearfix">
                            <li>
                                <h2>200 / 222</h2>
                                <span>超高峰</span>
                            </li>
                            <li>
                                <h2>100 / 115</h2>
                                <span>高峰</span>
                            </li>
                            <li>
                                <h2>105 / 113</h2>
                                <span>小高峰</span>
                            </li>

                            <li>
                                <h2>89 / 95</h2>
                                <span>正常</span>
                            </li>
                            <li>
                                <h2>86 / 92</h2>
                                <span>小低峰</span>
                            </li>
                            <li>
                                <h2>80 / 90</h2>
                                <span>低峰</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="chart_view">
            <div class="chart_view_title">运行概览</div>
            <div class="chart_view_main" id="runlate_chart_view_echart2"></div>
        </div>
        <div class="chart_view">
            <div class="chart_view_title">达标统计</div>
            <div class="chart_view_main" id="runlate_chart_view_echart3"></div>
        </div>
        <div class="chart_view">
            <div class="chart_view_title">排行统计</div>
            <div class="chart_view_main" id="runlate_chart_view_echart4">
                <table class="table1" width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                        <tr>
                            <th scope="col">排名</th>
                            <th scope="col">类型</th>
                            <th scope="col">数量</th>
                            <th scope="col">正常率</th>
                        </tr>
                        <tr>
                            <td><span>1</span></td>
                            <td>超高峰</td>
                            <td>222<br></td>
                            <td>90%<br></td>
                        </tr>
                        <tr>
                            <td><span>2</span></td>
                            <td>高峰</td>
                            <td>115</td>
                            <td>95%</td>
                        </tr>

                        <tr>
                            <td><span>3</span></td>
                            <td>小高峰</td>
                            <td>113</td>
                            <td>98%</td>
                        </tr>
                        <tr>
                            <td><span>4</span></td>
                            <td>正常</td>
                            <td>95</td>
                            <td>90%</td>
                        </tr>
                        <tr>
                            <td><span>5</span></td>
                            <td>小低峰</td>
                            <td>92</td>
                            <td>90%</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
        

    </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    name: 'runlate_bottom_view',
    props: {
        showBottomViewSign: {
            type: Number,  //类型判断
            default: 1    //默认值
        }
    },
    data() {
        return {
            // 激活菜单选项
            active: 1,
            topBarTop: -8,
            runlateBottomBarBottom: 0,
            runlateBottomViewToTopActive: true,
            runlateBottomChart1: null,
            runlateBottomChart2: null
        }
    },
    methods: {
        initChartView1() {
            let domEchart = document.getElementById('runlate_chart_view_echart2');
            domEchart.removeAttribute('_echarts_instance_');
            //直接引用进来使用
            var echarts = require('echarts');
            // 基于准备好的dom，获取main节点init初始化echarts实例
            this.runlateBottomChart1 = echarts.init(document.getElementById('runlate_chart_view_echart2'));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },
                legend: {

                    top: '10%',
                    data: ['非常好', '很好', '良好', '一般', '不及格'],
                    icon: 'circle',
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                    }
                },
                calculable: true,
                series: [{
                    name: '',
                    color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#c96262'],
                    type: 'pie',
                    //起始角度，支持范围[0, 360]
                    startAngle: 0,
                    //饼图的半径，数组的第一项是内半径，第二项是外半径
                    radius: [51, 100],
                    //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                    center: ['50%', '35%'],

                    //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                    // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                    //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                    roseType: 'area',
                    //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            //  formatter: '{c}辆'
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                            length2: 1,
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
                        { value: 1, name: '非常好', },
                        { value: 4, name: '很好', },
                        { value: 5, name: '良好', },
                        { value: 6, name: '一般', },
                        { value: 9, name: '不及格', },
                        { value: 0, name: "", label: { show: false }, labelLine: { show: false } },
                        { value: 0, name: "", label: { show: false }, labelLine: { show: false } },
                        { value: 0, name: "", label: { show: false }, labelLine: { show: false } },
                        { value: 0, name: "", label: { show: false }, labelLine: { show: false } },
                        { value: 0, name: "", label: { show: false }, labelLine: { show: false } },
                    ]
                }]
            };
            // 使用刚指定的配置项和数据显示图表。
            this.runlateBottomChart1.setOption(option);
        },
        initChartView2() {
            let domEchart = document.getElementById('runlate_chart_view_echart3');
            domEchart.removeAttribute('_echarts_instance_');
            //直接引用进来使用
            var echarts = require('echarts');
            // 基于准备好的dom，获取main节点init初始化echarts实例
            this.runlateBottomChart2 = echarts.init(document.getElementById('runlate_chart_view_echart3'));

            // 颜色
            var lightBlue = {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(41, 121, 255, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(0, 192, 255, 1)'
                }],
                globalCoord: false
            }

            var option = {
                tooltip: {
                    show: false
                },
                grid: {
                    top: '0%',
                    left: '65',
                    right: '14%',
                    bottom: '0%',
                },
                xAxis: {
                    min: 0,
                    max: 100,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    }
                },
                yAxis: {
                    data: ['超高峰', '高峰', '小高峰', '正常'],
                    //offset: 15,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 14
                    }
                },
                series: [{
                    type: 'bar',
                    label: {
                        show: true,
                        zlevel: 10000,
                        position: 'right',
                        padding: 10,
                        color: '#49bcf7',
                        fontSize: 14,
                        formatter: '{c}%'

                    },
                    itemStyle: {
                        color: lightBlue
                    },
                    barWidth: '15',
                    data: [90, 80, 67, 99],
                    z: 10
                }, {
                    type: 'bar',
                    barGap: '-100%',
                    itemStyle: {
                        color: '#fff',
                        opacity: 0.1
                    },
                    barWidth: '15',
                    data: [100, 100, 100, 100],
                    z: 5
                }],
            };
            // 使用刚指定的配置项和数据显示图表。
            this.runlateBottomChart2.setOption(option);
        }
    },
    mounted() {
        this.initChartView1();
        this.initChartView2();
    }
}

</script>

<style>
/* 下部菜单栏样式 */
.runlate_bottom_bar {
    position: absolute;
    /* left:0; */
    bottom: 0px;
    width: 100%;
    height: 320px;
    z-index: 900;
    /* pointer-events: none; */
    background: url(@/assets/images/cotent_bg.png) no-repeat;
    background-size: 100% 100%;
}

.chart_view {
    width: 25%;
    height: 100%;
    border-left: none;
    float: left;
    background: url(@/assets/images/home_view_bg.png) no-repeat;
    background-size: 100% 100%;
}

.chart_view_title {
    font-size: 16px;
    color: #FFFFFF;
    padding-left: 11%;
    padding-top: 5%;
}

.chart_view_main {
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 4%;
}

.runlateBottomViewToTop {
    animation: runlate_bottom_to_top 1000ms;
    -moz-animation: runlate_bottom_to_top 1000ms;
    /* Firefox */
    -webkit-animation: runlate_bottom_to_top 1000ms;
    /* Safari 和 Chrome */
    -o-animation: runlate_bottom_to_top 1000ms;
    /* Opera */
}

@keyframes runlate_bottom_to_top {
    from {
        bottom: -300px;
    }

    to {
        bottom: 0px;
    }
}

@-moz-keyframes runlate_bottom_to_top {
    from {
        bottom: -300px;
    }

    to {
        bottom: 0px;
    }
}

@-webkit-keyframes runlate_bottom_to_top {
    from {
        bottom: -300px;
    }

    to {
        bottom: 0px;
    }
}

@-o-keyframes runlate_bottom_to_top {
    from {
        bottom: -300px;
    }

    to {
        bottom: 0px;
    }
}


.table1 th {
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    font-size: 16px;
    color: rgba(255, 255, 255, .6);
    font-weight: normal;
    padding: 0 0 10px 0;
}

.table1 td {
    font-size: 16px;
    color: rgba(255, 255, 255, .4);
    padding: 15px 0 0 0;
}

.table1 span {
    width: 24px;
    height: 24px;
    border-radius: 3px;
    display: block;
    background: #878787;
    color: #fff;
    line-height: 24px;
    text-align: center;
}

.table1 tr:nth-child(2) span {
    background: #ed405d
}

.table1 tr:nth-child(3) span {
    background: #f78c44
}

.table1 tr:nth-child(4) span {
    background: #49bcf7
}

.navboxall {
    height: calc(100% - 30px);
}

.num,
.zhibiao {
    height: 100%;
    width: 50%;
}

.zb1,
.zb2,
.zb3 {
    float: left;
    width: 33.3333%;
    height: 100%;
}

#zb1,
#zb2,
#zb3 {
    height: calc(100% - 30px);
}

.zhibiao span {
    padding-top: 20px;
    display: block;
    text-align: center;
    color: #fff;
    font-size: 16px;
}

.num {
    padding-right: 20px;
}

.numbt {
    font-size: 24px;
    color: #fff;
    padding-top: 14px;
}

.numbt span {
    font-size: 18px;
    padding-left: 10px;
    color: #fff;
}

.numtxt {
    color: #fef000;
    font-size: 60px;
    font-family: arial;
    border-top: 1px solid rgba(255, 255, 255, .1);
    border-bottom: 1px solid rgba(255, 255, 255, .1);
    padding: 10px 0;
    margin: 18px 0;
    font-weight: bold;
    letter-spacing: 2px;
}

.sycm ul 

.sycm li {
    text-align: center;
    padding: 10px 0;
    position: relative;
    float: left;
    width: 50%;
    padding: 15px 0;
}

.sycm ul li:nth-child(odd):before {
    position: absolute;
    content: "";
    height: 30%;
    width: 1px;
    background: rgba(255, 255, 255, .2);
    right: 0;
    top: 30%;
}

/* 青岛研锦网络科技有限公司   版权所有*/
.sycm li h2 {
    font-size: 20px;
    color: #c5ccff;
}

.sycm li span {
    font-size: 16px;
    color: #fff;
    opacity: .5;
}

.sycm p {
    border: 1px solid rgba(255, 255, 255, .3);
    color: rgba(255, 255, 255, .6);
    text-align: center;
    margin: 10px;
    border-radius: 5px;
    padding: 8px;
    position: relative;
}

.sycm p:before {
    content: "";
    position: absolute;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid rgba(255, 255, 255, .3);
    bottom: -8px;
    left: 49%
}</style>