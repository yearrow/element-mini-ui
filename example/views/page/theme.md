<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-11 09:26:19
 * @LastEditTime: 2019-10-21 19:58:24
 -->
<script>
    export default {
      data() {
        return {
          inputNumValue:0.001,
          tableData: [{
            date: '2016-05-02',
            name: '王小虎2',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎3',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎4',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎5',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          tabPosition: 'left',
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value: '',
          dialogVisible: false,
          fullscreenLoading: false,
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          srcList: [
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
          ]
        }
      },
      methods: {
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        openFullScreen() {
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
          });
          setTimeout(() => {
            loading.close();
          }, 2000);
        }
      }
    }
</script>
<style>
  .doc-block{
    height:100px;width:80%;margin:30px;padding:10px;text-align:center;border-radius:10px;
  }
  .doc-block-mid{
    height:50px;width:80%;margin-left:30px;padding:10px;text-align:center;;border-radius:10px;
  }
  .column-style{
    background-color:#ddd;
  }
</style>
组件样式重置

[[toc]]

### color
   
   ##### 系统颜色
   
  

   **主色**

> [色值提取网站](https://www.colordrop.io/flat/)

   系统中的主色

<el-row :gutter="12">
    <el-col :span="6">
        <div class="doc-block" style="background:#2571a3;color:#fff;font-weight:500">Primary <br/> #2571a3</div>
    </el-col>
</el-row>

  **辅助色**
   
   除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。
<el-row :gutter="12">
    <el-col :span="6">
        <div class="doc-block" style="background:#44b29d;color:#fff;font-weight:500">Success <br/> #44b29d</div>
    </el-col>
    <el-col :span="6">
        <div class="doc-block" style="background:#f5b041;color:#fff;font-weight:500">Warning <br/> #f5b041</div>
    </el-col>
    <el-col :span="6">
        <div class="doc-block" style="background:#ec7062;color:#fff;font-weight:500">Danger <br/> #ec7062</div>
    </el-col>
    <el-col :span="6">
        <div class="doc-block" style="background:#99a3a4;color:#fff;font-weight:500">Info <br/> #99a3a4</div>
    </el-col>
</el-row>

**中性色**

中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。
<el-row >
    <el-col :span="6">
        <div class="doc-block-mid" style="background:#303133;color:#fff;font-weight:500">主要文字 <br/> #303133</div>
        <div class="doc-block-mid" style="background:#606266;color:#fff;font-weight:500">常规文字 <br/> #606266</div>
        <div class="doc-block-mid" style="background:#909399;color:#fff;font-weight:500">次要文字 <br/> #909399</div>
        <div class="doc-block-mid" style="background:#C0C4CC;color:#fff;font-weight:500">占位文字 <br/> #C0C4CC</div>
    </el-col>
    <el-col :span="6">
        <div class="doc-block-mid" style="background:#DCDFE6;color:#000;font-weight:500">一级边框 <br/> #DCDFE6</div>
        <div class="doc-block-mid" style="background:#E4E7ED;color:#000;font-weight:500">二级边框 <br/> #E4E7ED</div>
        <div class="doc-block-mid" style="background:#EBEEF5;color:#000;font-weight:500">三级边框 <br/> #EBEEF5</div>
        <div class="doc-block-mid" style="background:#F2F6FC;color:#000;font-weight:500">四级边框 <br/> #F2F6FC</div>
    </el-col>
</el-row>

#### 打包器全局系统色配置 `    

```js
const primary = '#2571a3'
const success = '#44b29d'
const info = '#99a3a4'
const warning = '#f5b041'
const danger = '#ec7062'
const fontPrimary = '#303133'
const fontSecond = '#606266'
const fontHelper = '#909399'
const border = '#DCDFE6'
const borderDark = '#EBEEF5'
const theme = '#2e4053' // 随系统变化(实物量站点主题)
const background = '#eaedef' // (实物量站点主题)
const colors = {
  primary,
  success,
  info,
  warning,
  danger,
  fontPrimary,
  fontSecond,
  fontHelper,
  border,
  borderDark,
  theme,
  background
}
```

### button

:::tip
1. 调整了button的整体大小。
:::

示例

:::demo
```html

常规样式
<div  style="margin: 20px 0">
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</div>


附加样式

<div style="margin: 20px 0">
  <el-button icon="el-icon-edit" type="primary">主要按钮</el-button>
  <el-button type="primary" plain >朴素按钮</el-button>
  <el-button type="text">文字按钮</el-button>
  <el-button type="primary" round >圆角按钮</el-button>
  <el-button type="warning" circle icon="el-icon-edit"></el-button>
</div>


禁用状态

<div style="margin: 20px 0">
  <el-button icon="el-icon-edit" type="primary" disabled>主要按钮</el-button>
  <el-button type="primary" plain disabled>朴素按钮</el-button>
  <el-button type="text" disabled>文字按钮</el-button>
  <el-button type="primary" round disabled>圆角按钮</el-button>
  <el-button type="warning" circle icon="el-icon-edit" disabled></el-button>
</div>


大小型号

<el-row>
  <el-button>默认按钮</el-button>
  <el-button size="medium">中等按钮</el-button>
  <el-button size="small">小型按钮</el-button>
  <el-button size="mini">超小按钮</el-button>
</el-row>
<el-row>
  <el-button round>默认按钮</el-button>
  <el-button size="medium" round>中等按钮</el-button>
  <el-button size="small" round>小型按钮</el-button>
  <el-button size="mini" round>超小按钮</el-button>
</el-row>
<el-row>
  <el-button circle icon="el-icon-edit" ></el-button>
  <el-button size="medium" circle icon="el-icon-edit" ></el-button>
  <el-button size="small" circle icon="el-icon-edit" ></el-button>
  <el-button size="mini" circle icon="el-icon-edit" ></el-button>
</el-row>
<el-row>
  <el-button type="text">默认按钮</el-button>
  <el-button size="medium" type="text">中等按钮</el-button>
  <el-button size="small" type="text">小型按钮</el-button>
  <el-button size="mini" type="text">超小按钮</el-button>
</el-row>

```
:::



---


### dialog

:::tip
1. 调整了dialog的padding边距。
2. 调整了dialog的header文字大小。
3. 添加了header背景色。
:::

示例

 :::demo
```html

<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="90%"
  :before-close="handleClose">
  <div style="height:75vh">
     <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
  </div>
 
</el-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>

```
::: 

---




### select

:::tip
2. 调整了select hover的背景色。
:::

:::demo 
```html
<template>
  <el-select v-model="value" clearable placeholder="请选择" size="small">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>
```
:::

### table

:::tip
1. 调整了table hover的背景色。
:::

:::demo 
```html
<template>
    <el-table
      size="small"
      border
      :data="tableData"
      style="width: 100%">   
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="姓名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column> 
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎1',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎2',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎3',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
  </script>
```
:::






### tabs

:::tip
1. 给el-tabs__content类添加了flex:1属性。
使用时如果要让内容区域完全填充，给tabs最外层给`display:flex`属性,如果是上下:`flex-direction：column` 如果是左右:`flex-direction：row`
:::

:::demo 
```html
<template>
  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <el-radio-button label="top">top</el-radio-button>
    <el-radio-button label="right">right</el-radio-button>
    <el-radio-button label="bottom">bottom</el-radio-button>
    <el-radio-button label="left">left</el-radio-button>
  </el-radio-group>
   <div style="height:300px;">
    <el-tabs :tab-position="tabPosition" style="height:100%;display:flex;flex-direction:column">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tabPosition: 'left'
      };
    }
  };
</script>

```
:::





### loading

:::tip
1. 改变loding遮罩层的透明度
:::

:::demo 
```html
<template>
  <el-button
    type="primary"
    @click="openFullScreen"
    v-loading.fullscreen.lock="fullscreenLoading">
    指令方式
  </el-button>
  <el-button
    type="primary"
    @click="openFullScreen">
    服务方式
  </el-button>
</template>

<script>
export default {
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    }
  }
</script>

```
:::


### input-number

:::tip
1. 更新样式
:::

:::demo 
```html
<template>
 <el-input-number v-model="inputNumValue" :precision="2" :step="0.1" :max="10"></el-input-number>
</template>

<script>
  export default {
     data() {
      return {
        inputNumValue: 0.001
      }
    }
  }
</script>

```
:::

