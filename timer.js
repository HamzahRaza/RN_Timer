
import React from 'react';
import { Text, View, Button, AppState, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { differenceInSeconds } from "date-fns";
import {add} from './features/totalTimeSlice' 
import { connect } from 'react-redux';
import styles from './styles';


class Timer extends React.Component {        
    state = {
        secs: this.props.time,
        finished: false,
        appState: AppState.currentState,
    }

    callParentNav() {
        this.props.callParentNav();
    }

    componentDidMount() {
        this.interval = setInterval(this.decrementTime, 1000);
        AppState.addEventListener("change", this._handleAppStateChange);
    }

    decrementTime = () => {
        this.setState((prevState) => ({secs: prevState.secs -1}));
        if(this.state.secs === 0){
            this.setState({finished: true});
        }
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
        AppState.removeEventListener("change", this._handleAppStateChange);
        // this.updateParentTimer({time: this.state.secs});                                                                                                  
    }

    _handleAppStateChange = async nextAppState => {
        if (
            this.state.appState.match(/inactive|background/) &&
            nextAppState === "active"
        ) {
            console.log("App has come to the foreground!");
            elapsed = await this._getElapsedTime();
            //Alert.alert(elapsed.toString())
            this.setState({secs: this.props.time - elapsed});
            if (this.state.secs <= 0) {
                this.setState({finished: true});
            }
        }
        this.setState({ appState: nextAppState });
    };

    _getElapsedTime = async () => {
        try {
            startTime = await AsyncStorage.getItem("@start_time");
            now = new Date();
            return differenceInSeconds(now, Date.parse(startTime));
        } catch (err) {
            console.warn(err);
        }
    }

    // _store_totaltime = async (total_time) => {
    //     try {
    //         await AsyncStorage.setItem('@total_time', total_time)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    displayTime(seconds) {
        const minutes =  Math.abs(Math.trunc(seconds / 60))
        const secondsInTime = Math.abs(seconds % 60)

        if (seconds < 0) {
            return '+ ' + String(minutes) + ':' + String(parseInt(secondsInTime)).padStart(2, "0")
        }else {
            return String(minutes) + ':' + String(parseInt(secondsInTime)).padStart(2, "0")
        }
        

    }
    render() {
        return (
        <View>
            <View style={styles.timer_container}>
                <Text style={styles.timer}>{this.displayTime(this.state.secs)}</Text>  
            
                <Button title={this.state.finished? 'Done': 'Quit'} onPress={() => {
                    if (this.state.finished) {
                        totalTime = Math.trunc((this.props.time + Math.abs(this.state.secs)) / 60)
                        this.props.add(totalTime);
                        this.callParentNav();
                    } else {
                        Alert.alert(
                            'Are you sure?',
                            'Your progress will be lost',
                            [
                                {
                                    text: "Leave",
                                    onPress: () => this.callParentNav(),
                                },
                                {
                                    text: 'Cancel',
                                    onPress: () => console.log('Cancel Pressed'),
                                    style: 'cancel',
                                },
                            ],
                            {cancelable: false}
                        );
                    }
                    
                    }} />
            </View>
        </View>
        )
    }
}

const mapDispatchtoProps = {
    add
};

export default connect(null, mapDispatchtoProps) (Timer)