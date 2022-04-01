import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, UrlSegment } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModel } from "@angular/forms";
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoriteColorComponent } from './favorite-color/favorite-color.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroFormTemplateComponent } from './hero-form-template/hero-form-template.component';


@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent,
    PageNotFoundComponent,
    ProfileComponent,
    FavoriteColorComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    HeroFormTemplateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
/*      {path: 'crisis-list', component: CrisisListComponent},
      {path: 'heroes-list', component: HeroesListComponent},
      {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}*/
      { matcher: (url) => {
      if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
        return {
          consumed: url,
          posParams: {
            username: new UrlSegment(url[0].path.substr(1), {})
          }
        };
      }
      return null;
    },
      component: ProfileComponent
    }
    ])
  ],
  providers: [NgModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
