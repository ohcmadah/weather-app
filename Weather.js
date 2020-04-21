import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
        iconName: "ios-cloud",
        gradient: ["#16222A", "#3A6073"],
        title: "Haze",
        subtitle: "Just don't go outside.",
    },
    Thunderstorm: {
        iconName: "ios-thunderstorm",
        gradient: ["#00416A", "#FFE000"],
    },
    Drizzle: {
        iconName: "md-rainy",
        gradient: ["#7F7FD5", "#FFE000"],
    },
    Rain: {
        iconName: "ios-rainy",
        gradient: ["#2B32B2", "#1488CC"],
    },
    Snow: {
        iconName: "ios-snow",
        gradient: ["#1c92d2", "#f2fcfe"],
    },
    Atmosphere: {
        iconName: "ios-cloud",
        gradient: ["#1F1C2C", "#928DAB"],
    },
    Clear: {
        iconName: "ios-sunny",
        gradient: ["#F37335", "#FDC830"],
    },
    Clouds: {
        iconName: "ios-cloudy",
        gradient: ["#3f2b96", "#a8c0ff"],
    },
    Mist: {
        iconName: "ios-cloud",
        gradient: ["#4568DC", "#B06AB3"],
    },
    Dust: {
        iconName: "ios-close-circle",
        gradient: ["#141E30", "#243B55"],
    },
};

export default function Weather({ temp, condition }) {
    if (weatherOptions[condition] == undefined) {
        console.log(condition);
        condition = "Clear";
    }
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <Ionicons
                    color="white"
                    name={weatherOptions[condition].iconName}
                    size={96}
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}>
                <View
                    style={{ ...styles.halfContainer, ...styles.textContainer }}
                >
                    <Text style={styles.title}>
                        {weatherOptions[condition].title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {weatherOptions[condition].subtitle}
                    </Text>
                </View>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
    ]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",
    },
});
