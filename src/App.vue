<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MyHeader from './components/MyHeader.vue';
import MyNav from './components/MyNav.vue';
import MyFooter from './components/MyFooter.vue';
</script>













<template>
    	<MyNav/>
        
        <MyHeader/>
        
        <RouterView></RouterView>
    
        <MyFooter/> 
    
</template>


