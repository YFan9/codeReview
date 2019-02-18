import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor() {}
  checkedUserInfo(userInfo) {
    let userInfoArr = new UserInfoService();
    let finder = userInfoArr.Array.find(item => {
      return item.name == userInfo.name && item.password == userInfo.password;
    });
    return finder ? true : false;
  }
}

export class UserInfoService {
  Array = [
    { name: "admin", password: "123456", userId: "yyyy1" },
    { name: "admin1", password: "654321", userId: "yyyy2" },
    { name: "admin2", password: "135790", userId: "yyyy3" },
    { name: "admin3", password: "246800", userId: "yyyy4" },
    { name: "admin4", password: "321654", userId: "yyyy5" },
    { name: "guest", password: "xxxxx1", userId: "yyyy6" }
  ];
}
