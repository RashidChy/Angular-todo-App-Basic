import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.css']
})
export class CompletedTaskComponent {
  todos!:Todo[];
  localItems!:any;
  @Output() removeTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(){
   
   this.localItems= localStorage.getItem('todos');
   console.log(this.localItems);
   this.localItems=JSON.parse(this.localItems);
    this.todos=this.localItems;
    console.log(this.todos);
  }   

  removeTodoOnClick(todo: Todo){
    this.removeTodo.emit(todo);
  }

  remove(todo:Todo){
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
   }
}
