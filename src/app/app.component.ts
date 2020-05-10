import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = "";
  appState$: Observable<AppState>;

  constructor(private store: Store<{appState: AppState}>){
    this.appState$ = store.pipe(select('appState'));
    this.appState$.subscribe(data => {
      this.title = data.title;
    })
  }
}
