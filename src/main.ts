import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { reducer as commentReducer } from './app/states/comments.reducer';
import { CommentEffects } from './app/states/comment.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), 
    provideRouter([]), // Configura tus rutas si es necesario
    provideStore({ comments: commentReducer }),
    provideEffects([CommentEffects]),
  ]
}).catch(err => console.error(err));
