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
      source={{ uri: './001.mp4' }} // 播放地址
      themeColor='#946ce6' // 默认为 clicli 基佬紫
      callback={{
        back // 非全屏状态下返回键回调，一般为路由返回
      }}
    />
  )
}
```
