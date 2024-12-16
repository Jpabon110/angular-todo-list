import { Action, createReducer, on } from '@ngrx/store';
import * as CommentActions from './comment.actions';
import { Comment } from '../interfaces/Comment';

export interface State {
  comments: Comment[];
}

const initialState: State = {
  comments: []
};

const commentReducer = createReducer(
  initialState,
  on(CommentActions.loadCommentsSuccess, (state, { comments }) => ({
    ...state,
    comments
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return commentReducer(state, action);
}
