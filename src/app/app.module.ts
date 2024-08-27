import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

// 3/6 reducerに登録した関数をどこでも使用できるように、StoreModule.forRootメソッドをimportsに設定する
// このとき、counterReducerを含むオブジェクトを追加することを忘れないようにする
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./counter.reducer";
import { MyCounterComponent } from "./my-counter/my-counter.component";

@NgModule({
    declarations: [AppComponent, MyCounterComponent],
    imports: [BrowserModule, StoreModule.forRoot({ countForRoot: counterReducer })],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
