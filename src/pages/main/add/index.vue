<template>
  <div class="safetyInfo">
    <input type="text" name="" id="" placeholder="搜索" v-model="search"/>
    <button @click="btn">搜索</button>
    <ul v-for="list in searchData">
      <li>
        <span>{{list.name}}</span>
        <span>{{list.date}}</span>
        <span>{{list.depart}}</span>
      </li>
    </ul>
    <!-- 在此处添加表格 -->
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
  </div>
</template>

<script>
   export default {
  name: 'HelloWorld',
  data () {
  return {
  search:'',
  searchData: '',
  products:[
  //假数据
  {name:"银川-淄博  飞机：2h  火车：8h  汽车：13h"},
  {name:"银川-昆明  飞机：3h  火车：15h  汽车：21h"},
  {name:"银川-长春  飞机：2h  火车：31h  汽车：29h"},
  {name:"银川-重庆  飞机：2h  火车：9h  汽车：13h"},
  {name:"银川-南京  飞机：2h  火车：9h  汽车：18h"},
  {name:"银川-武汉  飞机：3h  火车：8h  汽车：15h"},
  {name:"银川-成都  飞机：2h  火车：7h  汽车：13h"},
  {name:"银川-南昌  飞机：3h  火车：10h  汽车：18h"},
  {name:"银川-广州  飞机：3h  火车：12h  汽车：24h"},
  {name:"银川-杭州  飞机：3h  火车：11h  汽车：20h"},
  {name:"银川-上海  飞机：3h  火车：11h  汽车：21h"},
  {name:"银川-合肥  飞机：2h  火车：9h  汽车：16h"}
  ],

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
         
        ],
  }
  },
  methods:{
  btn:function(){
  var search = this.search;
  if (search) {
  this.searchData = this.products.filter(function(product) {
  console.log(product)
  return Object.keys(product).some(function(key) {
  console.log(key)
  return String(product[key]).toLowerCase().indexOf(search) > -1
  })
  })
  }
  }
  }
  }
</script>


<style>
.safetyInfo {
  padding-top: 200px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 40px; 
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
  background-color: #ada9aecd;
}

table th {
  background-color: #5f6369cf;
  color: white;
}

</style>