import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-hello-http-client',
  template: `
    <ul><li *ngFor="let res of results">{{res.name}} -- {{res.age}}</li></ul>
  `,
  styleUrls: ['./hello-http-client.component.css']
})
export class HelloHttpClientComponent implements OnInit {

  results: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // // 请求数据
    // const url = 'http://localhost/user2';
    // // subscribe处理返回数据
    // this.http.get(url).subscribe(data=>{
    //   this.results = data;
    // }, error => {
    //   console.log("========出错了========");
    // });
    // // 获取完整的响应
    // this.http.get(url, {observe: 'response'}).subscribe(data=>{
    //   console.log(data, data.body);
    // }, (err: HttpErrorResponse) => {
    //   if (err.error instanceof Error) {
    //     console.log("客户端出错：", err.error.message);
    //   } else {
    //     console.log(`服务器返回码 ${err.status}, 返回html: ${err.error}`);
    //   }
    // });
    // let url = 'http://localhost';
    // this.http.get(url, {responseType: 'text'}).subscribe(data => {
    //   console.log(data);
    // });
    // // GET传参
    // url = 'http://localhost/user/add?num=2';
    // let user = { name: 'Tim'};
    // this.http.get(url, {params: user}).subscribe(data => {
    //   console.log(data);
    // });
    // POST传参
    // let url = 'http://localhost/user/update';
    // let user = { name: 'Tim'};
    // this.http.post(url, user).subscribe((response)=>{
    //   console.log(response)
    // });
  }

}
