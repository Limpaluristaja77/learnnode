<script setup>
import { ref } from 'vue';
import LeafletMap from '../components/LeafletMap.vue';
let center = ref([59.4270041078148, 24.743395645775344]);
let zoom = ref(19);
</script>
<template>
    <button class="button is-primary" @click="center=[59.33534147342539, 25.15247708130768]">Go Home</button>
    <input type="range" min="1" max="18" v-model="zoom">
    <LeafletMap :center="center" :zoom="zoom"> </LeafletMap>
    <LeafletMap :center="[24.4270041078148, 59.743395645775344]" :zoom="18"> </LeafletMap>
</template>
