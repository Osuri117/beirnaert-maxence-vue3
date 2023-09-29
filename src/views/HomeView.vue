<script setup >
        import { onBeforeMount, ref } from "vue";
    import axios from "axios"
    import { useRouter } from "vue-router";

    const router = useRouter()

    const monster = ref()
    const API_ENDPOINT = "https://metallo.ew.r.appspot.com/monsters?limit=4"

    onBeforeMount(async ()=>{
        const localMonsters = await axios.get(API_ENDPOINT)
        const {data, status} = localMonsters

    if(status===200){
        monster.value = data
    }else{
      console.error("OUPS ♦♦♦")
    }
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

    <section data-bs-version="5.1" class="features05 cid-sRQcud4Jjb" id="features05-2">

        <div class="container-fluid">
            <div class="wrapper">
                <div class="row title-section">
                    <h2 class="mbr-section-title mbr-fonts-style display-2"><strong>Monsters</strong></h2>
                </div>
                <div class="row justify-content-center">       
                    <div class="col-4 col-md-2 mb-2 mb-md-5" v-for="monster in monster"
                    :key="monster._id">
                        <div class="card">
                            <img :src="monster.image" alt="">
                            <div class="card-body">
                                <h3 class="card-title mbr-section-subtitle mbr-fonts-style"><strong>{{ monster.name }} </strong></h3>
                                <div class="list mbr-fonts-style display-7">
                                </div>
                                <div class="mbr-section-btn"><a @click="goToDetails(monster._id)" class="justify-content-center btn btn-primary display-4">
                                    VOIR</a></div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </section>



</template>