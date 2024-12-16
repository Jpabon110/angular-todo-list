import { createAction, props } from '@ngrx/store';
import { Comment } from '../interfaces/Comment';

export const loadComments = createAction('[Comments] Load Comments');
export const loadCommentsSuccess = createAction(
  '[Comments] Load Comments Success',
  props<{ comments: Comment[] }>()
);
