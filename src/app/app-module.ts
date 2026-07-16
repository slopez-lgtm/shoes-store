import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ShoeCatalog } from './shoe-catalog/shoe-catalog';
import { ShoeList } from './shoe-list/shoe-list';
import { InputInteger } from './input-integer/input-integer';
import { Cart } from './cart/cart';
import { About } from './about/about';

@NgModule({
  declarations: [App, ShoeCatalog, ShoeList, InputInteger, Cart, About],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
