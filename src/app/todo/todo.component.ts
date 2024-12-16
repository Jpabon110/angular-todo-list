import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/Task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CommentService } from '../services/comments';
import { Comment } from '../interfaces/Comment';
import { Observable } from 'rxjs';


import { loadComments } from '../states/comment.actions';
import { State } from '../states/comments.reducer';
import { select, Store } from '@ngrx/store';

import * as CommentActions from '../states/comment.actions';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [CommentService]
})
export class TodoComponent implements OnInit {

  tasks: Task[] = [];
  // comments$: Observable<Comment[]> | undefined;  // Aquí declaramos la propiedad para la observable de los comentarios
  comments$: Observable<Comment[]> | undefined;
  newTaskName: string = '';
  orden: number = 0;
  verify: boolean = false;

  constructor(private commentService: CommentService) {}

  // constructor(private store: Store<{ comments: State }>) {
  //   this.comments$ = this.store.select((state) => state.comments.comments); // Obtén comentarios del Store
  // }

  // constructor(private store: Store<{ comments: { comments: Comment[] } }>) {
  //    this.comments$ = this.store.pipe(select((state) => state.comments.comments));
  // }

  // ngOnInit(): void {
  //   this.store.dispatch(CommentActions.loadComments());
  // }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    this.comments$ = this.commentService.getComments();
  }

  addTask() {
    if (this.newTaskName.trim()) {
      const newTask: Task = {
        name: this.newTaskName,
        order: Number(this.orden)
      };
      this.tasks.push(newTask);
      this.newTaskName = '';
      this.orden = 0;
    }
  }

  remove(index: number) {
    this.tasks.splice(index, 1);
  }

  validateInput(event: KeyboardEvent): void {
    const allowedKeys = /^[0-9]$/; 
    const key = event.key;

    if (!allowedKeys.test(key)) {
      event.preventDefault(); 
    }
  }

  hasDuplicateOrders(): boolean {
    const orderSet = new Set<number>(); 
  
    for (const item of this.tasks) {
      if (orderSet.has(item.order)) {
        this.verify = true;
        return true; 
      }
      orderSet.add(item.order); 
    }
    this.verify = false;
    return false; 
  }

}
