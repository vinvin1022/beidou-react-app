
/* eslint-disable */
import homeApi from './homeApi'
import authApi from './authApi'
import performanceRankingApi from './performanceRankingApi'


const apiConfig = {
    home: { ...homeApi },
    auth: { ...authApi },
    performanceRanking: { ...performanceRankingApi }

}
export default apiConfig