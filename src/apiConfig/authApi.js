/* eslint-disable */
import seviceName from './serviceConfig'
const authApi = {
    logout: `${seviceName.auth}/api/logout`,
    signin: `${seviceName.auth}/api/notcheck/signin`
}
export default authApi