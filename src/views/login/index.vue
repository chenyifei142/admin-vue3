<script setup lang='ts'>

import LoginForm from "./components/LoginForm.vue";
</script>

<template>
    <div class="login-container flex-center">
        <div class="login-box">
            <div class="login-left">
                <img class="login-left-img" src="@/assets/images/login_left.png" alt="#">
            </div>
            <div class="login-form">
                <div class="login-logo">
                    <img class="login-icon" src="@/assets/images/logo.png" alt="#">
                    <h2 class="logo-text">管理后台</h2>
                </div>
                <LoginForm/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>