import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  setStorage(key,value){
    localStorage.setItem(key,JSON.stringify(value));   // 序列化
}
getStorage(key){
  return JSON.parse(localStorage.getItem(key)) ;
}
delStorage(key){
  localStorage.removeItem(key);
}
}