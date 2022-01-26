import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';

const quotes = [
    "Focus every moment like a Roman \n - Marcus Aurelius", 
    "In your actions, don’t procrastinate. In your conversations, don’t confuse. In your thoughts, don’t wander. \n - Marcus Aurelius", 
    "I fear lest some platitude abuse your divine form. \n – C.P. Cavafy", 
    "Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly. \n - Kafka",
    "To be ignorant of what occurred before you were born is to remain always a child. For what is the worth of human life, unless it is woven into the life of our ancestors by the records of history? \n - Cicero",
    "Most of what matters in our lives takes place in our absence. \n - Salman Rushdie",
    "I admit it: above all things, I fear absurdity. \n - Salman Rushdie",
    "'History, Stephen said, is a nightmare from which I am trying to awake. '\n – James Joyce.",
    "Of all writings I love only that which is written in blood. \n - Nietzsche",
    "Whom the Gods wish to destroy, first they call promising. \n - Cyril Connolly",
    ]

class Quotes extends React.Component {
    state = {
        index: 0,
    }

    render() {
        return <Text style={styles.quote}>{quotes[Math.floor(Math.random()*quotes.length)]}</Text>
    }
}

export default Quotes