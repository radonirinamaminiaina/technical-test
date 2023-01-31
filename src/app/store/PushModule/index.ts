import { pushAction } from "./actions";
import { pushReducer } from "./reducer";

export interface PushState {
  pushData: string[];
}

const HomeModule = {
  actions: pushAction,
  reducer: pushReducer,
};

export default HomeModule;
