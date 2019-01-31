<template>
  <div class="role-breadcrumb-wrap-box">
    <div class="breadcrumb-wrap">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>系统管理</el-breadcrumb-item>
        <el-breadcrumb-item>角色管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="form-search-wrap">
      <div class="dis-in-block">
        <el-select v-model="defaultSelectedValue" placeholder="请选择" @change="hasChange">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="dis-in-block"><el-input v-model="search_input" placeholder="请输入内容" ></el-input></div>
      <div class="dis-in-block">
        <el-button type="primary" icon="el-icon-search">查询</el-button>
        <el-button type="primary" icon="el-icon-circle-plus" @click="newInfo">新增</el-button>
        <el-button type="danger" icon="el-icon-delete" @click="deleteFn">批量删除</el-button>
      </div>
    </div>
    <div class="form-info-list">
      <el-table
        ref="multipleTable"
        :data="tableData"
        height="400px"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="角色名"
          height="20px"
          width="120">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column
          prop="number"
          label="成员数"
          width="120">
        </el-table-column>
        <el-table-column
          prop="desc"
          label="描述"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="150">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" @click="editInfo(scope.row)" size="mini" circle></el-button>
            <el-button type="primary" icon="el-icon-view" size="mini"  circle></el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteOne(scope)"  circle></el-button>


          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="新增角色" :visible.sync="dialogNew">
      <el-form :model="newForm">
        <el-form-item label="角色名" :label-width="formLabelWidth">
          <el-input v-model="newForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="成员数" :label-width="formLabelWidth">
          <el-input v-model="newForm.member" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="newForm.desc" autocomplete="off"></el-input>
        </el-form-item>


      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogNew = false">取 消</el-button>
        <el-button type="primary" @click="dialogNew = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="修改角色" :visible.sync="dialogEdit">
      <el-form :model="editForm">
        <el-form-item label="角色名" :label-width="formLabelWidth">
          <el-input v-model="editForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="成员数" :label-width="formLabelWidth">
          <el-input v-model="editForm.member" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="editForm.desc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="search_ipt" placeholder="请输入内容"></el-input>
          <div v-if="searchMsg.length === 0">
              暂无结果
          </div>
          <div v-else>
            <el-checkbox-group size="mini" v-model="checkedCities">
              <el-checkbox  v-for="item in searchMsg" border :label="item" :key="item"></el-checkbox>

            </el-checkbox-group>
          </div>

        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEdit = false">取 消</el-button>
        <el-button type="primary" @click="dialogEdit = false">确 定</el-button>
      </div>
    </el-dialog>




  </div>
</template>

<script>
  function fuzzyQuery(list, keyWord) {
    var reg =  new RegExp(keyWord);
    var arr = [];
    list.forEach(item=>{
      if (reg.test(item)){
          arr.push(item)
      }
    })
    return arr;
  }
  export default {
    name: 'role',
    data(){
      return {
        options: [{
          value: '角色名',
          label: '角色名'
        }, {
          value: '描述',
          label: '描述'
        }],
        search_input:'',
        defaultSelectedValue: '角色名',
        tableData: [{
          number: '4',
          name: '小胡1',
          desc: '上海市普陀区金沙江路 1518 弄'
        }, {
          number: '5',
          name: '小胡',
          desc: '上海市普陀区金沙江路 1518 弄'
        }, {
          number: '3',
          name: '小胡',
          desc: '上海市普陀区金沙江路 1518 弄'
        }, {
          number: '5',
          name: '小胡',
          desc: '上海市普陀区金沙江路 1518 弄'
        }, {
          number: '5',
          name: '小胡',
          desc: '上海市普陀区金沙江路 1518 弄'
        }, {
          number: '5',
          name: '小胡',
          desc: '上海市普陀区金沙江路 1518 弄'
        }, {
          number: '5',
          name: '小胡',
          desc: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogNew:false,
        dialogEdit:false,
        formLabelWidth: '120px',
        newForm:{
          name: '',
          member:'',
          desc:''
        },
        multipleSelection: [],
        search_ipt:'',
        checkedCities:[],
        datas: ['上海', '北京', '广州', '深圳'],
        editForm:{
          name: '',
          member:'',
          desc:''
        }


      }
    },
    methods:{
      deleteOne(item){
        // console.log( item.$index )
        this.tableData.splice(item.$index ,1)
      },
      editInfo(item) {
        this.dialogEdit = true;
        // console.log(item);
        this.editForm = {
          name:item.name,
          member:item.number,
          desc:item.desc
        }
      },

      newInfo(){
        this.dialogNew = true;
      },
      hasChange(){
        console.log(this.defaultSelectedValue)
      },
      deleteFn(){
        console.log(this.multipleSelection )
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
    computed:{
      searchMsg(){
        if (!this.search_ipt) {
            return this.datas;
        }
        return  fuzzyQuery(this.datas,this.search_ipt);
      }
    }
  }
</script>

<style lang="scss">
  .dis-in-block{
    display: inline-block;
  }
  .role-breadcrumb-wrap-box{
    padding: 20px 30px;
    overflow: hidden;

    .el-table td, .el-table th {
      padding: 8px 0;
    }
    .form-info-list{
      margin-top: 20px;
      border: 1px solid #ddd;
    }
  }
  .breadcrumb-wrap{

  }
  .form-search-wrap{
    overflow: hidden;
    margin-top: 40px;
  }
</style>
