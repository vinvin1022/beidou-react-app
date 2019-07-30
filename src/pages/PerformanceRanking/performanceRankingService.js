
import { post } from '../../service/request'
import apiConfig from '../../apiConfig'

const dateTypes = [
  // { optionId: "", optionName: "全部" },
  { optionId: "1", optionName: "今天" },
  { optionId: "2", optionName: "昨天" },
  { optionId: "3", optionName: "本周" },
  { optionId: "4", optionName: "上周" },
  { optionId: "5", optionName: "本月" },
  { optionId: "6", optionName: "上月" }
];
const typesTabs = [
  { title: "模式", type: "0" },
  { title: "事业部", type: "1" },
  { title: "军团", type: "2" },
  { title: "小组", type: "3" },
  { title: "个人", type: "4" }
];



/**
 * 获取模式
 * @param {} params 
 */
function queryPattern(params = {}) {
  return post(apiConfig.performanceRanking.queryPattern, params)
}

/**
 * 查询业绩排名
 * @param {} params 
 */
function queryOrderRank(params = {}) {
  return post(apiConfig.performanceRanking.queryOrderRank, params)
}

export { dateTypes, typesTabs, queryPattern, queryOrderRank }



