<script setup >

    import { onBeforeMount, ref } from "vue";
    import axios from "axios"
    import { useRouter } from "vue-router";

    const router = useRouter()
    const localMonsters = ref([])
    const API_ENDPOINT = "https://metallo.ew.r.appspot.com/monsters?limit=100"

    onBeforeMount(async ()=>{
      const monsters = await axios.get(API_ENDPOINT)
      console.log(monsters)
      localMonsters.value = monsters.data
    })

    const goToDetails = (monsterId)=>{
      router.push({
        name:'Details',
        params:{
          id: monsterId
        }
      })
    }

</script>



<template>
    
    <section data-bs-version="5.1" class="features05 cid-sRQcud4Jjb mt-6" id="features05-2">

        <div class="container-fluid">
            <div class="wrapper">
                <div class="row title-section">
                    <h2 class="mbr-section-title mbr-fonts-style display-2"><strong>Monsters</strong></h2>
                </div>
                <div class="row justify-content-center">
                    <div class="card">
                        <table class="table table-sm">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="monster in localMonsters"
                            :key="monster._id">
                                <th scope="row">{{ monster._id }}</th>
                                <td>{{ monster.name }}</td>
                                <td>{{ monster.category }}</td>
                                <td><button @click="goToDetails(monster._id)" type="button" class="btn btn-primary btn-sm m-0">Voir 👀</button> </td>
                            </tr>
                            
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>