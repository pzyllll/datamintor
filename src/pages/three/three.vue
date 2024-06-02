<template>




  <!-- 表格 -->
    <table>
      <thead>
        <tr>
          <th>出发地</th>
          <th>目的地</th>
          <th>飞机到达（h）</th>
          <th>火车到达（h）</th>
          <th>汽车到达（h）</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in persons" :key="person.id">
          <td>{{ person.name }}</td>
          <td>{{ person.destination }}</td>
          <td>{{ person.plane }}</td>
          <td>{{ person.train }}</td>
          <td>{{ person.car }}</td>
        </tr>
      </tbody>
    </table>
 

  
</template>

<script>
// 引入 Element Plus
import { ElInput, ElButton } from 'element-plus';

export default {

  components: {
    ElInput,
    ElButton
  },


  data() {
    return {

    



//表格内容
      persons: [
          { name: '银川', destination: '淄博', plane: 2, train: 9, car: 13 },
          { name: '银川', destination: '昆明', plane: 3, train: 15, car: 21 },
          { name: '银川', destination: '长春', plane: 3, train: 31, car: 29 },
          { name: '银川', destination: '重庆', plane: 2, train: 9, car: 13 },
          { name: '银川', destination: '南京', plane: 2, train: 9, car: 18 },
          { name: '银川', destination: '武汉', plane: 3, train: 8, car: 15 },
          { name: '银川', destination: '成都', plane: 2, train: 7, car: 13 },
          { name: '银川', destination: '南昌', plane: 3, train: 10, car: 18 },
          { name: '银川', destination: '广州', plane: 3, train: 12, car: 24 },
          { name: '银川', destination: '杭州', plane: 3, train: 11, car: 20 },
          { name: '银川', destination: '上海', plane: 3, train: 11, car: 21 },
          { name: '银川', destination: '合肥', plane: 2, train: 9, car: 16 },
          { name: '银川', destination: '上海', plane: 3, train: 11, car: 21 },
          { name: '银川', destination: '合肥', plane: 2, train: 9, car: 16 },
        ],

//轮播图内容
      carouselData: [
        { title: '图片 1', img: 'https://ts1.cn.mm.bing.net/th/id/R-C.8d52fd88fbacb0bc34afa0d3e3d3fbf0?rik=YLBGQ2YxYJczDg&riu=http%3a%2f%2fwww.08lr.cn%2fuploads%2fallimg%2f220330%2f1-2300134436.jpg&ehk=h6QkPS87X6L6Vb7h5F10YmPZlLWLGKOMcKNcY9zMLRA%3d&risl=&pid=ImgRaw&r=0' },
        { title: '图片 2', img: 'https://www.nxnews.net/yc/jrww/201911/W020191113741321910009.jpg' },
        { title: '图片 3', img: 'https://ts1.cn.mm.bing.net/th/id/R-C.d07816d313cad5d2b53b30192443c4c5?rik=SUozltQgAs8%2bNQ&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn10119%2f600%2fw1920h1080%2f20190325%2f6449-hutwezf3366892.jpg&ehk=DH2hT8Ey9e3gfn%2fUBKrQFjRb3LPXUs9sEIOq4LRDZfQ%3d&risl=&pid=ImgRaw&r=0' },
        { title: '图片 4', img: 'https://ts1.cn.mm.bing.net/th/id/R-C.9de53f9726576696b318a8d95c0946cb?rik=sWB3V9KSxHbThw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f9995_1.jpg&ehk=GcPUjJED69TBvg9XxQr2klzDzfRsQWhAfLKlIAUWHJQ%3d&risl=&pid=ImgRaw&r=0' },
      ],
      interval: 3000,
      autoplay: true,
      indicator: 'round',
    };
  },


  methods: {
    //轮播图
    slideChange(event) {
      console.log(event);
    },


// 搜索按钮点击事件
search() {
      // 模拟搜索操作
      const searchResults = [
        { title: 'Result 1' },
        { title: 'Result 2' },
        { title: 'Result 3' }
      ];

      // 根据搜索文本过滤结果
      const filteredResults = searchResults.filter(result => {
        return result.title.includes(this.searchText);
      });

      // 更新搜索结果
      this.searchResults = filteredResults;
    }


  },

 

};
</script>

<style scoped>
/* 轮播图组件样式 */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 15px;
  text-align: left;
}

table tr {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #e3b7f2;
}

table th {
  background-color: #886fed;
  color: white;
}

/* 改变列间距 */
table {
  column-gap: 20px;
}



</style>