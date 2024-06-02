export default {
    //取得就业率柱状图数据
    getMapMode(mode) {
        var mapStyle = {
            styleJson: [
                /*{
                    'featureType': 'highway',     //调整高速道路颜色
                    'elementType': 'geometry',
                    'stylers': {
                   // 'color': '#f1e1a6',
                    'visibility': 'off'
                    }
                },
         
                {
                    'featureType': 'highway',    //调整高速名字是否可视
                    'elementType': 'labels',
                    'stylers': {
                   'visibility': 'off'
                    }
                },
                {
                    'featureType': 'arterial',   //调整一些干道颜色
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                    }
                },
                {
                    'featureType': 'green',
                    'elementType': 'geometry',
                    'stylers': {
                    }
                },
                {
                    'featureType': 'subway',    //调整地铁颜色
                    'elementType': 'geometry.stroke',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'subway',
                    'elementType': 'labels',
                    'stylers': {
                    }
                },
                {
                    'featureType': 'railway',		//铁路
                    'elementType': 'geometry',
                    'stylers': {
                    'visibility': 'off'
                    }
                },
                {
                    'featureType': 'railway',	//铁路
                    'elementType': 'labels',
                    'stylers': {
                    'visibility': 'off'
                    }
                },*/

                {
                    'featureType': 'water',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#414a59'
                    }
                },
                {
                    'featureType': 'building',   //调整建筑物颜色
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'building',   //调整建筑物标签是否可视
                    'elementType': 'labels',
                    'stylers': {
                        //   'visibility': 'off'
                    }
                },

                {
                    'featureType': 'highway',     //调整高速道路颜色
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#5bd2ff',
                        'weight': '0.5',
                        'visibility': 'off'
                    }
                },

                {
                    'featureType': 'highway',    //调整高速名字是否可视
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'arterial',   //调整一些干道颜色
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                    }
                },
                {
                    'featureType': 'green',
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'subway',    //调整地铁颜色
                    'elementType': 'geometry.stroke',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'subway',
                    'elementType': 'labels',
                    'stylers': {
                    }
                },
                {
                    'featureType': 'railway',		//铁路
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'railway',	//铁路
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'all',     //调整所有的标签的边缘颜色
                    'elementType': 'labels.text.stroke',
                    'stylers': {
                        'color': '#0e265261',
                        //'color': '#000000',
                    }
                },
                {
                    'featureType': 'all',     //调整所有标签的填充颜色
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        'color': '#ffffff'
                        //	  'visibility': 'off'
                    }
                },


                {
                    'featureType': 'manmade',
                    'elementType': 'geometry',
                    'stylers': {
                    }
                },
                {
                    'featureType': 'manmade',
                    'elementType': 'labels',
                    'stylers': {
                    }
                },
                {
                    'featureType': 'local',
                    'elementType': 'geometry',
                    'stylers': {
                    }
                },
                {
                    'featureType': 'subway',
                    'elementType': 'geometry',
                    'stylers': {
                        'lightness': -65
                    }
                },
                {
                    'featureType': 'railway',
                    'elementType': 'all',
                    'stylers': {
                        'lightness': -40
                    }
                },

                {
                    'featureType': 'all',     //调整所有标签的填充颜色   省市名称
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        //     'visibility': 'off'
                        'color': '#6e6e6e',
                    }
                },
                {
                    "featureType": "label",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#6e6e6e",
                    }
                },

                {
                    'featureType': 'boundary',                 //中国边缘
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#000000',
                        'weight': '2',
                        'lightness': 30
                    }
                },

                {
                    'featureType': 'land',     //调整土地颜色
                    'elementType': 'geometry',
                    'stylers': {

                        'color': '#08304b'
                    }
                },
                {
                    'featureType': 'highway',    //调整高速名字是否可视
                    'elementType': 'labels',
                    'stylers': {
                        //     'visibility': 'off'
                    }
                },
                /*    { "featureType": "label",
                    "elementType": "all",
                    "stylers": {
         
                        "color": "#ffffff"
                    }
                },*/

            ]
        };

        const mapStyle1 = {
            styleJson: [
                {
                    'featureType': 'building',   //调整建筑物颜色
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'building',   //调整建筑物标签是否可视
                    'elementType': 'labels',
                    'stylers': {
                        //   'visibility': 'off'
                    }
                },


                {
                    'featureType': 'highway',    //调整高速名字是否可视
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'arterial',   //调整一些干道颜色
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                    }
                },
                {
                    'featureType': 'green',
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'subway',    //调整地铁颜色
                    'elementType': 'geometry.stroke',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'subway',
                    'elementType': 'labels',
                    'stylers': {
                    }
                },
                {
                    'featureType': 'railway',		//铁路
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'railway',	//铁路
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                },

                {
                    'featureType': 'manmade',
                    'elementType': 'geometry',
                    'stylers': {
                    }
                },
                {
                    'featureType': 'manmade',
                    'elementType': 'labels',
                    'stylers': {
                    }
                },
                {
                    'featureType': 'local',
                    'elementType': 'geometry',
                    'stylers': {
                    }
                },
                {
                    'featureType': 'subway',
                    'elementType': 'geometry',
                    'stylers': {
                        'lightness': -65
                    }
                },
                {
                    'featureType': 'railway',
                    'elementType': 'all',
                    'stylers': {
                        'lightness': -40
                    }
                },


                {
                    'featureType': 'highway',    //调整高速名字是否可视
                    'elementType': 'labels',
                    'stylers': {
                        //     'visibility': 'off'
                    }
                },

            ]
        };

        if (mode == 0)
            return mapStyle
        else
            return mapStyle1
    }

}