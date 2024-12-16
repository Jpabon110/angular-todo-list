import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import * as CommentActions from './comment.actions';
import { Comment } from '../interfaces/Comment';

@Injectable()
export class CommentEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentActions.loadComments),
      tap(() => console.log('Action loadComments received')),
      mergeMap(() =>
        this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments').pipe(
          map((comments) => CommentActions.loadCommentsSuccess({ comments })),
          catchError((error) => {
            console.error('Error fetching comments:', error);
            return of({ type: '[Comments] Load Comments Failure' });
          })
        )
      )
    )
  );
  
}
