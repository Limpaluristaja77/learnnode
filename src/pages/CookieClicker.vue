<script setup>
import { computed, onUnmounted, ref } from 'vue';

let cookie = ref(0);

let buildings = ref([
    { name: 'Cursor', price : 15, count: 0, cps: 0.1 },
    { name: 'Grandma', price : 100, count: 0, cps: 1 },
    { name: 'Farm', price : 1000, count: 0, cps: 10 },
    { name: 'Factory', price : 10000, count: 0, cps: 100 },

]);
 
let cps = computed(() => {
    return buildings.value.reduce((total, building) => total+building.cps*building.count, 0);

});



const cpsInterval = setInterval(() => {
    cookie.value+=cps.value
    document.title = `🍪 ${+cookie.value.toFixed(1)} cookies`;
}, 1000);




function buyBuilding(building) {
    cookie.value -= building.price;
    building.price += Math.ceil(building.price * 0.15);
    building.count ++;
}
onUnmounted(() =>{
    clearInterval(cpsInterval);
});
</script>

<template>
    <div class="columns">
        <div class="column is-3 has-text-centered has-background-primary">
            <h1 class="is-size-1"><b>Cookies: {{ +cookie.toFixed(1) }}</b></h1>
            <h1 class="is-size-1"><b>CPS: {{ +cps.toFixed(1) }}</b></h1>
            <figure class="image is-square m-5">
                <img @click="cookie++" class="is-rounded" src="https://www.freeiconspng.com/uploads/cookie-png-transparent-images-background-23.png" />
            </figure>
        </div>
        <div class="column is-7 has-background-info">Second column</div>
        <div class="column is-2 has-background-warning">
            <button class="button is-large is-fullwidth is-primary" v-for="building in buildings" :disabled="cookie<building.price" @click="buyBuilding(building)"> 
                {{ building.name }} 🍪{{ building.price }} #{{ building.count }}
            </button>
        </div>
    </div>

</template>