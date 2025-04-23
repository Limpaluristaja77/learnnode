<script setup>

import 'leaflet/dist/images/marker-icon-2x.png'
import 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/images/marker-icon.png'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useId, onMounted, watch } from 'vue';

const { center, zoom } = defineProps(['center', 'zoom']);
const id = 'map-' + useId();
let map;
onMounted(() => {
    map = L.map(id).setView(center, zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([59.33534147342539, 25.15247708130768]).addTo(map);
    var latlngs = [[59.335332268985255, 25.152326705288193], [59.33541116811839, 25.152580286588083], [59.335338776137185, 25.152656839433337], [59.33526231702326, 25.152411232388157]];

    var polygon = L.polygon(latlngs, { color: 'red' }).addTo(map);
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

