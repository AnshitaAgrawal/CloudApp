import PropTypes from 'prop-types';
import React from 'react';
import {Text} from 'react-native';
import {Button as PaperButton, withTheme} from 'react-native-paper';
import styles from './styles';

/* Component for button
 mode : Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.
     * - `text` - flat button without background or outline (low emphasis)
     * - `outlined` - button with an outline (medium emphasis)
     * - `contained` - button with a background color and elevation shadow (high emphasis)
titleStyle : Style for button text other than defaultTitleStyle style
buttonStyle : Style for button other than defaultButtonStyle style
theme : Theme is used when we set any theme for button otherwise default theme will be there
rest : if any text properties other than above are applied they will apply automatically for this button
 */
const PrimaryButton = ({
  mode,
  theme,
  titleStyle,
  buttonStyle,
  ...rest
}) => {

  const buttonStyles = styles.defaultButtonStyle
  const textStyles = styles.defaultTitleStyle
  return (
    <PaperButton
      uppercase={false}
      labelStyle={[
        textStyles,
        titleStyle
      ]}
      style={[buttonStyles, buttonStyle]}
      mode={mode}
      {...rest}
    />
  );
};

export default PrimaryButton;