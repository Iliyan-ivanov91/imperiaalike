<template>
    <div class="tile relative" 
    :class="{'player' : this.player.isPlayer}" 
    v-tooltip="{content: 'This is tooltip!', delay:{show: 1000, hide: 100}}">
        <img :src="getTile(this.tile)" alt="" class="absolute left-0 top-0 w-full h-full">
        <div class="h-full" v-if="this.player.isPlayer">
            <div class="flex items-end h-full">
                <div class="relative z-10 w-full p-4 bg-blue-300 font-bold text-center uppercase">
                    <span>{{this.player.name}}</span>
                </div>
            </div>
            <div class="absolute left-0 top-0 w-full h-full bg-black text-white z-10">
                <ul class="w-full flex flex-wrap">
                    <li class="w-full border-b border-blue-300 bg-blue-300 p-2 uppercase font-bold text-center text-white">{{this.player.name}}</li>
                    <li class="w-full border-b border-white p-2 uppercase font-bold text-center hover:text-yellow-300">Attack</li>
                    <li class="w-full border-b border-white p-2 uppercase font-bold text-center hover:text-yellow-300">Terrain info</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['tile', 'player'],
    methods: {
        getTile(type) {
            var tile = require.context('../../assets/tiles/', false, /\.png$/);
            return tile('./' + type + ".png");
        }
    }
}
</script>

<style scoped>
.tile {
    width:200px;
    height:200px;
}
.player {
    cursor:url("../../assets/cursor32x32.png") 0 0, auto;
}
</style>