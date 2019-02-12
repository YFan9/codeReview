import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgZorroAntdModule, NZ_I18N, zh_CN } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import zh from "@angular/common/locales/zh";
import { LoginComponent } from "./routes/login/login.component";
import { ErrorInfoComponent } from "./routes/error-info/error-info.component";
import { OverViewComponent } from './routes/layout/over-view/over-view.component';
import { LayoutComponent } from './routes/layout/layout.component';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent, LoginComponent, ErrorInfoComponent, OverViewComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule {}
