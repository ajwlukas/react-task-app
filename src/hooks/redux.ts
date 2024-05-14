import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useDispatch } from "react-redux";



export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>();

//const useTypedDispatch = useDispatch<AppDispatch>; 이거랑 같은게 아닌가?