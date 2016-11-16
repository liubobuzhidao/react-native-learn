想学会跑就要先学会走!

React Native封装原生UI组件、原生模块

1、首先，你需要知道的是：UI组件和模块不一样、
                       原生端代码需要写在Android项目下的com文件中，最好是将Android项目的代码导入到AS中，方便敲代码、
                       现在WebStorm支持RN开发，所有运行RN还是要切换到WebStorem、
                       。。。（后续想到再补）                       
 2、正式开始步骤：
 
    a、创建java类继承SimpleViewManager
       
    b、创建java类实现ReactPackage
    c、添加组件到MainApplication中
