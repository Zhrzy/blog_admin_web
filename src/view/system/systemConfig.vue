<template>
  <div class="app-container">
   <el-tabs   v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="系统配置" name="first"> 
      <span slot="label"><i class="el-icon-edit"></i>系统配置</span>
      <el-form style="margin-left: 20px;" label-position="left"   label-width="140px"  >
       
        <el-form-item label="图标方案">
          
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
export default {
  data(){
    return{
      left:'left'
    }
    
  }
}
</script>

<style scoped>

</style>