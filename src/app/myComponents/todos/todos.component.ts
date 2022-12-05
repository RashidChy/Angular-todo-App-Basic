import { Component } from '@angular/core';
import{Todo} from "../../Todo";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})



export class TodosComponent {
 todos!:Todo[];
 localItems!:any;


 constructor(){
  
  this.localItems= localStorage.getItem('todos');
  if(this.localItems == null){
    this.localItems=[];
 }else{
    this.localItems=JSON.parse(this.localItems);
    this.todos=this.localItems;
  }
 }
 todoDelete(todo:Todo){
    const index = this.todos.indexOf(todo)
    this.todos[index].isCompleted = true;
    localStorage.setItem('todos', JSON.stringify(this.todos));
 }
 removeTodo(todo:Todo){
  const index = this.todos.indexOf(todo)
  this.todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(this.todos));
 }

 addTodo(todo:Todo){
  this.todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(this.todos));
}

 ngOnInit() {
    
}
}
