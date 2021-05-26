<template>
    <div class="el-container">
         <el-tabs v-model="activeName" @tab-click="handleClick">

            <el-tab-pane label="账号密码登录" name="first">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                
                <el-form-item label="账号" prop="user">
                    <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="验证码" prop="yzm">
                    <el-input type="text" class="yzm" v-model="ruleForm.yzm" autocomplete="off"></el-input>
                    <div class="yzm_zhi">2596</div>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">
                配置管理
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          user: 'admin',
          pass: '123456',
          yzm: '2596'
        },
        rules: {
          user: [
            { required: true, message: '请输入账户名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '请输入账户密码', trigger: 'blur' },
          ],
          yzm: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
            { min: 4, max: 4, message: '长度在 4 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
        
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="less" scoped>
    .el-container{
        background-image: url(https://gitee.com/lyt-top/vue-next-admin-images/raw/master/login/bg-login.png);
        width: 100vw;
        height: 100vh;
    }
    .el-tabs{
        width: 400px;
        height: 400px;
        margin: auto;
    }
    .yzm{
        width: 70%;
        text-align: left;
        display: inline-block;
}
    .yzm_zhi{
        width: 28%;
        height: 38px;
        border-radius: 10px;
        border: 1px solid #ddd;
        // float: left;
        display: inline-block;
    }
</style>