import { useState } from "react"
import { View } from "react-native"


export const calculos = () => {

    const [total, setTotal] = useState(0);

    const sum = () => setTotal(total + 1);
    const rest = () => setTotal(total - 1);

    return {
        sum,
        rest
    }
}
