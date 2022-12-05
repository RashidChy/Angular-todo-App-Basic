import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './myComponents/todos/todos.component';
import { TodoItemComponent } from './myComponents/todo-item/todo-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTodoComponent } from './myComponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
import { CompletedTaskComponent } from './myComponents/completed-task/completed-task.component';


const appRoute: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full'},
  { path: 'todos', component: TodosComponent },
  { path: 'completed', component: CompletedTaskComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    NavbarComponent,
    CompletedTaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute), 
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
