<template>
  <div class="post">
    <LoginForm v-if="!connected"/>
    <Header v-if="connected"/>
     <OnePost v-if="connected"/>
    <!-- <Comments v-if="connected"/> -->
  </div>
</template>

<script>

import LoginForm from '@/components/LoginForm.vue';
import Header from '@/components/Header.vue';
import OnePost from '@/components/OnePost.vue';

export default {
  name: 'Post',

  components: {
    Header,
    LoginForm,
    OnePost,
   
  },

  data() {
    return{
      connected: true,
      authorized: true
    };
  },

  methods: {
    checkConnected(){
      if(localStorage.user !== undefined){
        this.connected = true;
      }
      else if(localStorage.user == undefined){
        this.connected = false;
      }
    }
  },

  created(){
    this.checkConnected()
  }
}
</script>
