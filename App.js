import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";
import Weather from './Weather';

const API_KEY = "f7d9f9d0a18b25e764098d27b97d97fb";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { 
      data: {
        main: {temp},
        weather
      }
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
  };
  getLocation = async() => {
    try {
      //거절하면 promise 반환 X => error => catch
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude } 
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
    
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? 
          <Loading /> : 
          <Weather temp={Math.round(temp)} condition={condition} />;
  }
}