<script>
export default{

}
</script>

<template>
    <header>
        <h2>
            Header Component
        </h2>

        <nav>
            <div class="nav_container">
                <ul>
                    <li>
                        <router-link :to="{name:'home'}">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'portfolio'}">Portfolio</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style scoped>
    h2{
        color: darkslateblue;
    }
    .nav_container{
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }
    
    li{
        list-style-type: none;
        display: inline-block;
        margin-right: 20px;
    }

</style>
