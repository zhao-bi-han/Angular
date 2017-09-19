import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyComponent } from './components/my/my.component';
import { SafeComponent } from './components/safe/safe.component';
import { NewsComponent } from './components/news/news.component';
import { OrderComponent } from './components/order/order.component';
import { ReturnGoodComponent } from './components/return-good/return-good.component';
import { SafelistComponent } from './components/safelist/safelist.component';
import { NewslistComponent } from './components/newslist/newslist.component';

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
