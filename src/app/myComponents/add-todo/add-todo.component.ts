import { Component,Output,EventEmitter } from '@angular/core';
import{Todo} from "../../Todo";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  title!: string;

  onSubmit(){
    const todo = {
      todo: this.title,
      isCompleted : false 
    }
    this.title= "";
    this.addTodo.emit(todo);
  }
}
