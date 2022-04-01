import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HelloWorldComponet} from "./hello-world.componet";
import { HelloEveryoneComponent } from './hello-everyone/hello-everyone.component';
import { HelloCssComponent } from './hello-css/hello-css.component';
import { HelloBindComponent } from './hello-bind/hello-bind.component';
import { HelloSelfEventComponent } from './hello-self-event/hello-self-event.component';
import { HelloSelfChileComponent} from "./hello-self-event/hello-self-child.component";
import { HelloTwoWayComponent } from './hello-two-way/hello-two-way.component';
import { HelloInputOutputComponent } from './hello-input-output/hello-input-output.component';
import { HelloInputChildComponent } from "./hello-input-output/hello-input.component";
import { HelloTemlateComponent } from './hello-temlate/hello-temlate.component';
import { HelloSelfDirectiveComponent } from './hello-self-directive/hello-self-directive.component';
import { AppHighlightDirective} from "./app-highlight-directive-component";
import { HelloFormComponent } from './hello-form/hello-form.component';
import { HelloFormbuilderComponent } from './hello-formbuilder/hello-formbuilder.component';
import { ReactiveFormsModule} from "@angular/forms";
import { HelloFaChildComponent, HelloChildComponent } from './hello-fa-child/hello-fa-child.component';
import { HelloStyleComponent } from './hello-style/hello-style.component';
import { HelloStyleTypeComponent } from './hello-style-type/hello-style-type.component';
import { HelloStyleSelectComponent } from './hello-style-select/hello-style-select.component';

@NgModule({
    //使用组件时，必须先声明
    declarations: [
        AppComponent,
        HelloWorldComponet,
        HelloEveryoneComponent,
        HelloCssComponent,
        HelloBindComponent,
        HelloSelfEventComponent,
        HelloSelfChileComponent,
        HelloTwoWayComponent,
        HelloInputOutputComponent,
        HelloInputChildComponent,
        HelloTemlateComponent,
        HelloSelfDirectiveComponent,
        AppHighlightDirective,
        HelloFormComponent,
        HelloFormbuilderComponent,
        HelloFaChildComponent,
        HelloChildComponent,
        HelloStyleComponent,
        HelloStyleTypeComponent,
        HelloStyleSelectComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        HelloChildComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
