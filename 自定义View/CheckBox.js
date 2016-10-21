/**
 *
 * 自定义CheckBox[--语法遵循ES6--]
 * 分析:
 *    checkbox功能:
 *    1、首先可以有选上和被选上操作,
 *    2、然后可以自定义文字的位置、颜色、字体大小,比如说是在组件前面还是在组件后面等【不考虑上下的情形】。
 *    3、CheckBox的背景、尺寸大小是可以改变的
 * 步骤:
 *  1、先写模板代码
 *  2、逻辑处理
 *
 * Created by lb on 16/10/21.
 */
import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';

export default class CheckBox extends React.Component{

    // 定义属性类型
    static propTypes = {
        onClick:React.PropTypes.func,
        containStyle:React.PropTypes.object,
        imageSrc:React.PropTypes.string,
        imagePressedSrc:React.PropTypes.string,
        imageStyle:React.PropTypes.object,

        textStyle:React.PropTypes.object,
        text:React.PropTypes.string,
        ifDefault:React.PropTypes.bool,     //是否在图片的后面
        
        checked:React.PropTypes.bool
    }

    //设置默认值
    static defaultProps = {
        text:'测试',
        ifDefault:true,                 //默认是再图片的后面

    }
    
    onClick(){
        //  如果写了onclick方法 那么就去执行该方法
        if (this.props.onClick){
            this.props.onClick(!this.props.checked);
            console.log("View里面的属性值:" + this.props.checked);
        }
    }
    
    render(){
            let main;   //要显示的内容
            let image;  //显示的图片

            //图片
            if (this.props.checked){
                if (this.props.imagePressedSrc){
                    image = require(this.props.imagePressedSrc);
                }else{
                    image = require('../image/cb_enabled.png');
                }

            }else{
                if (this.props.imageSrc){
                    image = require(this.props.imageSrc);
                }else{
                    image = require('../image/cb_disabled.png');
                }

            }

            //文字的显示的位置
            if(this.props.ifDefault){
               main = ( <View style={[styles.container,this.props.containStyle]}>
                   <Image source={image} style={[styles.image,this.props.imageStyle]}></Image>
                   <Text style={[styles.text,this.props.textStyle]}>{this.props.text}</Text>
               </View>);
            }else{
                main = (<View style={[styles.container,this.props.containStyle]}>
                    <Text style={[styles.text,this.props.textStyle]}>{this.props.text}</Text>
                    <Image source={image} style={[styles.image,this.props.imageStyle]}></Image>
                </View>);
            }
            
            return(
               <TouchableHighlight underlayColor='white' onPress={this.onClick.bind(this)}>
                   {main}
               </TouchableHighlight>
            );    
    }
}

//  默认样式
var styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },

    image:{
        width:15,
        height:15
    },

    text:{
        fontSize:15,
    }

});