import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public list=[];
  public tast='';
  constructor(private storage:StorageService) {   // 依赖注入服务
    
  }

  ngOnInit() {
    var data=this.storage.getStorage("data");
    this.list=data?data:[];
  }
  /*添加任务 */
  addData(e){
    if(e.keyCode==13){   // 判断是否按的回车键
        var obj={
          tast:this.tast,
          state:0
        };
      //  var todolist=this.storage.getStorage("data");
      //  todolist.push(obj);
        this.list.push(obj);
        this.storage.setStorage("data",this.list);
        this.tast='';
    }
  }

  /*删除任务*/
  removeData(i){
      this.list.splice(i,1);
      this.storage.setStorage("data",this.list);
  }
  /*修改状态 */
  update(i,stat){
    this.list[i].state=stat;
    this.storage.setStorage("data",this.list);
  }
}
