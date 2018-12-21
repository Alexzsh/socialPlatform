import PersonalInfo from '../components/pages/personalInfo'

const routers = [{
  path: '/',
  redirect: '/index'
},
{
  path: '/index',
  name: 'main-index',
  component: PersonalInfo
},
{
  path: '/PersonalInfo',
  name: 'PersonalInfo',
  component: PersonalInfo
}

]

export default routers
