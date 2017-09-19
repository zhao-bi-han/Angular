# 菜单切换
菜单切换，主要用到的是Angular4.x中的路由嵌套
## 核心代码
```
const routes: Routes = [
  {
    path: 'my',
    component:MyComponent,
    children: [
      {
         path:"order",
         component:OrderComponent
      },
      {
        path:"returngood",
        component:ReturnGoodComponent
      },
      {
        path:"**",
        component:OrderComponent
      }
    ]
  },
  {
    path:"safe",
    component:SafeComponent,
    children: [
      {
        path:"safelist",
        component:SafelistComponent
      },
      {
        path:"**",
        component:SafelistComponent
      }
    ]
  },
  {
    path:"news",
    component:NewsComponent,
    children: [
      {
        path:"newslist",
        component:NewslistComponent
      },
      {
        path:"**",
        component:NewslistComponent
      }
    ]
  },
  {
    path:"**",
    component:MyComponent
  }

];

```
## 效果图
![Image text](https://raw.githubusercontent.com/zhao-bi-han/Angular/master/Angular%204.x/demo/navMenu/showImg/gaollg3.GIF)


