import Taro, { Component } from '@tarojs/taro';
import { Text,View,Image } from '@tarojs/components';
import './index.scss';

const prefixcls = 'postItem';

class PostItem extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  switchTo = (id,e) => {
    e.preventDefault();
    Taro.navigateTo({url:`/pages/postDetail/index?id=${id}`});
  }
  render(){
    const { item } = this.props;
    return(
      <View className={`${prefixcls}-contentItem flex-wrap row-flex`} onClick={this.switchTo.bind(this,item.id)}>
        <View className={`${prefixcls}-left flex-wrap col-flex`}>
          <View>
            <Text>{item && item.title}</Text>
          </View>
          <View style='margin-top: 30px;font-size: 12px'>
            <Text className={`${prefixcls}-tag`}>前端开发</Text>
            <Text className={`${prefixcls}-span`}>{item && item.pv}浏览</Text>
          </View>
        </View>
        <View className={`${prefixcls}-right`}>
          <Image
            style='width: 80px;height: 80px;background: #fff;border-radius: 80px'
            src={item && item.author && item.author.avatar}
          />
        </View>
      </View>
    )
  }
}

export default PostItem
