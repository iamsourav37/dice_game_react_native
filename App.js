import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const DiceOne = require('./assets/dice1.png');
const DiceTow = require('./assets/dice2.png');
const DiceThree = require('./assets/dice3.png');
const DiceFour = require('./assets/dice4.png');
const DiceFive = require('./assets/dice5.png');
const DiceSix = require('./assets/dice6.png');

const App = () => {
  const [imageOne, setImageOne] = useState(DiceFive);
  const [imageTow, setImageTwo] = useState(DiceSix);
  const [isWin, setIsWin] = useState(false);
  const playGame = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setImageOne(DiceOne);
        break;
      case 2:
        setImageOne(DiceTow);
        break;
      case 3:
        setImageOne(DiceThree);
        break;
      case 4:
        setImageOne(DiceFour);
        break;
      case 5:
        setImageOne(DiceFive);
        break;
      case 6:
        setImageOne(DiceSix);
        break;
    }

    switch (randomNumber2) {
      case 1:
        setImageTwo(DiceOne);
        break;
      case 2:
        setImageTwo(DiceTow);
        break;
      case 3:
        setImageTwo(DiceThree);
        break;
      case 4:
        setImageTwo(DiceFour);
        break;
      case 5:
        setImageTwo(DiceFive);
        break;
      case 6:
        setImageTwo(DiceSix);
        break;
    }

    if (randomNumber === randomNumber2) {
      setIsWin(true);
    } else {
      setIsWin(false);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#242B2E" />
      {isWin ? <Text style={styles.winMsgStyle}>You Win !!!</Text> : null}

      <View style={styles.imageSection}>
        <Image source={imageOne} style={styles.imageStyle} />
        <Image source={imageTow} style={styles.imageStyle} />
      </View>

      <TouchableOpacity onPress={playGame}>
        <Text style={styles.btnStyle}>Play Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242B2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSection: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  imageStyle: {
    height: 200,
    width: 200,
    marginTop: 5,
  },
  btnStyle: {
    backgroundColor: '#E03B8B',
    borderColor: '#0D0D0D',
    borderWidth: 1,
    color: '#fff',
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  winMsgStyle: {
    color: '#fff',
    backgroundColor: 'red',
    fontSize: 32,
    textTransform: 'uppercase',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    fontWeight: 'bold',
  },
});
