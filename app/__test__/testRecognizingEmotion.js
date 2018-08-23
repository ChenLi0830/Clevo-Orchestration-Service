/*******************************************************************************
 * Copyright (C) 2017-2018 Clevo Artificial Intelligence Inc.
 * Creator: Chen Li<chen.li@clevoice.com>
 * Creation Date: 2017-08
 * Service test: emotion recognition
 *******************************************************************************/
const emotionRecognition = require('../services/emotionRecognition')
const debug = require('debug')('test')
require('dotenv').config({path: '../.env'})

const data = {
  recordId: '5a0fc657c8ce25000ac4f1b4',
  record: {
    _id: '5a0fc657c8ce25000ac4f1b4',
    status: 'active',
    format: 'wav',
    encoding: 'pcm',
    source: 'http://processed-wav-dev-uswest.oss-us-west-1.aliyuncs.com/20170625083904_960_18841323731_601.wav',
    transcription: {
      processor: 'iflytek',
      taskId: 'f44475892b4749faaa039c4a317b23df',
      status: 'completed',
      result: "'[{'bg':'4790','ed':'5950','onebest':'喂你好','speaker':'1'},{'bg':'5970','ed':'7410','onebest':'那个小的，','speaker':'1'},{'bg':'8250','ed':'9480','onebest':'您这边','speaker':'1'},{'bg':'9560','ed':'11520','onebest':'你说的能听到吗？','speaker':'1'},{'bg':'12530','ed':'24490','onebest':'太小了，那个我今天想查询一个，有一个那个我刚才打1086那个说我有一个什么手机，什么支付十块钱，那个那个是什么钱哪。','speaker':'1'},{'bg':'24510','ed':'28450','onebest':'噢这边帮您查询，请问是来电号码支付的吗？','speaker':'2'},{'bg':'29940','ed':'48560','onebest':'没有，我就知道什么原因那个支付的。我就是到年我查话费存在20多块钱，因为我每天就十多块钱，打电话就打了七毛钱，说出来十块钱是什么什么手机，什么玩什么表格，什么玩意他的。','speaker':'1'},{'bg':'48580','ed':'51290','onebest':'这边的话帮你核实情况，寻找','speaker':'2'},{'bg':'51340','ed':'55510','onebest':'嗯你这边说话了，我帮你查了一下，按照来电号码','speaker':'2'},{'bg':'55520','ed':'60410','onebest':'查到杭州名义名义邮寄通知十元，请问是您本人操作吗？','speaker':'2'},{'bg':'60620','ed':'61750','onebest':'不是啊。','speaker':'1'},{'bg':'62060','ed':'70750','onebest':'您这个情况的话，我看了一下，是6月3号6.39分的时候，您这个号码充值了杭州迷游戏充值十元，','speaker':'2'},{'bg':'71020','ed':'80380','onebest':'嗯目前的话呢系统看到这个钱的话给到游戏商户这边了，如果您没有给人操作过的话或者他人没有使用手机购买的情况下','speaker':'2'},{'bg':'80390','ed':'87530','onebest':'这种建议您是使用手机查到病毒，因为这个服务我看到他是按四点多的操作，不扣费，','speaker':'2'},{'bg':'87600','ed':'94590','onebest':'这边后续如果号码保护，嗯再给您做一个号码保护的，然后去这一类客户软监控不了费用了，能不能听到。','speaker':'2'},{'bg':'95720','ed':'101120','onebest':'怎么完了，那这怎么说需要什么我也没吵过，也算是什么游戏我也不完。啊。','speaker':'1'},{'bg':'101140','ed':'107520','onebest':'所以说您的手机需要查下去病毒的，因为我这边按照这个来电号码给您查了一下，','speaker':'2'},{'bg':'107540','ed':'111130','onebest':'目前的话，您这个是6月3号的一个，','speaker':'2'},{'bg':'111460','ed':'123320','onebest':'就是说63号的一个消费，然后的话按照这边的话呢系统给您做一个在做一个免费的号码保护申请后续的话呢您想买这样的游戏，充值也是买不了了，','speaker':'2'},{'bg':'123340','ed':'126220','onebest':'同时这类的QQ软件扣不了您话费的。','speaker':'2'},{'bg':'126230','ed':'133060','onebest':'不管您是不是用你给我对这个你这个申请，如果说你以后电话可能会回来是不。','speaker':'1'},{'bg':'133550','ed':'141150','onebest':'您这个如果是申请话费退回的话，我这边看到您这个钱已经支付给了生物这边，呢就无法退回了。退保欠。','speaker':'2'},{'bg':'142780','ed':'148000','onebest':'那是我怎么木的那十块钱，呢那我本金应该有景','speaker':'1'},{'bg':'149490','ed':'150490','onebest':'嗯。','speaker':'1'},{'bg':'150880','ed':'154750','onebest':'那您这边的话呢我看了一下，那这边是在','speaker':'2'},{'bg':'154770','ed':'158430','onebest':'6月3号6:39的时候有那个','speaker':'2'},{'bg':'158440','ed':'163530','onebest':'这个服务的话，呢看到是您手机上应该有收到那个提示，','speaker':'2'},{'bg':'163640','ed':'169280','onebest':'他这边提示到您需要手机回，就是说你今年下发了二天短信的，','speaker':'2'},{'bg':'169300','ed':'181570','onebest':'这个的话也是要回去验证码方式验证，您核实一下手机有没有这些记录，如果您本人的话没有任何操作的话，这个应该是手机有可能中病毒导致的，你要为手机的话清一下缓存','speaker':'2'},{'bg':'181590','ed':'182960','onebest':'查杀病毒，','speaker':'2'},{'bg':'182980','ed':'186780','onebest':'同时给您做了号码保护的话，后期就会有费用产生了。','speaker':'2'},{'bg':'187270','ed':'189220','onebest':'那这个费用就白透了。','speaker':'1'},{'bg':'189990','ed':'199960','onebest':'嗯您这个钱的话交易生成的，然后您这边的话钱给到游戏这边了，所以您这边的话如果想要退费的话，肯定是无法退回的测试，抱歉的。','speaker':'2'},{'bg':'201680','ed':'208600','onebest':'关键，我是我因为我穿的那个可能有，啊因为什么游戏我我不会玩，我也不会嫁。呀。','speaker':'1'},{'bg':'209040','ed':'212270','onebest':'嗯那您这边的话呢也不要着急，','speaker':'2'},{'bg':'212290','ed':'218850','onebest':'这边可以把您的诉求的话信息转到相关部门进行处理，您保持电话畅通，后续有结果也会联系您的','speaker':'2'},{'bg':'219350','ed':'220680','onebest':'嗯就好了。','speaker':'2'},{'bg':'220860','ed':'227070','onebest':'嗯请问回电号码的话是您这个来电号码是对对嗯好从还是家里方便吗？','speaker':'2'},{'bg':'227790','ed':'236710','onebest':'没有，我就希望那个应该是给我找回来，因为这根本不不存在。我操作孩子没在家，如果要是孩子在家的话，可以','speaker':'1'},{'bg':'236730','ed':'238950','onebest':'就是说孩子炒作的','speaker':'1'},{'bg':'238970','ed':'241580','onebest':'对吧，这个这个有些大人','speaker':'1'},{'bg':'241590','ed':'244170','onebest':'因为我知道这个不可能玩这个。呀。','speaker':'1'},{'bg':'244840','ed':'248800','onebest':'好，这边的话帮您记录下来，6月份的费用是吧？','speaker':'2'},{'bg':'249140','ed':'258480','onebest':'嗯对，嗯后来今年G家门店我觉得今天还是girl到就被盗了，我给你查一下话费要平时我都不查，','speaker':'1'},{'bg':'258950','ed':'260800','onebest':'因为我没有什么变化。','speaker':'1'},{'bg':'260930','ed':'262630','onebest':'今天同事被禁。','speaker':'1'},{'bg':'263010','ed':'272040','onebest':'嗯好，这边的话您反馈上去，嗯喜欢三帮忙嗯嗯没了，嗯科技稍后评价，感谢来电再见。','speaker':'2'}]'"
    },
    nlp: {
      processor: 'clevo',
      taskId: null,
      status: 'completed',
      result: "'{'topicCategory':'','sentenceCategories':[{'bg':'4790','ed':'5950','speaker':'1','categories':['未知分类']},{'bg':'5970','ed':'7410','speaker':'1','categories':['未知分类']},{'bg':'8250','ed':'9480','speaker':'1','categories':['未知分类']},{'bg':'9560','ed':'11520','speaker':'1','categories':['未知分类']},{'bg':'12530','ed':'24490','speaker':'1','categories':['未知分类']},{'bg':'24510','ed':'28450','speaker':'2','categories':['未知分类']},{'bg':'29940','ed':'48560','speaker':'1','categories':['未知分类']},{'bg':'48580','ed':'51290','speaker':'2','categories':['未知分类']},{'bg':'51340','ed':'55510','speaker':'2','categories':['结束询问']},{'bg':'55520','ed':'60410','speaker':'2','categories':['未知分类']},{'bg':'60620','ed':'61750','speaker':'1','categories':['未知分类']},{'bg':'62060','ed':'70750','speaker':'2','categories':['未知分类']},{'bg':'71020','ed':'80380','speaker':'2','categories':['问题回答']},{'bg':'80390','ed':'87530','speaker':'2','categories':['问题回答']},{'bg':'87600','ed':'94590','speaker':'2','categories':['扣款话术2号码保护']},{'bg':'95720','ed':'101120','speaker':'1','categories':['未知分类']},{'bg':'101140','ed':'107520','speaker':'2','categories':['未知分类']},{'bg':'107540','ed':'111130','speaker':'2','categories':['未知分类']},{'bg':'111460','ed':'123320','speaker':'2','categories':['扣款话术2号码保护']},{'bg':'123340','ed':'126220','speaker':'2','categories':['未知分类']},{'bg':'126230','ed':'133060','speaker':'1','categories':['未知分类']},{'bg':'133550','ed':'141150','speaker':'2','categories':['未知分类']},{'bg':'142780','ed':'148000','speaker':'1','categories':['未知分类']},{'bg':'149490','ed':'150490','speaker':'1','categories':['未知分类']},{'bg':'150880','ed':'154750','speaker':'2','categories':['未知分类']},{'bg':'154770','ed':'158430','speaker':'2','categories':['未知分类']},{'bg':'158440','ed':'163530','speaker':'2','categories':['未知分类']},{'bg':'163640','ed':'169280','speaker':'2','categories':['问题回答']},{'bg':'169300','ed':'181570','speaker':'2','categories':['未知分类']},{'bg':'181590','ed':'182960','speaker':'2','categories':['未知分类']},{'bg':'182980','ed':'186780','speaker':'2','categories':['扣款话术2号码保护']},{'bg':'187270','ed':'189220','speaker':'1','categories':['未知分类']},{'bg':'189990','ed':'199960','speaker':'2','categories':['问题回答']},{'bg':'201680','ed':'208600','speaker':'1','categories':['未知分类']},{'bg':'209040','ed':'212270','speaker':'2','categories':['未知分类']},{'bg':'212290','ed':'218850','speaker':'2','categories':['未知分类']},{'bg':'219350','ed':'220680','speaker':'2','categories':['未知分类']},{'bg':'220860','ed':'227070','speaker':'2','categories':['未知分类']},{'bg':'227790','ed':'236710','speaker':'1','categories':['未知分类']},{'bg':'236730','ed':'238950','speaker':'1','categories':['未知分类']},{'bg':'238970','ed':'241580','speaker':'1','categories':['未知分类']},{'bg':'241590','ed':'244170','speaker':'1','categories':['未知分类']},{'bg':'244840','ed':'248800','speaker':'2','categories':['未知分类']},{'bg':'249140','ed':'258480','speaker':'1','categories':['未知分类']},{'bg':'258950','ed':'260800','speaker':'1','categories':['未知分类']},{'bg':'260930','ed':'262630','speaker':'1','categories':['未知分类']},{'bg':'263010','ed':'272040','speaker':'2','categories':['结束询问']}]}'"
    },
    createdAt: '2017-11-12T18:04:36.851Z',
    updatedAt: '2017-11-12T18:04:36.851Z'
  }
}

emotionRecognition(data)
  .then(result => {
    debug('result', result)
    // const {sentenceCategories, topicCategory} = result
    // debug('sentenceCategories', sentenceCategories)
    // debug('topicCategory', topicCategory)
    return result
  })
