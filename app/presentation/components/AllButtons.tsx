import { styles } from "@/app/config/theme/app-theme"
import { View } from "react-native"
import { Button } from "./Button"


export const AllButtons = () => {
    return (
        <View>
            <View style={styles.row}>
                <Button label={'AC'} />
                <Button label={'+/-'} />
                <Button label={'%'} />
                <Button label={'/'} color="orange" />
            </View>

            <View style={styles.row}>
                <Button label={'7'} />
                <Button label={'8'} />
                <Button label={'9'} />
                <Button label={'x'} color="orange" />
            </View>

            <View style={styles.row}>
                <Button label={'4'} />
                <Button label={'5'} />
                <Button label={'6'} />
                <Button label={'-'} color="orange" />
            </View>
            <View style={styles.row}>
                <Button label={'1'} />
                <Button label={'2'} />
                <Button label={'3'} />
                <Button label={'+'} color="orange" />
            </View>

            <View style={styles.row}>
                <Button label={'0'} newWidth={180} />
                <Button label={','} />
                <Button label={'='} />
            </View>
        </View>
    )
}
