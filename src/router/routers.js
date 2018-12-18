import MainIndex from '../components/HelloWorld.vue'
import PersonalInfo from '../components/pages/personalInfo'
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
}

]

export default routers
