import React from 'react';
import {  TouchableOpacity, TouchableOpacityProps ,Text, StyleSheet, ActivityIndicator, View } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {variants} from './variantes';


interface ButtonProprs {
    title: string;
    onPress: () => void;
    isLoading?: boolean;
    iconName?: keyof typeof AntDesign.glyphMap;
    disable?: boolean;
    variant?: 'primary' | 'outline';
    style?: TouchableOpacityProps['style']
}

export const ButtonCustom: React.FC<ButtonProprs> = ({title, onPress, isLoading = false, variant= 'primary' ,iconName, disable, style}: ButtonProprs) => {
  
    const buttonVariant = variants[variant];
    const buttonStyle = disable ? buttonVariant.disable : buttonVariant.enabled
    return (
    <TouchableOpacity onPress={onPress} style={[styles.container, {...buttonStyle.button}, style]} disabled={isLoading || disable}>
        {isLoading ? <ActivityIndicator color={buttonStyle.icon.color} /> : 
                <View style={styles.content}>
                    <AntDesign name={iconName} size={25} color={buttonStyle.icon.color} style={{marginRight: 12}} />
                    <Text style={[styles.title, {color: buttonStyle.title.color}]}>{title}</Text>
                </View>

        }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        borderRadius: 8,
        height: 60,
    },
    content:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"

    }
})
