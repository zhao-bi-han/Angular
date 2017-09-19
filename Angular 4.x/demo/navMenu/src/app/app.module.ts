import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './components/my/my.component';
import { SafeComponent } from './components/safe/safe.component';
import { NewsComponent } from './components/news/news.component';
import { OrderComponent } from './components/order/order.component';
import { ReturnGoodComponent } from './components/return-good/return-good.component';
import { SafelistComponent } from './components/safelist/safelist.component';
import { NewslistComponent } from './components/newslist/newslist.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    SafeComponent,
    NewsComponent,
    OrderComponent,
    ReturnGoodComponent,
    SafelistComponent,
    NewslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
