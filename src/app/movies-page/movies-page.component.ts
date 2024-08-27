import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

interface Movie {
    name: string;
}

@Component({
    selector: "app-movies-page",
    templateUrl: "./movies-page.component.html",
})
export class MoviesPageComponent {
    movies$: Observable<Movie[]> = this.store.select((state) => state.movies);

    constructor(private store: Store<{ movies: Movie[] }>) {}

    ngOnInit() {
        this.store.dispatch({ type: "[Movies Page] Load Movies" });
    }
}
