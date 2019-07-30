
import { post } from "../../service/request";
import apiConfig from "../../apiConfig";
const typesTabs = [
    {
        title: "日数据",
        h1Title: "每日实时业绩日报",
        value: 1
    },
    {
        title: "月数据",
        h1Title: "每月实时业绩月报",
        value: 2
    }
]

function queryWarNews(params = {}) {
    return post(apiConfig.home.queryWarNews, params)
}



export { typesTabs, queryWarNews }