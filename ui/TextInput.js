import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import {
  titleFontSize,
  textInputBorderRadius,
  textInputBorderWidth,
  textInputMarginRight,
  textInputMarginLeft,
  textInputPadding,
  textInputMarginBottom,
} from "../assets/dimensions/Dimensions";
import { primaryFontColor } from "../assets/color/color";

function Input({...children}) {
    return (
        <TextInput style={style.container} {...children} />
    )
}

export default Input;

const style = StyleSheet.create({
  container: {
      borderColor: `${primaryFontColor}`,
      borderWidth: `${textInputBorderWidth}`,
      padding: `${textInputPadding}`,
      marginLeft: `${textInputMarginLeft}`,
      marginRight: `${textInputMarginRight}`,
      borderRadius: `${textInputBorderRadius}`,
    marginBottom: `${textInputMarginBottom}`,
      backgroundColor: '#ffff'
  },
});
