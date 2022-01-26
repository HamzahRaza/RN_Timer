import React from 'react';
import { Text, View, Button, Alert, Modal, TouchableHighlight} from 'react-native';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TotalTime from './features/totalTime';
import styles from './styles'

class HomeScreen extends React.Component {
    state = {
      modalVisible: false,
      timer: 30,
    //   totalTime: 0,
    };
    
    // _set_totaltime = async () => {
    //     try {
    //         await AsyncStorage.setItem('@total_time', 'yuh')
    //     } catch(e) {
    //         console.log(e)
    //     }
    // }

    // componentDidMount() {
    //     console.log('component did update running')
    //     this.willfocusSubscription = this.props.navigation.addListener(
    //         'focus', 
    //         () => {this.forceUpdate()}
    //     );
    //     try {
    //         if (this.props.route.params.timeElapsed !== null) {
    //             this.setState((prevState) => ({totalTime: prevState.totalTime + this.props.route.params.timeElapsed}))
    //             this.props.navigation.setParams({timeElapsed: null})
    //         }
    //         console.log(this.state.totalTime)
    //     } catch(e) {
    //         console.log(e)
    //     }
    // }
  
    _setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    }

    storeStartTime = async () => {
        try {
            now = new Date();
            await AsyncStorage.setItem('@start_time', now.toISOString());
        } catch (err) {
            console.log('cant store start time');
            // console.warn(err);
        }
    }

    // componentWillUnmount() {
    //     this.willfocusSubscription.remove()
    // }

    // _getTotalTime = async () => {
    //     try {
    //         total_time = await AsyncStorage.getItem('@total_time').then((response) => {
    //             this.setState({totalTime: response})
    //         })
    //         // if (total_time !== null) {
    //         //     return String(itemVal);
    //         // }
    //     } catch(e) {
    //         console.log(e)
    //         return 'NA';
    //     }
    // }
    
    // _time_promise = () => {
    //     this._getTotalTime().then((result) => {
    //         console.log(this._getTotalTime().then())
    //         return String(result);
    //     }).catch((e) => {
    //         console.log(e);
    //     })
    // }

    render() {
      let { modalVisible } = this.state;
        return (
  
          <View style={styles.container} >
            
            <Modal
              animationType="fade"
              transparent={true}
              visible = {modalVisible}
              
            //   onRequestClose={() => {
            //     Alert.alert("Modal has been closed.");
            //   }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>{this.state.timer} Minutes</Text>
                  <Slider
                    style={{width: 200, height: 40}}
                    minimumValue={1}
                    maximumValue={180}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    step={1}
                    value={this.state.timer}
                    onValueChange={value => this.setState({timer: value})}
                  />
                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "black" }}
                    onPress={() => {
                      this.storeStartTime();
                      this.props.navigation.navigate('Timer', {
                        time: this.state.timer,
                      });
                      this._setModalVisible(!this.state.modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>Go</Text>
                  </TouchableHighlight>
  
                  <TouchableHighlight
                    style={{ ...styles.openButton }}
                    onPress={() => {
                      this._setModalVisible(!this.state.modalVisible);
                    }}
                  >
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
  
  
            <View style={styles.total_time_container}>
              <Text style={styles.total_time}>Welcome</Text>
              {/* <Text style={styles.total_time}>{this.state.totalTime} Minutes Today</Text> */}
              <TotalTime/>
            </View>
            <View style={styles.button_container}>
              <Button title="Start" onPress={() => {
                this._setModalVisible(true);
              }}/>
              
            </View>
          </View>
        );
    }
  }

export default HomeScreen

