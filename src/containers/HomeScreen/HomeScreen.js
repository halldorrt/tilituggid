import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Animated } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './HomeScreenStyle.js';

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state={ finished: false, scale: new Animated.Value(1), opacity: new Animated.Value(1) };
  }

  onLongPressButton = () => {
    Animated.sequence([
      Animated.timing(this.state.scale, {
          toValue: 1.2,
          duration: 700,
      }),
      Animated.parallel([
        Animated.timing(this.state.scale, {
          delay: 200,
          toValue: 5,
          duration: 350
        }),
        Animated.timing(this.state.opacity, {
          delay: 200,
          toValue: 0,
          duration: 350
        })
      ])
    ]).start(() => this.setState({ finished: true }));     
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.finished && 
        <Animated.View style={[styles.innerContainer, { opacity: this.state.opacity }] }>
          <Animated.View style={[styles.outerImageContainer, { transform: [{ scale: this.state.scale }], opacity: this.state.opacity } ]}>
            <TouchableHighlight 
              style={styles.innerImageContainer}
              onLongPress={this.onLongPressButton}>
              <Image style={styles.image}
                source={require('../../../resources/halli.jpeg')}
              />
            </TouchableHighlight>
          </Animated.View>
        </Animated.View>
        }
        <MapView style={{width:'100%', height:'100%'}}
          initialRegion={{
          latitude: 64.145,
          longitude: -21.94,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,}}>
          <Marker image={require('../../../resources/halliThumb.png')} coordinate={{ latitude: 64.145, longitude: -21.94 }} />
        </MapView>
      </View>
    );
  }
}