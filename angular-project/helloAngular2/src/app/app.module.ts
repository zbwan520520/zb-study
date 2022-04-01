import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserListService } from "./service/user.service";
import { HelloUserListComponent } from './hello-user-list/hello-user-list.component';
import { LoggerService } from "./service/LoggerService";
import { LoggerBetterService} from "./service/LoggerBetterService";
import { HttpClientModule} from "@angular/common/http";
import { HelloHttpClientComponent } from './hello-http-client/hello-http-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloUserListComponent,
    HelloHttpClientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
    providers: [UserListService,
    {provide: LoggerService, useClass: LoggerBetterService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
