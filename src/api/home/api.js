import request from "../base/request"
//获取全网总算力信息
export const getAllPledgeInfo = (params) => {
    // return request.post('/v1/getTestData',params).then(res => res.data);
    return request({
        url: '/api/scan/getAllPledgeInfo',
        method: 'post',
        params
    })
}
//查询列表
export const getSortList = (params) => {
    return request.post('/api/scan/getSortList',params).then(res => res);
    // return request({
    //     url: '/api/scan/getSortList',
    //     method: 'post',
    //     params
    // })
}
//获取列表中子节点数
export const getNodeCount = (params) => {
    return request.post('/api/scan/getNodeCount',params).then(res => res);
    // return request({
    //     url: '/api/scan/getNodeCount',
    //     method: 'post',
    //     params
    // })
}
//获取列表中产币量
export const getProfitCount = (params) => {
    return request.post('/api/scan/getProfitCount',params).then(res => res);
    // return request({
    //     url: '/api/scan/getProfitCount',
    //     method: 'post',
    //     params
    // })
}
//查询类型列表
export const getAdamTypeList = (params) => {
    return request.post('/v1/syncUserAsset',params).then(res => res);
}
//获取曲线图数据
export const getLinkGraph = (params) => {
    return request.post('/api/scan/getPledgeTrend',params).then(res => res);
    // return request({
    //     url: '/api/scan/getProfitTrend',
    //     method: 'post',
    //     params
    // })
}



//查询列表
export const getMinerSortList = (params) => {
    return request.post('/api/scan/getNodeList',params).then(res => res);
    // return request({
    //     url: '/api/scan/getSortList',
    //     method: 'post',
    //     params
    // })
}
//获取列表中子节点数
export const getMinerNodeCount = (params) => {
    return request.post('/api/scan/getMinerWorkCount',params).then(res => res);
    // return request({
    //     url: '/api/scan/getNodeCount',
    //     method: 'post',
    //     params
    // })
}
//获取列表中产币量
export const getMinerProfitCount = (params) => {
    return request.post('/api/scan/getNodeProfitCount',params).then(res => res);
    // return request({
    //     url: '/api/scan/getProfitCount',
    //     method: 'post',
    //     params
    // })
}
