import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ShoeCatalog } from './shoe-catalog/shoe-catalog';
import { ShoeList } from './shoe-list/shoe-list';
import { InputInteger } from './input-integer/input-integer';
import { Cart } from './cart/cart';
import { About } from './about/about';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [App, ShoeCatalog, ShoeList, InputInteger, Cart, About],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
