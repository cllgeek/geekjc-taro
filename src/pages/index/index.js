import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Navigator, Swiper, SwiperItem,RichText } from '@tarojs/components'
import { post } from '../../utils/request'
import { getUserInfo } from '../../utils/wechat'
import './index.scss'

const prefixcls = 'index';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '极客教程'
  }

  constructor(props){
    super(props);
    this.state={
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 1000,
    }
  }

  componentWillMount () {
    post('/api/tags/tag',{title:'前端开发'}).then(res=>{
      console.log(res)
    })
    getUserInfo().then(res=>{
      console.log(res)
    })
  }

  componentDidMount () { }

  componentWillUnmout () { }

  componentDidShow () { }

  componentDidHide () { }


  render () {
    const { imgUrls } = this.state;
    return (
      <View className='index'>
        <Swiper autoplay={this.state.autoplay}
          indicatorDots={this.state.indicatorDots}
          slideMult='10'
          duration={this.state.duration}
          interval={this.state.interval}
          indicatorColor='#999'
          indicatorActiveColor='#333'
          current='0'
          circular
          preMargin='20'
        >
          <SwiperItem>
            <Image src={imgUrls && imgUrls[0]} className={`${prefixcls}-swiperImage`} />
          </SwiperItem>
          <SwiperItem>
            <Image src={imgUrls && imgUrls[0]} className={`${prefixcls}-swiperImage`} />
          </SwiperItem>
          <SwiperItem>
            <Image src={imgUrls && imgUrls[0]} className={`${prefixcls}-swiperImage`} />
          </SwiperItem>
        </Swiper>
        <View className={`${prefixcls}-itemHeader`}>
          <Text>最新文章</Text>
          <Navigator className={`${prefixcls}-checkMore`} url='/pages/post/index' openType='switchTab' hoverClass={`${prefixcls}-navigatorHover`}>查看更多</Navigator>
        </View>
        <View className={`${prefixcls}-itemHeader`}>
          <Text>最新电影</Text>
          <Navigator className={`${prefixcls}-checkMore`} url='/pages/post/index' openType='switchTab' hoverClass={`${prefixcls}-navigatorHover`}>查看更多</Navigator>
        </View>
        <View className={`${prefixcls}-itemHeader`}>
          <Text>最新图片</Text>
          <Navigator className={`${prefixcls}-checkMore`} url='/pages/post/index' openType='switchTab' hoverClass={`${prefixcls}-navigatorHover`}>查看更多</Navigator>
        </View>
      </View>
    )
  }
}

