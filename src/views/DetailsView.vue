<script setup >

    import { onBeforeMount, ref } from "vue";
    import axios from "axios"
    import { useRoute } from "vue-router";

    const route = useRoute()
    const monsterId = route.params.id
    const monster = ref({})
    const API_ENDPOINT = `https://metallo.ew.r.appspot.com/monsters/${monsterId}`

    onBeforeMount(async ()=>{
      const monsters = await axios.get(API_ENDPOINT)
      const {data, status} = monsters
        if(status===200){
            monster.value = data
        }else{
        console.error("OUPS ♦♦♦")
        }
    })

    console.log(monster)






</script>

<template>
    

    <section data-bs-version="5.1" class="cid-sRQoPK3EDs" >
        <div class="container-fluid d-flex align-items-center justify-content-center">
            <div class="mx-auto">
                <div class="card border-primary mb-3" style="max-width: 32rem;">
                    <div class="card-header">{{ monster.name}}</div>
                    <img :src="monster.image"/>
                    <div class="card-body text-primary">      
                        <h5 class="card-title">{{ monster.name }}</h5>
                        <p class="card-text">{{ monster.description }}</p>
                        
                        <ul class="list mt-2">
                    
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    </section>


</template>