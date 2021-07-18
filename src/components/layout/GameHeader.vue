<template>
    <div>
        <header class="fixed left-0 top-0 bg-bronze-300 z-50 flex items-center px-6 py-3 rounded-br-lg border-b border-r border-yellow-200 shadow-md ">
            <div class="justify-self-end">
                <button @click="logout" class="mr-4 font-bold hover:text-bronze-500 text-bronze-200">Logout</button>
                <router-link
                    to="city"
                    class="font-bold hover:text-bronze-500 text-bronze-200"
                >Go to cities</router-link>
            </div>
        </header>
        <div class="fixed right-0 top-0 z-50 flex items-center px-6 py-2 rounded-bl-lg border-b border-l border-yellow-200 shadow-md bg-bronze-300">
            <div class="flex py-1 bg-yellow-200 px-4 rounded-full shadow-inner border border-yellow-500 items-center mr-6"
            v-tooltip="{content: 'Gold', delay:{show: 1000, hide: 100}}">
                <img src="../../assets/gold.png" class="w-7 mr-6" alt="Gold">
                <span class="text-bronze-500 font-bold text-lg">100000</span>
            </div>
            <div class="flex py-1 bg-yellow-200 px-4 rounded-full shadow-inner border border-bronze-400 items-center mr-6"
            v-tooltip="{content: 'Experience gems', delay:{show: 1000, hide: 100}}">
                <img src="../../assets/exp-gem2.png" class="w-7 mr-6" alt="Experience gems">
                <span class="text-bronze-400 font-bold text-lg">100</span>
            </div>
            <div>
                <button class="bg-bronze-400 text-white py-1 px-4 rounded-full border border-red-800 font-bold">Get Crystals</button>
            </div>
        </div>
    </div>
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