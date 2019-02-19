import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MyselfService {
  constructor() {}
}

export class AuthorInfoService {
  constructor() {}
  array = [{ content: "123" }, { content: "423" }];
}
export class ExpInfoService {
  constructor() {}
  array = [{ content: "xxx" }, { content: "yyy" }];
}
export class StudyInfoService {
  constructor() {}
  array = [{ content: "大大大" }, { content: "小小小" }];
}
