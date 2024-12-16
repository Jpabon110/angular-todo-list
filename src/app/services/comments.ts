import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comment } from '../interfaces/Comment';

@Injectable()
export class CommentService {
  constructor(private http: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
      .pipe(
        map(comments => comments)
      );
  }
}
