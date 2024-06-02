<template>
    <div class="home_map" id="home_map"></div>
    <!-- 左侧统计模块 -->
    <home_left_view :showSign="active"></home_left_view>
    <!-- 右侧统计模块 -->
    <home_right_view :showSign="active"></home_right_view>

    <!-- 弹框 -->
    <div id="popup">
        <div class="section-1">
            <div style="display: flex; align-items: center;">
                <img class="location" src="@/assets/images/location.png" alt="">
                <div id="title" class="title"></div>
            </div>

            <div class="close" @click="closeDialog()">
                <img src="@/assets/images/x.png" alt="">
            </div>
        </div>

        <div style="display: flex;">
            <div id="produce">
                <table width="100%" cellspacing="0" cellpadding="6">
                    <tbody>
                        <tr class="row1">
                            <td class="row1td" colspan="5" style="padding: 2px 0px">数据采集器</td>
                        </tr>
                        <tr class="row2">
                            <td>ME523</td>
                            <td>ME612</td>
                            <td>ME312</td>
                            <td>ME613</td>
                            <td>ME315</td>
                        </tr>
                        <tr class="row2">
                            <td>99.75%</td>
                            <td>55.92%</td>
                            <td>21.1%</td>
                            <td>0.24%</td>
                            <td>0.09%</td>
                        </tr>
                        <tr class="row1">
                            <td class="row1td" colspan="5" style="padding: 2px 0px">电源控制器</td>
                        </tr>
                        <tr class="row2">
                            <td>ME523</td>
                            <td>ME612</td>
                            <td>ME312</td>
                            <td>ME613</td>
                            <td>ME315</td>
                        </tr>
                        <tr class="row2">
                            <td>99.75%</td>
                            <td>55.92%</td>
                            <td>21.1%</td>
                            <td>0.24%</td>
                            <td>0.09%</td>
                        </tr>
                        <tr class="row1">
                            <td class="row1td" colspan="5" style="padding: 2px 0px">监控单元</td>
                        </tr>
                        <tr class="row2">
                            <td>ME523</td>
                            <td>ME612</td>
                            <td>ME312</td>
                            <td>ME613</td>
                            <td>ME315</td>
                        </tr>
                        <tr class="row2">
                            <td>99.75%</td>
                            <td>55.92%</td>
                            <td>21.1%</td>
                            <td>0.24%</td>
                            <td>0.09%</td>
                        </tr>
                        <tr class="row1">
                            <td class="row1td" colspan="5" style="padding: 2px 0px">路由器</td>
                        </tr>
                        <tr class="row2">
                            <td>ME523</td>
                            <td>ME612</td>
                            <td>ME312</td>
                            <td>ME613</td>
                            <td>ME315</td>
                        </tr>
                        <tr class="row2">
                            <td>99.75%</td>
                            <td>55.92%</td>
                            <td>21.1%</td>
                            <td>0.24%</td>
                            <td>0.09%</td>
                        </tr>
                        <tr class="row1">
                            <td class="row1td" colspan="5" style="padding: 2px 0px">交换机</td>
                        </tr>
                        <tr class="row2">
                            <td>ME523</td>
                            <td>ME612</td>
                            <td>ME312</td>
                            <td>ME613</td>
                            <td>ME315</td>
                        </tr>
                        <tr class="row2">
                            <td>99.75%</td>
                            <td>55.92%</td>
                            <td>21.1%</td>
                            <td>0.24%</td>
                            <td>0.09%</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div id="popup2">
        <div class="video-contain">
            <div class="close2" @click="closeDialog2()">
                <img src="@/assets/images/x.png" alt="">
            </div>
            <video id="video1" width="100%" height="100%" controls>
                您的浏览器不支持 HTML5 video 标签。
            </video>
            <video id="video2" width="100%" height="100%" controls>
            </video>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import * as echarts from 'echarts'
import 'echarts/extension/bmap/bmap' // bmap用来处理百度地图
import { ref, onMounted, reactive } from 'vue'
import mapBaiduCommon from '@/js/mapBaiduCommon'

import home_left_view from './home_left_view.vue'
import home_right_view from './home_right_view.vue'

export default {
    name: 'home',
    components: {
        home_left_view,
        home_right_view
    },
    data() {
        return {
            active: true,
            myChart: null,
            mapType: "geo",
            manCodeLon: 95.072073,
            manCodeLat: 35.583677,
            mapMode: "2",
            levelMode: "size",
            normal_data_list: [],
            error_data_list: [],
            realtime_data_list: []
        }
    },
    methods: {
        initHomeMap() { //初始化地图
            //直接引用进来使用
            var echarts = require('echarts');
            // 基于准备好的dom，获取main节点init初始化echarts实例
            this.myChart = echarts.init(document.getElementById('home_map'));
            var that = this;

            var option = {
                title: {
                    text: '',
                    left: 'center',
                },
                // 使用echarts配置地图
                bmap: {
                    center: [this.manCodeLon, this.manCodeLat],
                    zoom: 5,
                    roam: true,
                    mapStyle: mapBaiduCommon.getMapMode(0),
                },
                tooltip: {
                    trigger: 'item',
                },
                series: [
                    {
                        name: 'sta_normal',
                        type: 'scatter',
                        coordinateSystem: 'bmap',
                        data: [],
                        symbolSize: function (val) {
                            return val[2] / 5
                        },
                        encode: {
                            value: 2,
                        },
                        label: {
                            position: 'top',
                        },
                        itemStyle: {
                            color: 'green',
                        },
                        emphasis: {
                            label: {
                                show: true,
                            },
                        },
                        tooltip: {
                            // 鼠标是否可以进入悬浮框
                            enterable: true,
                            borderWidth: 0, // 提示框浮层的边框宽。
                            // 触发方式 mousemove, click, none, mousemove|click
                            triggerOn: 'click',
                            // item 图形触发， axis 坐标轴触发， none 不触发
                            trigger: 'item',
                            // 浮层隐藏的延迟
                            hideDelay: 800,
                            // 背景色
                            backgroundColor: 'rgba(0,0,0,0)',
                            formatter: function (params) {
                                console.log(params);
                                return '<div class="chartLabel">' +
                                    '<div class=title>' + params.name + '</div>' +
                                    '<div class=itemvalue>当前状态: ' + params.data.status + '</div>' +
                                    '<div class=itemvalue>人流类型: ' + params.data.geomagnetism_type + '</div>' +
                                    '<div class=itemvalue>数据位置: ' + params.data.value + '</div>' +
                                    '</div>'
                            }
                        }
                    }, {
                        name: 'sta_error',
                        type: 'scatter',
                        coordinateSystem: 'bmap',
                        data: [],
                        symbolSize: function (val) {
                            return val[2] / 5
                        },
                        encode: {
                            value: 2,
                        },
                        label: {
                            position: 'top',
                        },
                        itemStyle: {
                            color: 'red',
                        },
                        emphasis: {
                            label: {
                                show: false,
                            },
                        },
                        tooltip: {
                            // 鼠标是否可以进入悬浮框
                            enterable: true,
                            borderWidth: 0, // 提示框浮层的边框宽。
                            // 触发方式 mousemove, click, none, mousemove|click
                            triggerOn: 'click',
                            // item 图形触发， axis 坐标轴触发， none 不触发
                            trigger: 'item',
                            // 浮层隐藏的延迟
                            hideDelay: 800,
                            // 背景色
                            backgroundColor: 'rgba(0,0,0,0)',
                            formatter: function (params) {
                                console.log(params);
                                return '<div class="chartLabel">' +
                                    '<div class=title>' + params.name + '</div>' +
                                    '<div class=itemvalue>当前状态: ' + params.data.status + '</div>' +
                                    '<div class=itemvalue>人流类型: ' + params.data.geomagnetism_type + '</div>' +
                                    '<div class=itemvalue>数据位置: ' + params.data.value + '</div>' +
                                    '</div>'
                            }
                        }
                    }
                ],
            };

            this.myChart.setOption(option)
            this.myChart.on('click', (params) => {
                console.log('click', params)
                this.openDialog(params.name);
            })
            // 使用百度api来配置
            let bmap = this.myChart.getModel().getComponent('bmap').getBMap()
            bmap.disableDoubleClickZoom() //阻止双击放大
            //bmap.setMapStyle({style:'midnight'});
        },
        initData() {  //初始化实时监测数据
            var that = this;
            $.ajax({
                type: "get",
                url: process.env.BASE_URL + "static/data/realtimedata.json?time=" + new Date().getTime(),
                dataType: "json",
                error: function () {
                    //	alert("获取数据失败！")
                },
                success: function (resp) {
                    that.realtime_data_list = resp.data;
                    that.renderMap();
                }
            });
        },
        renderMap() {
            this.normal_data_list = [];
            for (var i = 0; i < this.realtime_data_list.length; i++) {
                var sta = this.realtime_data_list[i];
                if (sta["status"] == "Normal") {
                    this.normal_data_list.push({
                        name: sta["staCode"],
                        value: [sta["staLon"], sta["staLat"], 120],
                        status: sta['status'],
                        geomagnetism_type: sta['geomagnetism_type']
                    });
                } else {
                    this.error_data_list.push({
                        name: sta["staCode"],
                        value: [sta["staLon"], sta["staLat"], 120],
                        status: sta['status'],
                        geomagnetism_type: sta['geomagnetism_type']
                    });
                }
            }

            var option = this.myChart.getOption();
            option.series[0].data = this.normal_data_list;
            option.series[1].data = this.error_data_list;
            this.myChart.setOption(option);

        },
        openDialog(val) {
            document.getElementsByClassName("title")[0].innerHTML = val;
            document.getElementById("popup").style.display = 'block';
            document.getElementById("popup").className = 'fadein';
        },
        closeDialog() {
            document.getElementById("popup").className = 'fadeout';
            setTimeout(() => {
                document.getElementById("popup").style.display = 'none';
            }, 500);
        },
        closeDialog2() {
            document.getElementById("popup2").className = 'fadeout';
            setTimeout(() => {
                document.getElementById("popup2").style.display = 'none';
            }, 500);
            document.getElementById("popup").style.display = 'block';
            document.getElementById("popup").className = 'fadein';
        },
        openVideo(id) {
            document.getElementById("popup").className = 'fadeout';
            setTimeout(() => {
                document.getElementById("popup").style.display = 'none';
            }, 500);
            document.getElementById("popup2").style.display = 'block';
            document.getElementById("popup2").className = 'fadein';
            if (id == 1) {
                document.getElementById("video1").style.display = 'block';
                document.getElementById("video2").style.display = 'none';
            } else {
                document.getElementById("video1").style.display = 'none';
                document.getElementById("video2").style.display = 'block';
            }
        },
    },
    mounted() {
        this.initHomeMap();
        //加载页面后,自动加载地图数据
        this.initData();

        $("#main_bottom_bar").css('display','block');
    }

}

</script>

<style>
.home_map {
    width: 100%;
    height: 100%;
}

.chartLabel{
    min-width: 200px;
    min-height: 200px;
    width: 100%;
    background: url(@/assets/images/cotent_bg.png) no-repeat;
    background-size: 100% 100%;
}

.chartLabel .title{
    width: 100%;
    font-size: 16px;
    color: #FFFFFF;
    padding-left: 10%;
    padding-top: 5%;
}

.chartLabel .itemvalue{
    width: 100%;
    font-size: 16px;
    color:chartreuse;
    border-bottom: #FFFFFF;
    border-bottom-width: 1px;
    padding-left: 20px;
    padding-top: 10px;
}


/* 地图点击弹框 */
#popup {
    position: absolute;
    width: 700px;
    height: 500px;
    z-index: 999;
    top: 20%;
    left: 32%;
    display: none;
    background: url(@/assets/images/cotent_bg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-attachment: initial;
    opacity: 0.9;
    padding: 2%;
}

#popup2 {
    position: absolute;
    width: 600px;
    height: 400px;
    z-index: 999;
    top: 30%;
    left: 30%;
    display: none;
    background: url(@/assets/images/cotent_bg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-attachment: initial;
    opacity: 0.9;
    padding: 1% 2% 2% 2%;
}

.video-contain .close2 img {
    width: 49px;
    height: 49px;
    float: right;
}

#video1,
#video2 {
    display: none;
}

.section-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.section-1 .title {
    color: #fff;
    font-size: 24px;
}

.section-1 .close img {
    width: 49px;
    height: 49px;
}

.location {
    width: 16px;
    height: 23px;
    margin-right: 10px;
}

.content {
    color: #8cfeff;
    font-size: 18px;
    margin: 20px 0;
    text-align:left;
}

.pop-img {
    width: 202px;
    height: 130px;
}

.img-title {
    text-align: center;
    color: #8cfeff;
    font-size: 12px;
}

/* 弹出弹框 */
.fadein {
    animation: fadein .5s;
    -moz-animation: fadein .5s;
    /* Firefox */
    -webkit-animation: fadein .5s;
    /* Safari 和 Chrome */
    -o-animation: fadein .5s;
    /* Opera */
}

@keyframes fadein {
    0% {
        -webkit-transform: scale3d(0, 0, 0);
        transform: scale3d(0.5, 0.5, 0.5);
        opacity: 0;
    }

    50% {
        -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
        animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity: 1;
    }
}

@-moz-keyframes fadein

/* Firefox */
    {
    0% {
        -webkit-transform: scale3d(0, 0, 0);
        transform: scale3d(0.5, 0.5, 0.5);
        opacity: 0;
    }

    50% {
        -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
        animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity: 1;
    }
}

@-webkit-keyframes fadein

/* Safari 和 Chrome */
    {
    0% {
        -webkit-transform: scale3d(0, 0, 0);
        transform: scale3d(0.5, 0.5, 0.5);
        opacity: 0;
    }

    50% {
        -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
        animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity: 1;
    }
}

@-o-keyframes fadein

/* Opera */
    {
    0% {
        -webkit-transform: scale3d(0, 0, 0);
        transform: scale3d(0.5, 0.5, 0.5);
        opacity: 0;
    }

    50% {
        -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
        animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity: 1;
    }
}

/* 关闭弹框 */
.fadeout {
    animation: fadeout .5s;
    -moz-animation: fadeout .5s;
    /* Firefox */
    -webkit-animation: fadeout .5s;
    /* Safari 和 Chrome */
    -o-animation: fadeout .5s;
    /* Opera */
}

@keyframes fadeout {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity: 1;
    }

    50% {
        -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
        animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    }

    100% {
        -webkit-transform: scale3d(0, 0, 0);
        transform: scale3d(0.5, 0.5, 0.5);
        opacity: 0;
    }
}

@-moz-keyframes fadeout

/* Firefox */
    {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity: 1;
    }

    50% {
        -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
        animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    }

    100% {
        -webkit-transform: scale3d(0, 0, 0);
        transform: scale3d(0.5, 0.5, 0.5);
        opacity: 0;
    }
}

@-webkit-keyframes fadeout

/* Safari 和 Chrome */
    {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity: 1;
    }

    50% {
        -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
        animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    }

    100% {
        -webkit-transform: scale3d(0, 0, 0);
        transform: scale3d(0.5, 0.5, 0.5);
        opacity: 0;
    }
}

@-o-keyframes fadeout

/* Opera */
    {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity: 1;
    }

    50% {
        -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
        animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    }

    100% {
        -webkit-transform: scale3d(0, 0, 0);
        transform: scale3d(0.5, 0.5, 0.5);
        opacity: 0;
    }
}


#produce {
    color: #B7E2FF;
    /*font-size: 24px;*/
    margin-top: 10px;
    width: 100%;
}

#produce table {
    width: 100%;
    font-size: 12px;
}

#produce table td {
    text-align: center;
    border: 0px solid #069;
    padding: 2px 0px;
}

.popup-online-content {
    color: #B7E2FF;
    /*font-size: 24px;*/
    margin-top: 10px;
    width: 100%;
}

.popup-online-content table {
    width: 100%;
    font-size: 12px;
}

.popup-online-content table td {
    text-align: center;
    border: 1px solid #069;
    padding: 5px 10px;
	color:#40cdec;
}


.popup-online-content table th {
    text-align: center;
    border: 1px solid #069;
    padding: 2px 0px;
	color:#fff;
}

.row1 {
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    background-color: #14181c;
    box-shadow: -10px 0px 15px #2C58A6 inset, 10px 0px 15px #2C58A6 inset
}

.row1td {
    padding: 2px 0px;
}
.row2 div {
	border:1px solid #069;
	padding : 2px 0;

}

</style>