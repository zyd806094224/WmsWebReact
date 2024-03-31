/** 用来定义默认数据，并导出一个函数*/
/** 定义默认数据*/
const defaultState = {
    str: "ReactRedux"
}

export const LOGIN_DATA_CHANGE = 'LOGIN_DATA_CHANGE';
export const CHANGE_STR = 'CHANGE_STR';

/** 导出一个函数*/
/** 传实际参数了 就用实际参数，没有传参就用defaultState*/
export default (state = defaultState, action: any) => {
    /** 首先对传过来的数据进行一个深拷贝*/
    let newState = JSON.parse(JSON.stringify(state))
    /** 利用action中的type 进行判断执行什么内容
     * action.value是携带的参数*/
    switch (action.type) {
        case CHANGE_STR:
            newState.str = action.value;
            break;
        case LOGIN_DATA_CHANGE:
            newState.userdata = action.value
            break;
        default:
            break;
    }
    return newState
}
