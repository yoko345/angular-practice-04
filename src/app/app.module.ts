import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./counter.reducer";
import { MyCounterComponent } from "./my-counter/my-counter.component";
import { MoviesPageComponent } from "./movies-page/movies-page.component";

@NgModule({
    declarations: [AppComponent, MyCounterComponent, MoviesPageComponent],
    imports: [BrowserModule, StoreModule.forRoot({ countForRoot: counterReducer })],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
