<template>
  <div class="app-container">
   <el-tabs   v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="系统配置" name="first"> 
      <span slot="label"><i class="el-icon-edit"></i>系统配置</span>
      <el-form style="margin-left: 20px;" label-position="left"  label-width="140px"  >      
        <el-form-item label="图标方案">    
          <el-radio-group v-model="form.iconType">           
          <el-radio v-for="item in iconConfigList"  :key="item.uid" :label=" Number(item.dictValue)" border size="medium">{{item.dictLabel}}</el-radio>          
        </el-radio-group>    
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">提交</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">

    </el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">
      
    </el-tab-pane>
  </el-tabs>
    
  </div>

</template>

<script>
import {getDict} from '@/api/sysDict'
import {getSysConfig,editSysConfig} from '@/api/sysConfig'
import { Message } from 'element-ui'
export default {
  data(){
    return{
      form:{
         
      },
      //icon配置
      iconConfigList:[]
    }   
  },
  created(){
     this.getSysConfig();
    this.getDictData();
   
  },
  methods:{
    //获取字典数据
    getDictData:function(){
      var type=['icon_type']
      getDict(type).then(response=>{
         if (response.code == 'success') {
          var dictMap = response.data;
          this.iconConfigList = dictMap.icon_type.list
        }
      });
    },
    //获取系统配置
    getSysConfig:function(){
      getSysConfig().then(response=>{
        if (response.code == 'success') {
          var formData = response.data;
          this.form = formData
        }
      });
    },
    submitForm:function(){
      editSysConfig(this.form).then(response=>{
        if (response.code == 'success') {
           Message({
        showClose: true,
        message:  '成功',
        type: 'success'
      });
          }
      });
    }
    
  }
}
</script>

<style scoped>

</style>