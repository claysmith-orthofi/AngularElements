import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    TestComponent
  ],
  entryComponents: [
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule {
  constructor(private _injector: Injector) { }

  ngDoBootstrap() {
    const test = createCustomElement(TestComponent, { injector: this._injector });
    customElements.define('of-test', test);
  }
}
