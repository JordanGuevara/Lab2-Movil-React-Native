import { View } from "react-native";
import { styles } from "./container.styles";

export const Container = ({ children, variant = 'default' }) => {
    const getStyle = () => {
        switch(variant) {
            case 'white': return styles.containerWhite;
            case 'compact': return styles.containerCompact;
            default: return styles.container;
        }
    };

    return <View style={getStyle()}>{children}</View>;
};