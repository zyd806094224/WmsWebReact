/** 主要是用来创建仓库(createStore)、引用reducer，并导出store*/
import reducer from "./reducer";
import {createStore} from "redux";

export const store = createStore(reducer)
