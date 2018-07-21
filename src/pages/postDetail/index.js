import Taro, { Component } from '@tarojs/taro';
import { Text,View,Button,Image,RichText } from '@tarojs/components';
import moment from 'moment';
import { get,post } from '../../utils/request'
import './index.scss';

const prefixcls = 'postDetail';

export default class PostDetail extends Component{
  config = {
    navigationBarTitleText: '文章详情页'
  }

  constructor(props){
    super(props);
    this.state={
      isRefresh: false,
    };
  }
  componentWillMount () {
    const params = this.$router.params
    params.id && this.getPostDetail(params.id)
  }
  getPostDetail = (id) => {
    Taro.showLoading({title:'数据加载中'});
    get(`/fetch/post/list/${id}`).then(res => {
      const result = res.data;
      this.setState({post: result.post});
      Taro.hideLoading();
    })
  }
  // getTagDetail = (title,clear) => {
	// 	wx.showLoading({title:'数据加载中'});
  //   const state = this.state;
  //   state.results = null; // 清除长列表
	// 	post('/api/tags/tag',{title: title,pageOffset: !clear && state.nextPageOffset,pageSize: 10}).then(res=>{
  //     console.log(res)
  //     const result = res.data
  //     Taro.hideLoading();
  //     let posts = [];
  //     result.tag['posts'].map((val,i)=>{
  //       posts.push({
  //         id: val._id,
  //         author: val.author,
  //         title: val.title,
  //         pv: val.pv
  //       })
  //     })
	// 		this.setState({results: posts,total:result.total,nextPageOffset: result.nextPageOffset})
	// 	})
	// }
  // handleClick(key,e) {
  //   this.getTagDetail(key,true);
  //   this.setState({activeItem: key})
  // }
  // handleBindscrolltoupper = () => {
  //   // this.setState({isRefresh: true})
  // }
  // handleBindscrolltolower = () => {
  //   console.log(222)
  // }
  render(){
    const { post } = this.state;
    return(
      <View className={prefixcls}>
        <View className={`${prefixcls}-title`}>{post.title}</View>
        <View style='margin: 20px 0'>
          <View className={`${prefixcls}-infoLeft`}>
            <Image
              className={`${prefixcls}-avatar`}
              src={post.author && post.author.avatar}
            />
            <View>
              <View>{post.author && post.author.name}</View>
              <View>{post && post.meta && moment(post.meta.updateAt).format('YYYY-MM-DD')}
                <Text style='margin-left: 5px'>{post.pv}</Text>
              浏览</View>
            </View>
          </View>
          <Button style='float: right'>关注</Button>
        </View>
        <RichText nodes={post && post.content}></RichText>
      </View>
    )
  }
}
