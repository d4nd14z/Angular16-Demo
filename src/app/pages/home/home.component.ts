import { Component } from '@angular/core';
import { Task } from './task';
import { TaskService } from 'src/app/services/task.service';
import { faCheckCircle, faXmarkCircle, faTrashCan, faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ TaskService ]
})
export class HomeComponent {

  public title:string;
  public strTarea:string;
  public listaTareas:Array<Task>;
  check = faCheckCircle;
  xcross = faXmarkCircle;
  trash = faTrashCan;
  scheck = faSquareCheck;
  scross = faSquareXmark;

  constructor(private _taskService:TaskService){
      this.title = "Componente DemoComponent";
      this.strTarea = "";
      this.listaTareas = [];
  }

  ngOnInit(){}

  agregarTarea(){
    let tarea:Task = { 'id': this.listaTareas.length + 1, 'task': this.strTarea, 'done': false, 'dateReg': new Date(), 'dateDone': new Date() }
    this.listaTareas = this._taskService.addTask(tarea);
    this.strTarea = "";
  }

  eliminarTarea(id:number){
    if (confirm("Remover esta tarea ?: ") == true){ 
      this.listaTareas = this._taskService.removeTask(id);
    }
  }

  cambiarEstado(id:number){
    this.listaTareas = this._taskService.setDone(id);    
  }

}
