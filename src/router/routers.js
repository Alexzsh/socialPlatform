import PersonalInfo from '../components/pages/personalInfo'
import Login from '../components/pages/login.vue'
import personInformation from '../components/common/personInfomation'
import fullText from '../components/common/fullText'
import momentStream from '../components/common/momentStream'
import notifyContent from '../components/common/notifyContent'

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
},
{
  path: '/login',
  name: 'Login',
  component: Login
},
{
  path: '/personInformation',
  name: 'personInformation',
  component: personInformation
},
{
  path: '/fullText',
  name: 'fullText',
  component: fullText
},
{
  path:'/momentStream',
  name:'momentStream',
  component:momentStream
},
{
  path:'/notifyContent',
  name:'notifyContent,',
  component:notifyContent
}
]
export default routers
