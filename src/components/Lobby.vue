<template>
    <div class="lobby-wrapper w-full h-full min-h-screen flex items-center justify-center">
        <div class="p-4 h-full w-full flex items-center justify-center">
            <Register v-if="showRegister" @switch="showRegister = false"></Register>
            <Login v-else @switch="showRegister = true"></Login>
        </div>
    </div>
</template>

<script>
import Register from "./lobby/Register.vue";
import Login from "./lobby/Login.vue";
export default {
    components: {
        Register,
        Login,
    },
    data() {
        return {
            showRegister: true
        }
    },
}
</script>

<style scoped>
.lobby-wrapper {
    background: url("../assets/lobby-bg.jpg");
    background-size:cover;
    background-position: center;;
}
</style>