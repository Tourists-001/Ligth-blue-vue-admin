import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login/Login'
import Layout from '@/components/Layout/Layout'
import Dashboard from '@/pages/Visits/Visits.vue'
import Typography from '@/pages/Typography/Typography'
import Tables from '@/pages/Tables/Tables'
import Notifications from '@/pages/Notifications/Notifications'
import Maps from '@/pages/Maps/Maps'
import Charts from '@/pages/Charts/Charts'
import Icons from '@/pages/Icons/Icons'
import ErrorPage from '@/pages/Error/Error'
Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/login',
    component: Login,
    name: 'Login',
  }, {
    path: '/app',
    component: Layout,
    name: 'Layout',
    children: [{
      path: 'dashboard',
      component: Dashboard,
      name: 'Dashboard'
    }, {
      path: 'typography',
      component: Typography,
      name: 'Typography'
    }, {
      path: 'tables',
      component: Tables,
      name: 'Tables'
    }, {
      path: 'notifications',
      component: Notifications,
      name: 'Notifications'
    }, {
      path: 'components/charts',
      component: Charts,
      name: 'Charts'
    }, {
      path: 'components/maps',
      component: Maps,
      name: 'Maps'
    }, {
      path: 'components/Icons',
      component: Icons,
      name: 'Icons'
    }]
  },{
    
      path: '*',
      name: 'Error',
      component: ErrorPage,
    
  }]
});