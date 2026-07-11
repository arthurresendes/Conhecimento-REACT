import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContextProvider";

export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext)

    return context
}