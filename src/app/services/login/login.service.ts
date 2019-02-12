import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor() {}
  checkedUserInfo(userInfo) {
    let userInfoArr = new UserInfo();
    let finder = userInfoArr.Array.find(item => {
      return item.name == userInfo.name && item.password == userInfo.password;
    });
    return finder ? true : false;
  }
}

class UserInfo {
  Array = [
    { name: "admin", password: "123456" },
    { name: "admin1", password: "654321" },
    { name: "admin2", password: "135790" },
    { name: "admin3", password: "246800" },
    { name: "admin4", password: "321654" }
  ];
}
