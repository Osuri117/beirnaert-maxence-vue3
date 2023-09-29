<script setup>
import { RouterLink } from 'vue-router';


const nav = [
    {
    buttonName: "Home",
    routePath: "/",
    id: 1
    }, 
    {
    buttonName: "Liste",
    routePath: "/liste",
    id: 2
    }
]


</script>

<template>

       <section data-bs-version="5.1" class="menu menu01 cid-sRQjR1mphb" id="menu01-7">
        <nav class="navbar navbar-fixed-top navbar-expand-lg container-fluid">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav nav-dropdown navbar-nav-top-padding ms-auto" data-app-modern-menu="true">
                        <li class="nav-item" v-for="nav in nav"
                        :key="nav.id">
                            <RouterLink :to="nav.routePath" class="nav-link link text-black text-primary display-7" >
                                {{ nav.buttonName }}
                            </RouterLink>
                        </li>
                    </ul>
                    
                    <div class="navbar-buttons align-center mbr-section-btn"><a class="btn btn-primary display-4" href="index.html#form02-8">CONTACT US</a></div>
                </div>
            </div>
        </nav>
    </section> 

</template>