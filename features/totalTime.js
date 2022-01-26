import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, Alert, Modal, TouchableHighlight} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalTime, add, reset } from './totalTimeSlice';
import styles from '../styles';

export function TotalTime() {
    const totalTime = useSelector(selectTotalTime)

    
    
    return (
        <Text style={styles.total_time}>{totalTime} Minutes Recorded Today</Text>
       
    );
}

export default TotalTime;

