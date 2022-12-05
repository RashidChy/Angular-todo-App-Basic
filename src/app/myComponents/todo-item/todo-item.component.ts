import { Component, Input, Output, EventEmitter } from '@angular/core';
import{Todo} from "../../Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() public todo!: Todo
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() removeTodo: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo){
    this.deleteTodo.emit(todo);
  }
  removeTodoOnClick(todo: Todo){
    this.removeTodo.emit(todo);
  }
}
