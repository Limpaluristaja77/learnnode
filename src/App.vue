<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';
import Modals from './pages/Modals.vue'
import ToDo from './pages/ToDo.vue'
let titels = ['ToDo', 'Modals'];
let contents = [ToDo, Modals];
let activeTab = ref(0);
function change(key) {
    console.log(key);
    activeTab.value = key;
}
</script>

<template>
    <Tabs :items="titels" @change="change"></Tabs>
    <component :is="contents[activeTab]"></component>


</template>

<style></style>
