import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";
import { MoviesService } from "./movies.service";

@Injectable({
    providedIn: "root",
})
export class MovieService {
    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType("[Movies Page] Load Movies"),
            exhaustMap(() =>
                this.moviesService.getAll().pipe(
                    map((movies) => ({ type: "[Movies Page] Load Movies", payload: movies })),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(private actions$: Actions, private moviesService: MoviesService) {}
}
