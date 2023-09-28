<script>
// import axios from 'axios';
import ProjectCard from './ProjectCard.vue'

export default{
    data(){
        return{
            // projects:[],

        }
    },

    // created() {
    //     axios
    //     .get('http://localhost:8000/api/projects')
    //     .then(res=>{
    //         console.log(res);
    //         this.projects = res.data;
    //         console.log(this.projects);

    //     });
    // },

    components:{
        ProjectCard,
    }
}
</script>

<template>
    <main>
        <div>
            <h2>
                Main Component
            </h2>
        </div>
        <ProjectCard/>
    </main>
</template>

<style scoped>
    h2{
        color: darkred;
    }
</style>
