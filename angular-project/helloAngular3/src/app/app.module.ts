import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloEveryoneComponent } from './hello-everyone/hello-everyone.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
import { RouterParamsComponent } from './router-params/router-params.component';


// 路由配置
const appRoutes: Routes = [
  { path: 'hello', component: HelloWorldComponent},
  { path: 'hello2', redirectTo: '/hello', pathMatch: 'full'},
  { path: 'helloeveryone', component: HelloEveryoneComponent},
  { path: '**', component: PageNotFountComponent},
  { path: 'routerparams/:id', component: RouterParamsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloEveryoneComponent,
    PageNotFountComponent,
    RouterParamsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
