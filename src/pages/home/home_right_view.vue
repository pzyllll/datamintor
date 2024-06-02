<template>
    <!-- 弹窗 -->
    <div v-show="showRightViewSign === 1" class="home_right_bar"
        v-bind:class="{ homeRightViewToLeft: homeRightViewLeftActive, homeRightViewToRight: homeRightViewRightActive }"
        :style="{ right: homeRightbarLeft + '%' }">
        <div class="home_right_bar_top">
            <div class="home_right_bar_top_title">数量统计</div>
            <div class="home_right_bar_top_main" id="home_right_view_top_echart">
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
                            <td>一般</td>
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

        <div class="home_right_bar_bottom">
            <div class="home_right_bar_top_title">设备统计</div>
            <div class="home_right_bar_top_main" id="home_right_view_bottom_echart">

            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    name: 'home_right_view',
    props: {
        showRightViewSign: {
            type: Number,  //类型判断
            default: 1    //默认值
        }
    },
    data() {
        return {
            // 激活菜单选项
            active: 1,
            topBarTop: -8,
            homeRightbarLeft: 5,
            homeRightViewLeftActive: true,
            homeRightViewRightActive: false,
        }
    },
    methods: {
        init_bottom_echart() {
            var echarts = require('echarts');
            var myChart = echarts.init(document.getElementById('home_right_view_bottom_echart'));
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
                    data: ['数据采集器', '摄像头', '路由器', '电源控制器', '监控单元'],
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
                        color: '#49bcf7'
                    },
                    barWidth: '15',
                    data: [90, 80, 67, 99, 12],
                    z: 10
                }, {
                    type: 'bar',
                    barGap: '-100%',
                    itemStyle: {
                        color: '#fff',
                        opacity: 0.1
                    },
                    barWidth: '15',
                    data: [100, 100, 100, 100, 100],
                    z: 5
                }],
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        }

    },
    mounted() {
        this.init_bottom_echart();
    }
}
</script>

<style>
/* 左部菜单栏样式 */
.home_right_bar {
    position: absolute;
    /* left:0; */
    top: 120px;
    width: 450px;
    height: calc(100% - 200px);
    z-index: 900;
    /* pointer-events: none; */
}

.home_right_bar .menu-cover {
    width: 300px;
    height: 813px;
}

/* 收起菜单 */
.homeRightViewToLeft {
    animation: homeRightView_to_left 1000ms;
    -moz-animation: homeRightView_to_left 1000ms;
    /* Firefox */
    -webkit-animation: homeRightView_to_left 1000ms;
    /* Safari 和 Chrome */
    -o-animation: homeRightView_to_left 1000ms;
    /* Opera */
}


.home_right_bar_top {
    width: 100%;
    height: 48%;
    background: url(@/assets/images/home_view_bg1.png) no-repeat;
    background-size: 100% 100%;
}

.home_right_bar_bottom {
    margin-top: 1%;
    width: 100%;
    height: 48%;
    background: url(@/assets/images/home_view_bg1.png) no-repeat;
    background-size: 100% 100%;
}

.home_right_bar_top_title {
    text-align: right;
    font-size: 16px;
    color: #FFFFFF;
    padding-right: 11%;
    padding-top: 6%;
}

.home_right_bar_top_main {
    width: 80%;
    height: 76%;
    margin: auto;
    margin-top: 4%;
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

@keyframes homeRightView_to_left {
    from {
        right: 0%;
    }

    to {
        right: 5%;
    }
}

@-moz-keyframes homeRightView_to_left {
    from {
        right: 0%;
    }

    to {
        right: 5%;
    }
}

@-webkit-keyframes homeRightView_to_left {
    from {
        right: 0%;
    }

    to {
        right: 5%;
    }
}

@-o-keyframes homeRightView_to_left {
    from {
        right: 0%;
    }

    to {
        right: 5%;
    }
}

/* 弹出菜单 */
.homeRightViewToRight {
    animation: homeRightView_to_right 700ms;
    -moz-animation: homeRightView_to_right 700ms;
    /* Firefox */
    -webkit-animation: homeRightView_to_right 700ms;
    /* Safari 和 Chrome */
    -o-animation: homeRightView_to_right 700ms;
    /* Opera */
}

@keyframes homeRightView_to_right {
    from {
        left: -10%;
    }

    to {
        left: 5%;
    }
}

@-moz-keyframes homeRightView_to_right {
    from {
        left: -10%;
    }

    to {
        left: 5%;
    }
}

@-webkit-keyframes homeRightView_to_right {
    from {
        left: -10%;
    }

    to {
        left: 5%;
    }
}

@-o-keyframes homeRightView_to_right {
    from {
        left: -10%;
    }

    to {
        left: 5%;
    }
}</style>