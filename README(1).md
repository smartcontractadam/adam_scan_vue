# 浏览器接口
IP: 47.241.183.80

# 首页
### 1.全网算力相关信息

* URL： /scan/getAllPledgeInfo
* 参数：    
* DEMO
    - http://ip:10001/api/scan/getAllPledgeInfo
* 返回值：	   
    - total_power：全网总算力
    - total_adam：全网质押量
    - total_node：活跃节点数
    - rate：当前算力比
    - profit_24：24小时产出量
    - power_24：24小时新增算力    
* 用例：
  curl -X POST "http://127.0.0.1:10001/api/scan/getAllPledgeInfo" -H "accept: application/json"       
```json
{
  "errorCode": 1000,
  "message": "处理正确",
  "content": {
    "total_power": 50013,
    "total_adam": 1500350,
    "total_node": 3,
    "rate": "30",
    "profit_24": 3397.2602739726026,
    "power_24": 10
  }
}
```

### 2.获取ADAM价格

* URL： https://bsc.api.0x.org/swap/v1/price?sellToken=0xdde077002982956DF24E23E3f3743BA5e56929fe&buyToken=0x55d398326f99059ff775485246999027b3197955&sellAmount=10000000
* 参数：    
* DEMO
    - https://bsc.api.0x.org/swap/v1/price?sellToken=0xdde077002982956DF24E23E3f3743BA5e56929fe&buyToken=0x55d398326f99059ff775485246999027b3197955&sellAmount=10000000
* 返回值：	   
    - price：价格
* 用例：
    
```json

```
### 3.每日全网算力趋势

* URL： /scan/getProfitTrend
* 参数：    
    - select_day：查询天数(7/30/180)
* DEMO
    - http://ip:10001/api/scan/getProfitTrend
* 返回值：list	   
    - power：质押算力
    - time：质押时间  
* 用例：
  curl -X POST "http://127.0.0.1:10001/api/scan/getProfitTrend" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"select_day\": \"7\"}"    
```json
{
  "errorCode": 1000,
  "message": "处理正确",
  "content": [
    {
      "power": "50000",
      "time": "2021-09-04T03:43:00.000Z"
    },
    {
      "power": "10",
      "time": "2021-09-08T03:58:17.000Z"
    },
    {
      "power": "1",
      "time": "2021-09-05T03:40:24.000Z"
    },
    {
      "power": "1",
      "time": "2021-09-05T03:38:25.000Z"
    },
    {
      "power": "1",
      "time": "2021-09-04T09:37:06.000Z"
    }
  ]
}
```

### 4.每日全网算力趋势

* URL： /scan/getProfitTrend
* 参数：    
    - select_day：查询天数(7/30/180)
* DEMO
    - http://ip:10001/api/scan/getProfitTrend
* 返回值：list(返回指定查询天数的全部质押信息)	   
    - power：质押算力
    - time：质押时间  
* 用例：
  curl -X POST "http://127.0.0.1:10001/api/scan/getProfitTrend" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"select_day\": \"7\"}"    
```json
{
  "errorCode": 1000,
  "message": "处理正确",
  "content": [
    {
      "power": "50000",
      "time": "2021-09-04T03:43:00.000Z"
    },
    {
      "power": "10",
      "time": "2021-09-08T03:58:17.000Z"
    },
    {
      "power": "1",
      "time": "2021-09-05T03:40:24.000Z"
    },
    {
      "power": "1",
      "time": "2021-09-05T03:38:25.000Z"
    },
    {
      "power": "1",
      "time": "2021-09-04T09:37:06.000Z"
    }
  ]
}
```

### 5.排行榜前10（取前10条记录）
### 6.集合列表
### 7.排行榜     
* URL： /scan/getSortList
* 参数：    
    - currentPage：当前页数：从1开始
    - pageSize：每页显示条数（正常10条）
    - address：指定类型：账户地址（备注：""为返回全部）
    - pool_name：指定类型：账户名称（备注：""为返回全部）
* DEMO
    - http://ip:10001/api/scan/getSortList
* 返回值：list(返回指定查询天数的全部质押信息)	   
    - create_time：生成时间
    - address：地址  
    - pool_name：账户名称
    - total_power：总算力  
    说明：算力百分比，用total_power除以每1个接口getAllPledgeInfo（）返回的全网总算力
* 用例：
  curl -X POST "http://127.0.0.1:10001/api/scan/getSortList" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"currentPage\": \"1\", \"pageSize\": \"10\", \"address\": \"0x5FAFc849F873f51d4DbE4bDb81aF649a19dc12DD\", \"pool_name\": \"\"}"    
```json
{
  "errorCode": 1000,
  "message": "处理正确",
  "content": {
    "count": 1,
    "rows": [
      {
        "create_time": "2021-09-10 12:34:56",
        "address": "0x5FAFc849F873f51d4DbE4bDb81aF649a19dc12DD",
        "pool_name": "test123",
        "total_power": "8"
      }
    ]
  }
}
```

### 8.获取排行榜列表中的子节点数
* URL： /scan/getNodeCount
* 参数：       
    - address：账户地址
* DEMO
    - http://ip:10001/api/scan/getNodeCount
* 返回值：  
    - content：子节点数  
* 用例：
  curl -X POST "http://127.0.0.1:10001/api/scan/getNodeCount" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"address\": \"0x5FAFc849F873f51d4DbE4bDb81aF649a19dc12DD\"}"    
```json
{
  "errorCode": 1000,
  "message": "处理正确",
  "content": 1
}
```

### 9.获取排行榜列表中的产币量（ADAM）
* URL： /scan/getProfitCount
* 参数：       
    - address：账户地址
* DEMO
    - http://ip:10001/api/scan/getProfitCount
* 返回值：  
    - count：产币量  
    - lock:锁仓
    - release: 可用余额
* 用例：
  curl -X POST "http://127.0.0.1:10001/api/scan/getProfitCount" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"address\": \"0x5FAFc849F873f51d4DbE4bDb81aF649a19dc12DD\"}"    
```json
{
  "errorCode": 1000,
  "message": "处理正确",
  "content": {
    "release": 1.14627397260274,
    "count": 4.602739726027396,
    "lock": 3.442465753424658
  }
}
```


# 账户详情
### 1.资产统计和算力统计信息在列表中已有

####2.获取每日全网收益趋势
* URL： /scan/getProfitTrend
* 参数：       
    - address：账户地址
    - select_day：天数(7/30/180)
* DEMO
    - http://ip:10001/api/scan/getProfitTrend
* 返回值：list(返回天数的全部信息)	   
    - profit：收益
    - time：生成时间  
 
* 用例：
  curl -X POST "http://127.0.0.1:10001/api/scan/getProfitTrend" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"address\": \"0x5FAFc849F873f51d4DbE4bDb81aF649a19dc12DD\", \"select_day\": \"7\"}"    
```json
{
  "errorCode": 1000,
  "message": "处理正确",
  "content": [
    {
      "profit": "0.3287671232876712",
      "time": "2021-09-10T04:39:24.000Z"
    },
    {
      "profit": "0.3287671232876712",
      "time": "2021-09-10T04:39:24.000Z"
    },
    {
      "profit": "0.3287671232876712",
      "time": "2021-09-10T04:39:24.000Z"
    },
    {
      "profit": "0.3287671232876712",
      "time": "2021-09-10T04:39:24.000Z"
    },
    {
      "profit": "0.3287671232876712",
      "time": "2021-09-10T04:39:24.000Z"
    },
    {
      "profit": "0.3287671232876712",
      "time": "2021-09-10T04:39:24.000Z"
    },
    {
      "profit": "0.3287671232876712",
      "time": "2021-09-10T04:39:24.000Z"
    },
    {
      "profit": "0.3287671232876712",
      "time": "2021-09-10T04:40:46.000Z"
    },
    {
      "profit": "0.3287671232876712",
      "time": "2021-09-10T04:40:46.000Z"
    },
    {
      "profit": "0.3287671232876712",
      "time": "2021-09-10T04:40:46.000Z"
    },
    {
      "profit": "0.3287671232876712",
      "time": "2021-09-10T04:40:46.000Z"
    },
    {
      "profit": "0.3287671232876712",
      "time": "2021-09-10T04:40:46.000Z"
    },
    {
      "profit": "0.3287671232876712",
      "time": "2021-09-10T04:40:46.000Z"
    },
    {
      "profit": "0.3287671232876712",
      "time": "2021-09-10T04:40:46.000Z"
    }
  ]
}
```

####3.获取每日全网子节点趋势
* URL： /scan/getNodeCountTrend
* 参数：       
    - address：账户地址
    - select_day：天数(7/30/180)
* DEMO
    - http://ip:10001/api/scan/getNodeCountTrend
* 返回值：list(返回指定天数的天部信息)	   
    - time：生成时间  
 
* 用例：
  curl -X POST "http://127.0.0.1:10001/api/scan/getNodeCountTrend" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"address\": \"0x5FAFc849F873f51d4DbE4bDb81aF649a19dc12DD\", \"select_day\": \"7\"}"    
```json
{
  "errorCode": 1000,
  "message": "处理正确",
  "content": [
    {
      "time": "2021-09-10T04:23:42.000Z"
    }
  ]
}
```

### 4.获取子节点列表     
* URL： /scan/getNodeList
* 参数：    
    - currentPage：当前页数：从1开始
    - pageSize：每页显示条数（正常10条）
    - address：账户地址（备注：""为返回全部）
    - c_id：CID矿机编号（备注：""为返回全部）
* DEMO
    - http://ip:10001/api/scan/getNodeList
* 返回值：list(返回指定查询天数的全部质押信息)	   
    - create_time：生成时间
    - address：地址  
    - m_no：矿机编号CID
    - serial_number：矿机ID
    - pledge_power：当前算力
   
* 用例：
 curl -X POST "http://127.0.0.1:10001/api/scan/getNodeList" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"currentPage\": \"1\", \"pageSize\": \"10\", \"address\": \"0x5FAFc849F873f51d4DbE4bDb81aF649a19dc12DD\", \"c_id\": \"\"}"    
```json
{
  "errorCode": 1000,
  "message": "处理正确",
  "content": {
    "count": 2,
    "rows": [
      {
        "create_time": "2021-09-10 12:23:42",
        "update_time": "2021-09-10 12:34:56",
        "m_no": "A16312473154842F3CA24AEBD95EF9",
        "serial_number": "1111-2222-3333",
        "address": "0x5FAFc849F873f51d4DbE4bDb81aF649a19dc12DD",
        "amount": "21000000000",
        "pledge_power": "7",
        "pool_code": "M1631247649162FD9B11F5A3C4ACB0"
      },
      {
        "create_time": "2021-09-10 12:11:56",
        "update_time": "2021-09-10 12:11:56",
        "m_no": "",
        "serial_number": "",
        "address": "",
        "amount": "3000000000",
        "pledge_power": "1",
        "pool_code": ""
      }
    ]
  }
}
```
### 5.获取子节点列表的算力供给次数
* URL： /scan/getMinerWorkCount
* 参数：       
    - serial_number：矿机ID
* DEMO
    - http://ip:10001/api/scan/getMinerWorkCount
* 返回值：  
    - content：供给次数  
* 用例：
  curl -X POST "http://127.0.0.1:10001/api/scan/getMinerWorkCount" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"serial_number\": \"1111-2222-3333\"}"    
```json
{
  "errorCode": 1000,
  "message": "处理正确",
  "content": "2"
}
```

### 6.获取子节点列表的累计收益（ADAM）
* URL： /scan/getNodeProfitCount
* 参数：       
    - serial_number：矿机ID
* DEMO
    - http://ip:10001/api/scan/getNodeProfitCount
* 返回值：  
    - count：累计收益 
   
* 用例：
  curl -X POST "http://127.0.0.1:10001/api/scan/getNodeProfitCount" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"serial_number\": \"1111-2222-3333\"}"    
```json
{
  "errorCode": 1000,
  "message": "处理正确",
  "content": {
    "release": 1.14627397260274,
    "count": 4.602739726027396,
    "lock": 3.442465753424658
  }
}
```