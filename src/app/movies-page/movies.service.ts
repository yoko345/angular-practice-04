import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class MoviesService {
    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get();
    }
}
