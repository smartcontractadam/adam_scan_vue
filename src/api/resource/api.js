import request from "@/api/base/request";

//获取子节点每日曲线
export const getNodeLinkGraph = (params) => {
    return request.post('/api/scan/getNodeCountTrend',params).then(res => res);
}

//获取每日盈利曲线
export const getProfitLinkGraph = (params) => {
    return request.post('/api/scan/getProfitTrend',params).then(res => res);
}

//获取资产相关信息
export const getAccDetailInfo = (params) => {
    return request.post('/api/scan/getAccDetailInfo',params).then(res => res);
}
