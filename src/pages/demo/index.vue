<template>
    <div>
        <painter :customStyle="customStyle" @imgOK="onImgOk" :palette="template" :dirty="true"/>
        <button style="margin-top:40rpx" @click="save">保存</button>
        <button style="margin-top:40rpx" @click="toBack">传给后台</button>
    </div>
</template>

<script>
import Card from '../../palette/card'
const card = new Card()
let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
const userInfo = []
data.map(item => {
  userInfo.push({name: 'vu忘记你看看你看人提供华语就看从v搞不好就难看', score: '5'})
})
const template = card.do(userInfo)
const customStyle = 'margin-left:40rpx'

export default {
  data () {
    return {
      shareImg: '',
      customStyle: customStyle,
      template: template
    }
  },
  methods: {
    save () {
      console.log('on save click')
      wx.saveImageToPhotosAlbum({
        filePath: this.shareImg,
        success: res => {
          console.log(res, '666')
        }
      })
    },
    toBack () {
      wx.uploadFile({
        url: 'https://xcx.learnroomchina.cn/api/common/uploads_single',
        filePath: this.shareImg,
        name: 'file',
        success: res => {
          console.log(res, '999')
        }
      })
    },
    onImgOk (e) {
      this.shareImg = e.mp.detail.path
      // 两种路径是一样的
      console.log(e.mp, 1)
      console.log(e, 2)
    }
  }
}
</script>