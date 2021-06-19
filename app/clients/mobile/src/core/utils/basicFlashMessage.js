import Colors from '../../../constants/Colors';
import {showMessage} from "react-native-flash-message";

export default function basicFlashMessage(type, text, duration) {
  if (!type || !duration) {
    return;
  }
  if (type !== "success" && type !== "warning" && type !== "danger") {
    return;
  }
  if (!text) {
    showMessage({
      message: "An unexpected error occurred", 
      type: "danger",
      duration: duration,
      titleStyle: {fontSize: 18, alignSelf: 'center', color: 'black'},
    });
    return;
  }
  
  if (type == "success") {
    showMessage({
      message: text, 
      backgroundColor: Colors.primary, 
      duration: duration,
      titleStyle: {fontSize: 18, alignSelf: 'center', color: 'black'},
    });
  } else {
    showMessage({
      message: text, 
      type: type, 
      duration: duration,
      titleStyle: {fontSize: 18, alignSelf: 'center', color: 'white'},
    });
  }
};