<script setup>

import 'leaflet/dist/images/marker-icon-2x.png'
import 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/images/marker-icon.png'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {useId, onMounted, watch } from 'vue';

const {center, zoom} = defineProps(['center', 'zoom']);
const id = 'map-' + useId();
let map;
onMounted(() => {
    map = L.map(id).setView(center, zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([59.4270041078148, 24.743395645775344]).addTo(map);
});

watch(() => center, (center, oldCenter) => {
    console.log(center, oldCenter);
    map.panTo(center);
})
watch(() => zoom, (zoom) => {
    map.setZoom(zoom);
})
</script>
<template>
    <div :id="id"></div>
</template>

<style scoped>
div {
    height: 90vh;
}
</style>