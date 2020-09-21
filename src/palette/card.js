// 名片分享样式
export default class LastMayday {
  cardInfo = {}

  do (cardInfo) {
    this.cardInfo = JSON.parse(JSON.stringify(cardInfo))
    console.log(this.cardInfo, '88')
    return this._template()
  }

  TEXT_SMALL = {
    fontSize: '24rpx'
  }

  _template () {
    console.log(this.cardInfo.length, 'length')
    let BoxHeight = 100 * this.cardInfo.length + 'rpx'
    let view = []
    this.cardInfo && this.cardInfo.map((item, index) => {
      view.push({   
        type: 'text',
        text: '酷家乐移动前端酷家乐移动前端酷家乐移动前端酷家乐移动前端酷家乐移动前端',
        css: {
          left: '50rpx',
          top: `${100 * (index + 1)}rpx`,
          fontSize: '25rpx',
          align: 'left',
          width: '475rpx',
          color: '#fff',
          lineHeight: '50rpx',
          height: '50rpx'
        }
      },
      {
        type: 'text',
        text: '分数',
        css: {
          left: '550rpx',
          top: `${100 * (index + 1)}rpx`,
          fontSize: '25rpx',
          align: 'left',
          width: '104rpx',
          color: '#fff',
          lineHeight: '50rpx',
          height: '50rpx'
        }
      })
    })
    console.log(BoxHeight, '88')
    return ({
      background: 'https://qhyxpicoss.kujiale.com/2018/06/12/LMPUSDAKAEBKKOASAAAAAAY8_981x600.png',
      width: '654rpx',
      height: BoxHeight,
      borderRadius: '20rpx',
      views: view
    })
  }
}
