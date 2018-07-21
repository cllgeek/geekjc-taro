import Taro, { Component } from '@tarojs/taro';
import { Text,View,ScrollView } from '@tarojs/components';
import PostItem from '../../components/postItem/PostItem';
import defaultFollowTags from '../defaultTags';
import { post } from '../../utils/request'
import './index.scss';

const prefixcls = 'post';

export default class Post extends Component{
  config = {
    navigationBarTitleText: '文章页'
  }
  constructor(props){
    super(props);
    this.state={
      activeItem: '前端开发',
      isRefresh: false,
      isLoadMore: false
    };
  }
  componentWillMount () {
    this.getTagDetail(this.state.activeItem);
  }
  getTagDetail = (title,clear) => {
		Taro.showLoading({title:'数据加载中'});
    const state = this.state;
    state.results = null; // 清除长列表
		post('/api/tags/tag',{title: title,pageOffset: !clear && state.nextPageOffset,pageSize: 10}).then(res=>{
      console.log(res)
      const result = res.data
      Taro.hideLoading();
      let posts = [];
      result.tag['posts'].map((val,i)=>{
        posts.push({
          id: val._id,
          author: val.author,
          title: val.title,
          pv: val.pv
        })
      })
			this.setState({results: posts,total:result.total,nextPageOffset: result.nextPageOffset})
		})
	}
  handleClick(key) {
    this.getTagDetail(key,true);
    this.setState({activeItem: key})
  }
  handleBindscrolltoupper = () => {
    // this.setState({isRefresh: true})
  }
  handleBindscrolltolower = () => {
    console.log(222)
  }
  render(){
    const { activeItem,isRefresh,results } = this.state
    return(
      <View>
        <View className={`${prefixcls}-scrollViewWrapper`}>
          <ScrollView
            scrollX
            scrollWithAnimation
            scrollLeft='0'
            className={`${prefixcls}-scrollViewX`}
            lowerThreshold='20'
            upperThreshold='20'
          >
            { defaultFollowTags && defaultFollowTags['post'].map((val)=>{
              return(
                <View key={val.title} className={activeItem===val.title?'post-scrollViewItem post-itemActive':'post-scrollViewItem'}
                  onClick={this.handleClick.bind(this,val.title)}
                >
                  {val.title}
                </View>
              )
            })}
          </ScrollView>
        </View>
        <ScrollView
          scrollY
          scrollWithAnimation
          scrollTop='0'
          className={`${prefixcls}-scrollViewY`}
          lowerThreshold='20'
          upperThreshold='20'
          enableBackToTop
          onScrolltoupper={this.handleBindscrolltoupper}
          onScrolltolower={this.handleBindscrolltolower}
        >
          <View className={`${prefixcls}-content`}>
            { results && results.map((val,index)=>{
              return(
                <View key={index}>
                  <PostItem item={val} />
                </View>
              )
            })}
          </View>
          {isRefresh && <View><Text>正在刷新...</Text></View>}
        </ScrollView>
      </View>
    )
  }
}
