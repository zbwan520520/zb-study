import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldInterpolationComponent } from './hello-world-interpolation/hello-world-interpolation.component';
import { HelloWorldBindingsComponent } from './hello-world-bindings/hello-world-bindings.component';
import { HelloWorldNgifComponent } from './hello-world-ngif/hello-world-ngif.component';
import { HelloWorldDiComponent } from './hello-world-di/hello-world-di.component';
import { MyAngularComponent } from './my-angular/my-angular.component';
import { FormsModule } from "@angular/forms";
import { HelloParentComponent } from './hello-parent/hello-parent.component';
import { HelloChildComponent} from "./hello-parent/hello-parent.component";
import { NameParentComponent } from './name-parent/name-parent.component';
import { NameChildComponent } from "./name-parent/name-parent.component";
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { VoterComponent} from "./vote-taker/vote-taker.component";
import { CountdownParentLvComponent } from './countdown-parent-lv/countdown-parent-lv.component';
import { CountdownTimerComponent} from "./countdown-parent-lv/countdown-parent-lv.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ItemOutputComponent } from "./item-output/item-output.component";
import { HeroBirthday1Component } from './hero-birthday1/hero-birthday1.component';
import { HeroBirthday2Component } from './hero-birthday2/hero-birthday2.component';
import { SizerComponent } from './sizer/sizer.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldInterpolationComponent,
    HelloWorldBindingsComponent,
    HelloWorldNgifComponent,
    HelloWorldDiComponent,
    MyAngularComponent,
    HelloParentComponent,
    HelloChildComponent,
    NameParentComponent,
    NameChildComponent,
    VoteTakerComponent,
    VoterComponent,
    CountdownParentLvComponent,
    CountdownTimerComponent,
    ItemDetailComponent,
    ItemOutputComponent,
    HeroBirthday1Component,
    HeroBirthday2Component,
    SizerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
