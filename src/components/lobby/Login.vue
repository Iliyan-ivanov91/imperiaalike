<template>
    <div class="max-w-sm w-full bg-white rounded-xl shadow-md p-6 flex flex-col space-y-8 relative pt-12">
        <div class="absolute top-0 left-0 transform -translate-y-1/2 w-full z-10 flex items-center justify-center">
            <div class="bg-white rounded-full p-4">
                <img class="w-36" src="../../assets/logo.png" alt="">
            </div>
        </div>
        <h1 class="text-center font-bold text-xl">Login</h1>
        <form @submit.prevent class="flex flex-col space-y-6">
            <div v-if="error" class="bg-red-600 w-full rounded text-white text-center p-4">
                {{error.message}}
            </div>
            <div class="">
                <input name="email" 
                class="border-b pb-2 border-gray-300 w-full text-center focus:border-green-300" 
                v-model.trim="formData.email" 
                type="email" 
                placeholder="Enter your email">
            </div>
            <div>
                <input 
                class="border-b pb-2 border-gray-300 w-full text-center focus:border-green-300" 
                v-model.trim="formData.password" 
                type="password" 
                placeholder="Enter your password">
            </div>
            <div class="text-center">
                <button @click="login()" class="px-6 py-2 bg-green-500 text-white font-bold rounded-md w-full uppercase" :disabled="loading">
                    <span v-if="!loading">Sign in</span>
                    <span v-else><font-awesome-icon :icon="['fas', 'spinner']" class="fa-spin" /> Loading</span>
                </button>
            </div>
        </form>
        <div class="mt-4 py-4">
            <div class="text-center uppercase text-xs text-gray-500">Don't have an account? <button @click="$emit('switch')" class="text-green-500 uppercase font-bold">Register</button></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData:{
                email:"",
                password:"",
            }
        }
    },
    computed: {
        error () {
            return this.$store.getters.error
        },
        loading () {
            return this.$store.getters.loading
        }
    },
    methods: {
        login() {
            this.$store.dispatch('login', {
                email: this.formData.email,
                password: this.formData.password
            })
        },
        switchForm() {
            this.$emit("switchForm")
        }
    }
}
</script>
