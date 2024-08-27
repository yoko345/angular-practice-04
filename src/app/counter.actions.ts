import { createAction } from "@ngrx/store";

// 1/6 createActionで設定したものをreducerに登録
export const increment = createAction("[Counter Component] Increment");
export const decrement = createAction("[Counter Component] Decrement");
export const reset = createAction("[Counter Component] Reset");
