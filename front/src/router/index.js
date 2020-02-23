import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/dashboard/Index.vue'
import HomeIndex from '@/views/dashboard/children/home/Index'
import CategoriesIndex from '@/views/dashboard/children/categories/Index'
import CategoriesShow from '@/views/dashboard/children/categories/Show'
import CategoriesNew from '@/views/dashboard/children/categories/New'
import MoviesIndex from '@/views/dashboard/children/movies/Index'
import MoviesShow from '@/views/dashboard/children/movies/Show'
import MoviesNew from '@/views/dashboard/children/movies/New'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      component: Dashboard,

      children: [
        {
          path: '/',
          name: 'home_path',
          component: HomeIndex
        },
        {
          path: '/categories',
          name: 'categories_path',
          component: CategoriesIndex
        },
        {
          path: '/categories/:id',
          name: 'category_path',
          component: CategoriesShow
        },
        {
          path: '/category/new',
          name: 'new_category_path',
          component: CategoriesNew
        },
        {
          path: '/movies',
          name: 'movies_path',
          component: MoviesIndex
        },
        {
          path: '/movies/:id',
          name: 'movie_path',
          component: MoviesShow
        },
        {
          path: '/movie/new',
          name: 'new_movie_path',
          component: MoviesNew
        }
      ]
    }
]

const router = new VueRouter({
  routes
})

export default router
