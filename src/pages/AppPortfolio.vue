
<script>
// import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue'

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
    <ProjectCard/>
</template>

<style scoped>
    h2{
        color: darkred;
    }
</style>