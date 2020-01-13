# oplayer

react native video player for expo-av

### Install

```shell
yarn add oplayer expo-av
```

### Use

```js
import React from 'react'
import Oplayer from 'oplayer'

export default function Player() {
  return (
    <Oplayer
      url='./001.mp4' // 播放地址
      type='m3u8' // 后缀名
      themeColor='#946ce6' // 默认为 clicli 基佬紫
      callback={{
        back // 非全屏状态下返回键回调，一般为路由返回
      }}
    />
  )
}
```

### Screenshot

![QQ图片20200113173222.jpg](https://ws1.sinaimg.cn/mw690/0065Zy9ely1gav2g10r0gj30py1hcmzh.jpg)
