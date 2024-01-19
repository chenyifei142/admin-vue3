<script setup lang='ts'>
import {ref, reactive, onMounted} from "vue";
import {CircleClose, Lock, User, UserFilled} from "@element-plus/icons-vue";
import type {ElForm} from "element-plus";

type FormInstance = InstanceType<typeof ElForm>;
/**
 * @author: chen
 * @Date: 2023-05-08 09:42:07
 * @description: 创建了一个名为 loginFormRef 的响应式对象，它的值为 FormInstance 类型的空对象。
 * FormInstance 类型应该是一个表单对象实例，通常用来对表单进行操作和验证，例如获取表单数据、设置表单数据、表单校验等。
 */
const loginFormRef = ref<FormInstance>();
// 校验规则
const loginRules = reactive({
    username: [{required: true, message: "请输入用户名", trigger: "blur"}],
    password: [{required: true, message: "请输入密码", trigger: "blur"}]
});
// 登录状态
const loading = ref(false);

// 登录表单
interface ReqLoginForm {
    username: string;
    password: string;
}

const loginForm = reactive<ReqLoginForm>({
    password: "",
    username: ""
});

/**
 * @author: chen
 * @Date:2023-05-08 09:45:32
 * @description: 接收一个参数 formEl，类型为 FormInstance 或 undefined。
 */
const login = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate(valid => {
        if (!valid) return;
    })
}

/**
 * @author: chen
 * @Date:2023-05-08 10:08:58
 * @description: 重置校验
 */
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};

onMounted(() => {
    // 监听 enter 事件（调用登录）
    document.onkeydown = (e: KeyboardEvent) => {
        e = (window.event as KeyboardEvent) || e;
        if (e.code === "Enter" || e.code === "enter" || e.code === "NumpadEnter") {
            if (loading.value) return;
            login(loginFormRef.value);
        }
    };
});
</script>

<template>
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
        <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名：admin / user">
                <template #prefix>
                    <el-icon>
                        <User/>
                    </el-icon>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="密码：123456" show-password
                      autocomplete="new-password">
                <template #prefix>
                    <el-icon class="el-input__icon">
                        <lock/>
                    </el-icon>
                </template>
            </el-input>
        </el-form-item>
    </el-form>
    <div class="login-btn">
        <el-button :icon="CircleClose" round @click="resetForm(loginFormRef)" size="large">重置</el-button>
        <el-button :icon="UserFilled" round @click="login(loginFormRef)" size="large" type="primary" :loading="loading">
            登录
        </el-button>
    </div>
</template>

<style lang="scss" scoped>
@import "../index.scss";
</style>