<script>
import axios from 'axios';
export default{
    data(){
        return{
            title: 'Progetto',
            project: {},
            loading: false,
        }
    },

    created() {
        this.getProject();

    },

    methods:{
        getProject(){
            this.loading=true;
            axios
            .get('http://localhost:8000/api/projects/' + this.$route.params.id)
            .then(res=>{
                console.log(res);
                this.project = res.data;
                console.log(this.project);
                this.loading=false;

            });

        },
        
    }


}
</script>

<template>
    <div>
        <h1>
            {{ title }}
        </h1>
    </div>
    <div class="single-project-container">
        <div>
            <h2>
                {{ project.title }}
            </h2>
        </div>
        <div>
            {{ project.content }}
        </div>
    </div>
</template>

<style scoped>
    .single-project-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid grey;
        padding: 20px;
    }
</style>