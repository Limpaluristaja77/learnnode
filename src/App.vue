<script setup>
import { RouterView } from 'vue-router';
import Tabs from './components/Tabs.vue';

</script>

<template>
    <Tabs></Tabs>
    <div class="container">
        <section class="section">
            <RouterView></RouterView>
        </section>
    </div>
</template>

<style></style>
