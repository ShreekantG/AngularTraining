import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { GithubSearchComponent } from './containers/github-search/github-search.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { DemoComponent } from './demo/demo.component';
import { LinkedinFormComponent } from './forms/linkedin-form/linkedin-form.component';
import { ModelDrivenComponent } from './forms/model-driven/model-driven.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';

const routes: Routes = [
  // : /
  { path: '', component: DemoComponent, pathMatch: 'full' },
  // : /products
  { path: 'products', component: ProductListComponent },
  // : /search
  { path: 'search', component: GithubSearchComponent },
  // : /forms
  {
    path: 'forms',
    children: [
      { path: '', redirectTo: 'template', pathMatch: 'full' },
      { path: 'template', component: TemplateDrivenComponent },
      { path: 'model', component: ModelDrivenComponent },
      { path: 'linkedin', component: LinkedinFormComponent },
    ],
  },
  // 404
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
