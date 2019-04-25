<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      >
      </el-table-column>
    </el-table>
    <div class="demo-input-suffix">
  属性方式：
  <el-input
    placeholder="请选择日期"
    suffix-icon="el-icon-date"
    v-model="input1">
  </el-input>
  <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input2">
  </el-input>
</div>
<div class="demo-input-suffix">
  slot 方式：
  <el-input
    placeholder="请选择日期"
    v-model="input3">
    <i slot="suffix" class="el-input__icon el-icon-date"></i>
  </el-input>
  <el-input
    placeholder="请输入内容"
    v-model="input4">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
</div>
 <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
  <div class="nav">
  <ul>
      <li><a href="">啦啦啦啦</a></li>
      <li><a href="">11111</a></li>
      <li><a href="">22222</a></li>
  </ul>
  </div>
  <div id="main">
  <p>
      啦啦啦
  </p>
    <p><a href="">111111111111</a></p>
    <p class="redbox"> 2222222222</p>
  </div>
  
  </div>
</template>
<script >
export default {
  name: 'index',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      input1:'',
      input2:'',
      input3:'',
      input4:'',
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
    }
  }
}
</script>
<style lang="scss" scoped>
.nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li { display: inline-block;}
   
    a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
        color:black;
    }
}
#main {
  width: 97%;
  height:10px;
  border: 1px;
  p, div {
    font-size: 2em;
    a { font-weight: bold; }
  }

}
#main p .redbox{
    background-color:#00ff00;
    color: #000000;
}
// #main p {
//     border: solid 1px;
//     color: #00ff00;
//     width:97%;
//     height: 15px;

//     .redbox {
//         background-color: #ff0000;
//         color: #000000; 
//     }
// }
#main p {
    color:#00ff00;
    width: 97%;
}
#main p .redbox {
    background-color: #ff0000;
    color: #000;
}
a {
  font-weight: bold;
  text-decoration: none;
  &:hover { color:brown; }
  body.firefox & { font-weight: normal; }
}
</style>
