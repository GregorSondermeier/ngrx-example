import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

@Component({
    selector: 'app-gs-counter',
    templateUrl: './gs-counter.component.html',
    styleUrls: ['./gs-counter.component.css'],
})
export class GsCounterComponent {
    count$: Observable<number>;

    constructor(private store: Store<{ count: number }>) {
        this.count$ = store.pipe(select('count'));
    }

    increment() {
        this.store.dispatch(increment());
    }

    decrement() {
        this.store.dispatch(decrement());
    }

    reset() {
        this.store.dispatch(reset());
    }
}