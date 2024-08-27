import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { increment, decrement, reset } from "../counter.actions";

@Component({
    selector: "app-my-counter",
    templateUrl: "./my-counter.component.html",
})
export class MyCounterComponent {
    // 4/6 HTMLで使用するObservableな変数を作成
    count$: Observable<number>;

    constructor(private store: Store<{ countForRoot: number }>) {
        // 5/6 ストアのカウント状態に接続させる
        // このとき、StoreModule.forRootで設定したキーと同じ名前にする必要がある
        this.count$ = store.select("countForRoot");
    }

    clickIncrementButton() {
        // 6/6 dispatchを通してreducerの関数を使用する
        this.store.dispatch(increment());
    }

    clickDecrementButton() {
        this.store.dispatch(decrement());
    }

    clickResetButton() {
        this.store.dispatch(reset());
    }
}
