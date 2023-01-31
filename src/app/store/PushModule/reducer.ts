import { createReducer } from "@reduxjs/toolkit";
import { PushState } from ".";
import { pushAction } from "./actions";

const initialState: PushState = {
  pushData: ["HTML/CSS", "React", "VueJs", "NodeJs", "Typescript", "Java", "Python", "PHP", "Go", "C#"],
};

export const pushReducer = createReducer<PushState>(
  initialState,
  (builder) => {
    builder
      .addCase(pushAction.setPushData, (state, { payload }) => {
        state.pushData.splice(state.pushData.indexOf('NodeJs') + 1, 0, payload) as string[]
        return state;
      })
      .addDefaultCase((state) => {
        return state;
      });
  }
);
