import { createStore } from "redux";

import exampleReducer from "./reducers/main.reducer";

const store = createStore(exampleReducer);

export default store;
