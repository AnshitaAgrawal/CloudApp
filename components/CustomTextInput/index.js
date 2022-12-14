import React, { PureComponent } from 'react';
import { Platform, View, Text } from 'react-native';
import Config from 'react-native-config';
import { TextInput as PaperInput, withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

class CustomTextInput extends PureComponent {
  constructor() {
    super();
    this.state = {
      showError: false,
      showErrorMsg: false,
      value: '',
    };
  }

  componentDidMount() {
    this.setState({ value: this.props.value });
  }

  getkeyboardType() {
    //method to return keyboard type based on type
    if (this.props.type == 'email') {
      return 'email-address';
    } else if (this.props.type == 'mobile') {
      return 'number-pad';
    } else if (this.props.type == 'number') {
      return 'number-pad';
    } else if (this.props.type == 'year') {
      return 'number-pad';
    } else if (this.props.type == 'numberCompare') {
      return 'number-pad';
    }
    else if (this.props.type == 'password') {
      return 'default';
    }
    return 'default';
  }

  checkForError() {
    // method to check error for text EDERNED_GREY if it is required field
    let isInValid = false;
    if (this.props.isRequired) {
      var defaultErrorMsg = `${'please_enter'} ${
        this.props.placeholder || 'value'
        }.`;
      if (this.props.errorMessage != '') {
        defaultErrorMsg = this.props.errorMessage;
      }

      if (this.props.value) {
        if (this.props.type == 'email') {
          //if type is email then check with email regex and showing error if test case fails
          const finalRegex = this.props.regExpression || global.emailReg;
          if (finalRegex.test(this.props.value) == false) {
            isInValid = true;
            defaultErrorMsg = `${'please_enter_valid'} ${
              this.props.placeholder || 'email'
              }.`;
            if (this.props.validErrorMessage != '') {
              defaultErrorMsg = this.props.validErrorMessage;
            }
          }

        } else if (this.props.type == 'mobile') {
          //if type is mobile then check with mobile regex and showing error if test case fails
          const finalRegex = this.props.regExpression || global.phoneRegEx;
          if (finalRegex.test(this.props.value) == false) {
            isInValid = true;
            defaultErrorMsg = `${'please_enter_valid'} ${
              this.props.placeholder || 'mobile number'
              }.`;
            if (this.props.validErrorMessage != '') {
              defaultErrorMsg = this.props.validErrorMessage;
            }
          }
        } else if (this.props.type == 'year') {
          //if type is year then check the length is 4 or not
          if (this.props.value.length != 4) {
            isInValid = true;
            defaultErrorMsg = `${'please_enter_valid'} ${
              this.props.placeholder || 'year'
              }.`;
            if (this.props.validErrorMessage != '') {
              defaultErrorMsg = this.props.validErrorMessage;
            }
          }
        } else if (this.props.type == 'password') {
          //if type is password then check with password regex and showing error if test case fails
          const finalRegex = this.props.regExpression || global.passwordRegex;
          if (finalRegex.test(this.props.value) == false) {
            isInValid = true;
            // defaultErrorMsg = `${('please} ${('valid} ${this.props.label || 'password'}.`
            defaultErrorMsg = 'password_error_msg'
            if (this.props.validErrorMessage != '') {
              defaultErrorMsg = this.props.validErrorMessage;
            }
          }
        } else if (this.props.type == 'comparePassword') {
          //console.log("PASSWORD");
          //if type is comparePassword then check with password and if both are not same then showing error
          const password1 = this.props.password1Value;
          const password2 = this.props.value;
          if (!(password1 === password2)) {
            //console.log("PASSWORD",password1,password2);
            isInValid = true;
            defaultErrorMsg = `${
              this.props.password1Label.replace('*', '') || 'Password'
              } and ${
              this.props.placeholder.replace('*', '') || 'Confirm Password'
              } should be same`;
            defaultErrorMsg = 'password_match_error_msg'
            if (this.props.validErrorMessage != '') {
              defaultErrorMsg = this.props.validErrorMessage;
            }
          }
        } else if (this.props.type == 'numberCompare') {
         
          //if type is compare  then check with number and if both are not same then showing error
          const password1 = this.props.password1Value;
          const password2 = this.props.value;
          if (!(password1 === password2)) {
           
            
            isInValid = true;
            defaultErrorMsg = `${
              this.props.password1Label.replace('*', '') || 'Number'
              } and ${
              this.props.placeholder.replace('*', '') || 'Confirm Number'
              } should be same`;
            defaultErrorMsg = 
              'number_confirm_number_msg_same'
            if (this.props.validErrorMessage != '') {
              //console.log("PASSWORD F",password1,password2);
              
              defaultErrorMsg = this.props.validErrorMessage;
            }
          }
        } else if (
          this.props.regExpression &&
          this.props.regExpression.test(this.props.value) == false
        ) {
          isInValid = true;
          defaultErrorMsg = `${'please_enter_valid'} ${
            this.props.placeholder || 'value'
            }.`;
          if (this.props.validErrorMessage != '') {
            defaultErrorMsg = this.props.validErrorMessage;
          }
        }
      } else {
        isInValid = true;
      }
      this.setState({
        showError: isInValid,
        setErrorMsg:
          defaultErrorMsg != null && defaultErrorMsg != ''
            ? defaultErrorMsg.replace('*', '')
            : this.props.errorMessage.replace('*', ''),
      });
    }
    return isInValid;
  }

  getReturnKey() {
    //method returns return type based on type and lastfield
    const { type, isLastFeild, multiline } = this.props;
    if (multiline) {
      return 'default';
    } else if (
      (type == 'mobile' || type == 'number' || type == 'numberCompare') &&
      Platform.OS === 'ios'
    ) {
      return 'done';
    } else if (isLastFeild) {
      return 'done';
    }

    return 'next';
  }

  focus() {
    //method to focus the textinput
    this.inputRef.focus();
  }

  blur() {
    //method to blur the textinput
    this.inputRef.blur();
  }

  reset() {
    //method to remove error message the textinput
    this.setState({ showError: false, setErrorMsg: false });
  }

  customizeStyle() {
    let finalStyle = this.props.InputStyle;
    if (finalStyle && finalStyle.fontSize) {
      finalStyle.fontSize = finalStyle.fontSize;
    }
    return finalStyle;
  }

  render() {
    const {
      InputStyle,
      textRef,
      label,
      disable,
      placeholder,
      containerStyle,
      mode,
      multiline,
      onChangeText,
      onEndEditing,
      selectionColor,
      onSubmitEditing,
      value,
      secureTextEntry,
      theme,
      fontWeight,
      maxLength,
      checkForErrorToShow,
      isAutoCapitalise,
      underlineColor,
      onFocus,
      onContentSizeChange,
      leftIcon,
      leftIconStyle,
      leftIconPress,
      rightIcon,
      rightIconPress,
      rightIconStyle,
      showSuccess,
      showSuccessFaliure,
      errorMsg
    } = this.props;

    return (
      <>
        <View style={[styles.containerStyle,containerStyle]}>
          <Text style={[styles.labelStyle, { color: disable ?Config.RED : Config.BLACK }]}>
            {value === '' ? '' : label ? label : placeholder}
          </Text>
          <PaperInput
            right={
              rightIcon ? (
                <PaperInput.Icon
                  name={() => (
                    <Icon
                      onPress={() => rightIconPress()}
                      style={[{  marginLeft: 15 }, rightIconStyle]}
                      name={rightIcon}
                      size={20}
                      color={Config.BLACK}
                    />
                  )}
                />
              ) : null
            }
            left={
              leftIcon ? (
                <PaperInput.Icon
                  name={() => (
                    <Icon
                      onPress={() => leftIconPress()}
                      style={[{ marginTop: 10 }, leftIconStyle]}
                      name={leftIcon}
                      size={25}
                      color={Config.BLACK}
                    />
                  )}
                />
              ) : null
            }
            ref={ref => {
              this.inputRef = ref;
            }}

            // label={label}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={Config.BLACK}
            dense
            editable={disable /* || true */}
            underlineColor={Config.BLACK }
            selectionColor={selectionColor}
            mode={mode || 'flat'}
            style={[
              styles.defaultInputStyle,
              InputStyle,
              this.customizeStyle(),
              /* this.props.theme.fonts[this.props.fontWeight] */ theme.fonts[
              fontWeight
              ],
            ]}
            autoCorrect={false}
            clearButtonMode="never"
            autoCapitalize={isAutoCapitalise ? 'words' : 'none'}
            keyboardType={this.getkeyboardType()}
            returnKeyType={this.getReturnKey()}
            multiline={multiline || false}
            error={this.state.showError}
            secureTextEntry={secureTextEntry}
            onChangeText={text => {
              this.setState({ value: text, showError: false });
              if (onChangeText) {
                onChangeText(text);
              }
            }}
            onEndEditing={() => {
              this.setState({ focused: false });
              if (checkForErrorToShow) {
                if (!this.checkForError()) {
                  if (onEndEditing) {
                    onEndEditing();
                  }
                }
              } else {
                if (onEndEditing) {
                  onEndEditing();
                }
              }
            }}
            onFocus={() => {
              if (onFocus) {
                onFocus();
              }
              this.setState({ focused: true });
            }}
            onSubmitEditing={() => {
              if (checkForErrorToShow) {
                if (!this.checkForError()) {
                  if (onSubmitEditing) {
                    onSubmitEditing();
                  }
                }
              } else {
                if (onSubmitEditing) {
                  onSubmitEditing();
                }
              }
            }}
            maxLength={maxLength || 250}
            theme={{
              roundness: 0,
              colors: {
                text: disable ? Config.LIGHT_GREY: Config.BLACK,
                primary: Config.PRIMARY,
                error: Config.RED,
                background: Config.APP_WHITE,
                placeholder: Config.BLACK,
              },
            }}
          />
          {this.state.showError ? (
            <Text style={[styles.errorMsg,errorMsg]}>{this.state.setErrorMsg}</Text>
          ) : null}
        </View>

      </>
    );
  }
}

export default withTheme(CustomTextInput);
