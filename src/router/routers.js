import PersonalInfo from '../components/pages/personalInfo'
import Login from '../components/pages/login.vue'
import personInformation from '../components/common/leftpersonInfomation'
import fullText from '../components/common/fullText'
import momentStream from '../components/common/momentStream'
import notifyContent from '../components/common/notifyContent'
import floatingWindow from '../components/common/floating_window'
import index from '../components/pages/index'
const routers = [{
  path: '/',
  redirect: '/login'

},
{
  path: '/index',
  name: 'index',
  component: index
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
  path: '/momentStream',
  name: 'momentStream',
  component: momentStream
},
{
  path: '/notifyContent',
  name: 'notifyContent,',
  component: notifyContent
},
{
  path: '/floatingWindow',
  name: 'floatingWindow',
  component: floatingWindow
}
]

export default routers
