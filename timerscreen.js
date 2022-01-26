import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, Modal, TouchableHighlight, AppState} from 'react-native';
import Timer from './timer';
import Quotes from './quotes';
import styles from './styles';

class TimerScreen extends React.Component {
    state = {
      timer: this.props.route.params.time * 60,
    }


    navHome = () => {
      this.props.navigation.navigate('Home');
    }  
  
    render() {
      return (
        <View style={styles.container}>
          
          <View style={styles.quote_container}>
            <Quotes/>
          </View>
  
          <View style={styles.timer_container}>
            <Timer time={this.state.timer} callParentNav={this.navHome.bind(this)}/>
          </View>
  
        </View>
      );
    }
  }

export default TimerScreen;

