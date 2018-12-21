import MainIndex from '../components/HelloWorld.vue'
import PersonalInfo from '../components/pages/personalInfo'
import Login from '../components/pages/login.vue'

const routers = [{
  path: '/',
  redirect: '/index'
},
{
  path: '/index',
  name: 'main-index',
  component: MainIndex
},
{
  path: '/PersonalInfo',
  name: 'PersonalInfo',
  component: PersonalInfo
},
{
  path: '/login',
  name: 'Login',
  component: Login
}

]

export default routers
