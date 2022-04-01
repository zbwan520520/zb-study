import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {
  log(text: any) {
    console.log('=================================');
    console.log(text);
    console.log('=================================');
  }
}
