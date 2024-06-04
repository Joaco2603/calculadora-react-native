import { colors, styles } from "@/app/config/theme/app-theme"
import { View, Pressable, Text } from "react-native"


interface Props {
    label: string;
    color?: string;
    newWidth?: number;
    newHeight?: number;
    align?: string;
}


export const Button = ({ label, color = colors.dark_gray, newWidth = 80, newHeight = 80, align = 'center' }: Props) => {
    return (
        <Pressable style={({ pressed }) => ({
            ...styles.button,
            backgroundColor: color,
            opacity: (pressed) ? 0.8 : 1,
            width: newWidth,
            height: newHeight,
        })}>
            <Text style={styles.buttonText}>{label}</Text>
        </Pressable>
    )
}
