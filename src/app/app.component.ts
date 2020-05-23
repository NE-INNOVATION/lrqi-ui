import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from './state/app.state';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = "";
  appState$: Observable<State>;

  constructor(private store: Store<{appState: State}>){
    this.appState$ = store.pipe(select('appState'));
    this.appState$.subscribe(data => {
      this.title = data.title;
    })
  }
}
