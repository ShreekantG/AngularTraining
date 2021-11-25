import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { EmployeeListComponent } from './containers/employee-list/employee-list.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { ConversionPipe } from './pipes/conversion.pipe';
import { ImgFallbackDirective } from './directives/img-fallback.directive';
import { CardComponent } from './components/card/card.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './forms/model-driven/model-driven.component';
import { EmailValidatorDirective } from './forms/email-validator.directive';
import { MarkAsteriskDirective } from './forms/mark-asterisk.directive';
import { ShowErrorsComponent } from './forms/show-errors/show-errors.component';
import { LinkedinFormComponent } from './forms/linkedin-form/linkedin-form.component';
import { RowDirective } from './directives/row.directive';
import { ColumnDirective } from './directives/column.directive';
import { ShadowEffectDirective } from './directives/shadow-effect.directive';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { GithubSearchComponent } from './containers/github-search/github-search.component';
@NgModule({
  declarations: [
    // component, directive, pipe
    AppComponent,
    DemoComponent,
    ProductComponent,
    ProductListComponent,
    EmployeeListComponent,
    CurrencyComponent,
    ConversionPipe,
    ImgFallbackDirective,
    CardComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    EmailValidatorDirective,
    MarkAsteriskDirective,
    ShowErrorsComponent,
    LinkedinFormComponent,
    RowDirective,
    ColumnDirective,
    ShadowEffectDirective,
    ErrorPageComponent,
    GithubSearchComponent,
  ],
  imports: [
    // modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiModule,
    AppRoutingModule,
  ],
  providers: [
    // service : singleton pattern : global : 1 instance throughout the application
  ],
  bootstrap: [
    // start up component
    AppComponent,
  ],
})
export class AppModule {}
