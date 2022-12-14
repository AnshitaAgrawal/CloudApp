import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, ImageStore } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from "./styles";
import PrimaryButton from '../../../components/Button/PrimaryButton'
import CustomTextInput from "../../../components/CustomTextInput";
import BoldBlackText from "../../../components/Text/BoldBlackText";
import images from "../../../lib/images";
import AppHeader from "../../../components/AppHeader";
import RegGreyText from "../../../components/Text/RegGreyText";
import AppStrings from "../../../lib/AppStrings";

const OtpScreen = (props) => {


    const [mobileNo, setMobileNo] = useState('')
    const [otp, setOtp] = useState('')
    const [showOtp, setShowOtp] = useState(false)

    const ongenrateOtpClick = () => {
        setShowOtp(true)
    }

    return (
        <ScrollView style={styles.scrollViewStyle}  >
            <AppHeader
                textOne={AppStrings.otpscreen.login}
            />
            <View style={styles.containerStyle}>
                <Image style={{
                    marginVertical: 40
                }} source={images.logo} />
                <BoldBlackText title={showOtp ? AppStrings.otpscreen.otp_verification : AppStrings.otpscreen.enter_phone_no} />
                {
                    showOtp ?
                        <RegGreyText textStyle={styles.boldTextStyle} title={AppStrings.otpscreen.sub_heading} />
                        :
                        <RegGreyText textStyle={styles.boldTextStyle} title={"We will send you the 4 digit Verification Code"} />
                }
            </View>

            {
                showOtp ?
                    <>
                        <View style={styles.containerStyle}>
                            <OTPInputView
                                style={styles.otpViewStyle}
                                pinCount={4}
                                autoFocusOnLoad
                                codeInputFieldStyle={styles.underlineStyleBase}
                                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                onCodeChanged={(code) => {
                                    setOtp(code)
                                }}
                            />
                            <PrimaryButton>{AppStrings.otpscreen.verify_otp}</PrimaryButton>
                        </View>
                    </>
                    :
                    <>
                        <View style={{ paddingHorizontal: 15}}>
                            <CustomTextInput
                                placeholder={AppStrings.otpscreen.mobileNo}
                                label={AppStrings.otpscreen.mobileNo}
                                onChangeText={(text) => {
                                    setMobileNo(text)
                                }}
                                value={mobileNo}
                                type={'mobile'}
                            //     errorMessage={getLanguageString('please_select_dob')}
                            //     validErrorMessage={getLanguageString(
                            //       'date_of_birth_date_validation_msg'
                            //   )}
                            />
                        </View>
                        <PrimaryButton onPress={() => { ongenrateOtpClick() }}>{AppStrings.otpscreen.genrate_otp}</PrimaryButton>
                    </>
            }

        </ScrollView>
    )
}

export default OtpScreen;