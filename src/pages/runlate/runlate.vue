<template>
    <div class="runlate_map" id="runlate_map"></div>
    <!-- 下侧统计模块 -->
    <runlate_bottom_view :showSign="active"></runlate_bottom_view>
</template>

<script>
import $ from 'jquery'
import * as echarts from 'echarts'
import 'echarts/extension/bmap/bmap' // bmap用来处理百度地图
import { ref, onMounted, reactive } from 'vue'
import mapBaiduCommon from '@/js/mapBaiduCommon'

import runlate_bottom_view from './runlate_bottom_view.vue'

export default {
    name: 'home',
    components: {
        runlate_bottom_view
    },
    data() {
        return {
            active: true,
            runlateChart: null,
            mapType: "geo",
            manCodeLon: 110.072073,
            manCodeLat: 35.583677,
            runlate_data_list: []
        }
    },
    methods: {
        initRunlateMap() { //初始化地图
            //直接引用进来使用
            var echarts = require('echarts');
            // 基于准备好的dom，获取main节点init初始化echarts实例
            this.runlateChart = echarts.init(document.getElementById('runlate_map'));
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
                legend: {
                    orient: 'vertical',
                    y: 'top',
                    x: 'right',
                    data: ['运行率'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                visualMap: {
                    min: 0,
                    max: 100,
                    calculable: true,
                    color: ['#d94e5d', '#eac736', '#50a3ba'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        name: ' ',
                        type: 'scatter',
                        coordinateSystem: 'bmap',
                        data: [],
                        symbolSize: 20,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                borderColor: '#fff',
                                borderWidth: 1
                            }
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
                                    '<div class=itemvalue>运行率: ' + params.data.value + '</div>' +
                                    '</div>'
                            }
                        }
                    }
                ],
            };

            this.runlateChart.setOption(option)
            this.runlateChart.on('click', (params) => {
                console.log('click', params)
            })
            // 使用百度api来配置
            let bmap = this.runlateChart.getModel().getComponent('bmap').getBMap()
            bmap.disableDoubleClickZoom() //阻止双击放大
            bmap.setMapStyle({style:'light'});

        },
        initData() {  //初始化实时监测数据
            var that = this;
            $.ajax({
                type: "get",
                url: process.env.BASE_URL + "static/data/runlatedata.json?time=" + new Date().getTime(),
                dataType: "json",
                error: function () {
                    //	alert("获取数据失败！")
                },
                success: function (resp) {
                    that.runlate_data_list = resp;
                    that.renderMap();
                }
            });
        },
        renderMap() {
            var option = this.runlateChart.getOption();
            option.series[0].data = this.runlate_data_list;
            this.runlateChart.setOption(option);

        }
    },
    mounted() {
        this.initRunlateMap();
        //加载页面后,自动加载地图数据
        this.initData();

        $("#main_bottom_bar").css('display','none');
    }

}

</script>

<style>
.runlate_map {
    width: 100%;
    height: 100%;
}


.chartLabel{
    min-width: 200px;
    min-height: 100px;
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
</style>