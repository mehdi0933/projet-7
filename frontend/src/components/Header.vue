<template>
    <div class="header">
        <router-link to='/'>
        <h1>
            <img src="/assets/img/icon.png" alt="Groupomania logo">
        </h1>
        </router-link>

        <nav>
            <div id="disconnect-btn" @click = disconnect()>Se déconnecter</div>
        </nav>
    </div> 
</template>

<script>
export default {
    name: 'Header',

    methods: {
        disconnect(){
            localStorage.removeItem('user');
            location.href = "/";
        }
    }
}
</script>

<style scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 70px 20px 70px;
    }

    .header img{
        width: 10%;
        margin-left: -80%;
    }

    nav{
        display: flex;
    }

    nav div{
        margin-left: 30px;
        font-weight: bold;
        cursor: pointer;
        transition-duration: .2s;
    }

    .fas{
        font-size: 1.5rem;
    }

    nav div:hover{
        color: rgb(117, 117, 117);
    }

   
</style>