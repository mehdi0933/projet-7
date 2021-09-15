import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Post from '../views/Post.vue'; 
import Comment from '../views/Comment.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/comment/:id',
      name: '/Comment',
      component: Comment
  },
   {
    path: '/post/:id',
    name: '/Post',
    component: Post
  },
  
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;