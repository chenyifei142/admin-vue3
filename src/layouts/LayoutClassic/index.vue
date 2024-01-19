<script setup lang='ts'>
import {ref, reactive} from 'vue'
import ToolBarLeft from "@/layouts/components/Header/ToolBarLeft.vue";

</script>

<template>
    <el-container class="layout">
        <el-header>
            <!-- 头部左侧 -->
            <div class="header-lf">
                <!-- logo标题 -->
                <div class="logo flx-center">
                    <img class="logo-img" alt="logo" src="@/assets/images/logo.svg">
                    <span class="logo-text">Geeker Admin</span>
                </div>
                <ToolBarLeft/>
            </div>
            <div class="header-ri">

            </div>
        </el-header>
        <el-container>
            <el-aside>Aside</el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>