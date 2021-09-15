<template>
    <div class="comment">
          <Header v-if="connected"/>
          <Comments v-if="connected"/>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Comments from '@/components/Comments.vue'

export default {
  name: 'Comment',

  components: {
    Header,
    Comments
   
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
  }}
</script>
