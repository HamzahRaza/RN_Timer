import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black", 
    },  
    total_time_container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    total_time: {
      color: 'white',
    },
    input: {
      height: 50,
      width: 50,
      color: 'white',
      borderColor: 'white',
      borderWidth: 1,
      justifyContent: 'center',
    },
    input_container: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      marginHorizontal: 10,
    },
    button_container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      marginHorizontal: 50,
    },
    quote_container: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      marginHorizontal: 50,
    },
    quote: {
      color: '#FFFFFF',
      fontSize: 20,
      fontFamily: 'sans-serif-thin',
    },
    timer_container: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      marginBottom: 50,
    },
    timer: {
      color: 'white',
      fontSize: 16,
      fontFamily: 'sans-serif-thin',

  
    },
    modalView: {
      // flex:5,
      margin: 15,
      marginTop: 150,
      backgroundColor: "black",
      // opacity: 0.5,
      borderRadius: 20,
      borderWidth: 3,
      borderColor: "white",
      padding: 150,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    openButton: {
      borderRadius: 0,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      color: 'white',
      marginBottom: 15,
      textAlign: "center",
      width: 150,
    },
    cancelText: {
      color: "#2196F3",
      marginBottom: 15,
      textAlign: "center",
      width: 150,
    },
  
  });

  export default styles