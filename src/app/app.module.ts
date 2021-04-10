import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { SearchInputModule } from './shared/components/search-input/search-input.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductComponent,
    BannerComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SearchInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
