import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/post/index',
      'pages/index/index',
      'pages/postDetail/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '极客教程',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        selectedIconPath: './images/index_active.png',
        iconPath: './images/index.png',
        pagePath: 'pages/index/index',
        text: '首页',
      }, {
        selectedIconPath: './images/article_active.png',
        iconPath: './images/article.png',
        pagePath: 'pages/post/index',
        text: '文章',
      }, {
        selectedIconPath: './images/movie_active.png',
        iconPath: './images/movie.png',
        pagePath: 'pages/index/index',
        text: '电影',
      }, {
        selectedIconPath: './images/photo_active.png',
        iconPath: './images/photo.png',
        pagePath: 'pages/index/index',
        text: '图片',
      }],
    },
    enablePullDownRefresh: true,
    onReachBottomDistance: 50
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
