import { createAction } from "@reduxjs/toolkit";
import { PushState } from ".";

export const pushAction = {
  setPushData: createAction<string>("Push/dataPush"),
};
