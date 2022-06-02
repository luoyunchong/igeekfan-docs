# 产品设计

## 产品设计-评论模块的设计
### 1.主题式
将评论分为二级，第一级采用时间倒序，二级按照时间正序，有助于理解上下文关系。


用户操作：
- [x] 评论随笔(内容支持超链接、emoji)
- [x]  点赞评论/取消点赞
- [x]  回复评论
- [x]  删除自己的评论

运营操作：
- [x]  审核通过/拉黑评论
- [x]  删除任何评论
- [x]  拉黑后的显示逻辑。（保留当前区块、显示内容为：该评论因违规被拉黑）
- 删除：（如果是二级评论，直接软删除，如果是一级评论，软删除子评论和当前评论-需要提前提醒用户）
交互设计
- 评论的字数长度（500）、emoji。
- 点赞交互-动画、消息通知/推送
- 评论区域元素，需要有明确可点击的区域，会跳转到哪个地方。

### 优化
- 精选评论


## 排行榜见解

排行榜从心理学上分析，主要从四个方面影响着您：**寻找权威 、参与比较 、关注主流 、自我确认。**

如何设计一个简单的排行榜呢。。


在一个博客随笔中，我们设计一个3天、七天（周榜）、30天（月榜）、全部的榜单。以浏览量（权重1）、点赞量（20）、评论量（30)。权重可自己定义。    

1.默认取最新的随笔

前台传create_time时，使用如下sql
```
select * from `blog_article` order by create_time desc;
```
2.传排序方式为最近n天的热榜时。

参数：THREE_DAYS_HOTTEST（三天）、WEEKLY_HOTTEST(七天）、MONTHLY_HOTTEST（一个月）、HOTTEST（全部）

mysql 查询当前日期时间前三天数据
```
select date_sub(now() ,interval 3 day);
```
根据权重查询
```
select * from `blog_article` a 
where a.`create_time`>(select date_sub(now() ,interval 3 day))
order by (a.`view_hits` + a.`likes_quantity` * 20 + a.`comment_quantity` * 30) DESC, a.`create_time` DESC

```

## 创作者中心

### 用户主页

统计值：阅读总数，点赞总数，关注者总数

### 个人设置
用户信息、密码修改

## 更多参考
- [万字长文深度分析：产品排行榜的设计和玩法](http://www.woshipm.com/pd/1255548.html)
- [想知道谁是你的最佳用户？基于Redis实现排行榜周期榜与最近N期榜](https://zhuanlan.zhihu.com/p/52322777)

