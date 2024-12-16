import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http'; 

import { provideStore } from '@ngrx/store';
import { reducer as commentReducer } from './states/comments.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent, HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list-angular';
}
