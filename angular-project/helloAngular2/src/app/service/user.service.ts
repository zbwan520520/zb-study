import { Injectable } from "@angular/core";
import { LoggerService} from "./LoggerService";
import { Optional} from "@angular/core";
import { User } from './user'

@Injectable()
export class UserListService {
  users: User[] = [
    {name: 'zhangsan', age: 10},
    {name: 'lisi', age: 12},
    {name: 'wangwu', age: 14}
  ];
  // 依赖注入
  constructor(@Optional() private loggerService: LoggerService) {}
  // 返回用户
  getUsers(): User[] {
    this.loggerService.log('取数据');
    return  this.users;
  }
}
