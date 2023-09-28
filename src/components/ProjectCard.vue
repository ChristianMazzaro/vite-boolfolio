<script>
import axios from 'axios';
export default{
    data(){
        return{
            projects:[],
        }
    },

    created() {
        axios
        .get('http://localhost:8000/api/projects')
        .then(res=>{
            console.log(res);
            this.projects = res.data;
            console.log(this.projects);

        });
    },

}
</script>

<template>
    <section>
        <div class="projects_container">
            <div v-for="project in projects" :key="project.id">
                <h3>
                    titolo del progetto: 
                    {{ project.title }}
                </h3>
                <hr>
                <h5>
                    contenuto del progetto:
                </h5>
                <p>
                    {{ project.content }}
                </p>
            </div>
        </div>
    </section>
</template>

<style>

    h3{
        color: rebeccapurple;
    }
    p{
        color: green;
    }

    .projects_container{
        display: flex;
        flex-wrap: wrap;
    }

    .projects_container > *{
        width: calc((100% / 3) - 40px);
        border: 3px solid grey;
        margin: 10px;
    }
</style>
