import { Injectable } from '@angular/core';
import { Task } from '../pages/home/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public listaTareas:Array<Task>

  constructor() { 
    this.listaTareas = [];
  }

  addTask(newTask:Task){
    this.listaTareas.push(newTask);
    return this.listaTareas;
  }

  removeTask(id:number){
    this.listaTareas = this.listaTareas.filter((x) => { return x.id != id });    
    return this.listaTareas;
  }

  setDone(id:number) {
    this.listaTareas.map((x) => { if(x.id == id){ x.done = !x.done; } });    
    return this.listaTareas;
  }

}
