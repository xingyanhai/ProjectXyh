import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Center from '../views/center/center.vue'
import Module1 from '../views/module1/index.vue'
import Detail1 from '../views/module1/detail.vue'
import Module2 from '../views/module2/index.vue'
import Detail2 from '../views/module2/detail.vue'
import Module3 from '../views/module3/index.vue'
import Module4 from '../views/module4/index.vue'

Vue.use(Router)

const Index = () => import('../views/index.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '',
          name: 'center',
          component: Center,
          redirect: '/module1',
          children: [
            {
              path: 'module1',
              name: 'module1',
              component: Module1,
              meta: {
                isShowNav: true
              }
            },
            {
              path: '/module2',
              name: 'module2',
              component: Module2,
              meta: {
                isShowNav: true
              },
              children: [{
                path: 'detail',
                name: 'detail',
                component: Detail2
              }]
            },
            {
              path: '/module3',
              name: 'module3',
              component: Module3,
              meta: {
                isShowNav: true
              }
            },
            {
              path: '/module4',
              name: 'module4',
              component: Module4,
              meta: {
                isShowNav: true
              }
            },
            {
              path: 'detail1',
              name: 'detail1',
              component: Detail1
            }
          ]
        },
        {
          path: '/hello',
          name: 'Hello',
          component: HelloWorld
        }
      ]
    }
  ]
})
