<script>
import axios from 'axios';
export default{
    data(){
        return{
            projects:[],
            current_Page:1,
            lastPage:1,
            loading: false,
        }
    },

    created() {
        this.getProjects();

    },

    methods:{
        getProjects(){
            this.loading=true,
            axios
            .get('http://localhost:8000/api/projects', {
                params:{
                    page:this.current_Page,
                }
            })
            .then(res=>{
                console.log(res);
                this.projects = res.data.data;
                console.log(this.projects);
                this.lastPage = res.data.last_page;

                this.loading=false;

            });

        },
        NextPage(mode){
            if(!this.loading){

                if(mode == '-'){
                    this.current_Page--
                    console.log(this.current_Page);
                    if(this.current_Page < 1){
                        this.current_Page = this.lastPage
                        console.log(this.current_Page);
                    }
                    this.getProjects();

                }
                else if (mode == '+'){
                    this.current_Page++
                    console.log(this.current_Page);
                    if(this.current_Page > this.lastPage){
                        this.current_Page = 1
                        console.log(this.current_Page);
                    }
                    this.getProjects();

                }
            }

        },
        
    }

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
        <div class="button-container">
            <button v-on:click="NextPage('-')">
                indietro
            </button>
            <button v-on:click="NextPage('+')">
                avanti
            </button>
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

    .button-container{
        display:flex;
        justify-content: space-between;
        padding: 0 40px 0 0;
    }
</style>
