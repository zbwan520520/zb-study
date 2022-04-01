import { Injectable } from "@angular/core";

@Injectable()
export class LoggerBetterService {
  log(text: any) {
    console.log('*************** -start- ******************');
    console.log(text, new Date().toLocaleString());
    console.log('*************** -end- ******************');
  }
}
