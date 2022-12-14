import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import Config from 'react-native-config';
import {Dialog, Portal} from 'react-native-paper';
import styles from './styles';

/* Component for loader
showHud : boolean to show the loader
loaderColor : color of the loader
showLoadingText : boolean to show loading text
loadingText : text to set on loader
loadingTextStyle : loading text style
 */
const Hud = ({
  showHud,
  loaderColor,
  showLoadingText,
  loadingText,
  loadingTextStyle,
}) => {
  const [showLoader, setShowLoader] = useState(showHud);
  useEffect(() => {
    setShowLoader(showHud);
  }, [showHud]);
  return (
    <Portal>
      <Dialog
        visible={showLoader}
        dismissable={false}
        style={styles.hudDialogStyle}>
        <Dialog.Content>
          <ActivityIndicator color={'black'} size="small" />
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};



export default Hud;
