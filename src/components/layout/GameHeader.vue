<template>
    <header class="fixed left-0 top-0 w-full h-12 bg-blue-300 z-10 flex items-center px-6">
        <div class="justify-self-end">
            <button @click="logout" class="text-white font-bold mr-4">Logout</button>
            <router-link
                to="city"
                class="text-white font-bold"
            >Go to cities</router-link>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('logout')
        }
    }
}
</script>
