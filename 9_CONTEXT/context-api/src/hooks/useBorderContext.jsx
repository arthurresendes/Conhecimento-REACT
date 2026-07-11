import { useContext } from "react";
import { BorderContext } from "../context/BorderContextProvider";

export const useBorderContext = () => {
    const context = useContext(BorderContext)

    return context
}