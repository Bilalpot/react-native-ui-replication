import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Path, Circle, Rect, Line } from "react-native-svg";
import { theme } from "../utils/theme";

const IconComponent = ({ iconType, size = 24, color = "#50511f" }) => {
  const iconSize = size;

  switch (iconType) {
    case "aerobic":
      // Pixelated figure with arms raised (flexing/celebrating pose)
      return (
        <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          {/* Head - pixelated circle */}
          <Rect
            x="9"
            y="2"
            width="6"
            height="6"
            stroke={color}
            strokeWidth="2"
            fill="none"
            rx="1"
          />

          {/* Torso - wider at top, narrowing at waist */}
          <Rect
            x="8"
            y="8"
            width="8"
            height="8"
            stroke={color}
            strokeWidth="2"
            fill="none"
            rx="1"
          />

          {/* Left arm - raised and bent */}
          <Path
            d="M8 10 L4 6 L2 8 L4 10"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Right arm - raised and bent */}
          <Path
            d="M16 10 L20 6 L22 8 L20 10"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Left leg */}
          <Rect
            x="9"
            y="16"
            width="3"
            height="6"
            stroke={color}
            strokeWidth="2"
            fill="none"
            rx="0.5"
          />

          {/* Right leg */}
          <Rect
            x="12"
            y="16"
            width="3"
            height="6"
            stroke={color}
            strokeWidth="2"
            fill="none"
            rx="0.5"
          />

          {/* Shoulder details - small dots on upper chest */}
          <Circle cx="10" cy="10" r="1" fill={color} />
          <Circle cx="14" cy="10" r="1" fill={color} />
        </Svg>
      );
    case "strength":
      // Flexing bicep icon (outlined)
      return (
        <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          {/* Upper arm/shoulder */}
          <Path
            d="M4 14C4 14 4 10 6 8C8 6 10 6 12 8"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bicep bulge */}
          <Path
            d="M12 8C12 8 14 6 16 8C18 10 18 12 16 14"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Forearm */}
          <Path
            d="M16 14C16 14 16 16 14 18C12 20 10 20 8 18"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Hand/fist */}
          <Path
            d="M8 18C8 18 6 18 4 16C2 14 2 14 4 14"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bicep muscle definition */}
          <Circle
            cx="14"
            cy="10"
            r="2"
            stroke={color}
            strokeWidth="2"
            fill="none"
          />
        </Svg>
      );
    case "moderate":
      // Crown icon (outlined)
      return (
        <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <Path
            d="M5 16L3 10L8 12L12 4L16 12L21 10L19 16H5Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M5 16H19V20H5V16Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );
    case "vigorous":
      // Heart icon (outlined)
      return (
        <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <Path
            d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );
    case "sessions":
      // Dumbbell icon (outlined)
      return (
        <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <Rect
            x="3"
            y="8"
            width="4"
            height="8"
            rx="1"
            stroke={color}
            strokeWidth="2"
          />
          <Rect
            x="17"
            y="8"
            width="4"
            height="8"
            rx="1"
            stroke={color}
            strokeWidth="2"
          />
          <Line
            x1="7"
            y1="12"
            x2="17"
            y2="12"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </Svg>
      );
    case "balance":
      // Calendar icon (outlined)
      return (
        <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <Rect
            x="3"
            y="4"
            width="18"
            height="18"
            rx="2"
            stroke={color}
            strokeWidth="2"
          />
          <Line
            x1="16"
            y1="2"
            x2="16"
            y2="6"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <Line
            x1="8"
            y1="2"
            x2="8"
            y2="6"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <Line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="2" />
        </Svg>
      );
    default:
      return null;
  }
};

export const ActivityCard = ({ title, value, icon, onPress }) => {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(true);
    console.log(`Activity Card Pressed: ${title} - ${value}`);
    if (onPress) {
      onPress();
    }
    setTimeout(() => setPressed(false), 200);
  };

  return (
    <TouchableOpacity
      style={[styles.container, pressed && styles.pressed]}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={[styles.textContainer, { flex: 8, marginRight: 4 }]}>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              alignItems: "flex-start",
              height: 60,
            }}
          >
            <Text
              style={styles.title}
              numberOfLines={2}
              ellipsizeMode="tail"
              allowFontScaling
            >
              {title}
            </Text>
            <Text
              style={styles.value}
              numberOfLines={1}
              ellipsizeMode="tail"
              allowFontScaling
            >
              {value}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.iconContainer,
            { flex: 2, position: "relative", top: 0, right: 0 },
          ]}
        >
          <IconComponent
            iconType={icon}
            size={32}
            color={theme.colors.graphLine}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "47%",
    minHeight: 100,
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    position: "relative",
  },
  pressed: {
    backgroundColor: theme.colors.accent,
    transform: [{ scale: 0.95 }],
  },
  iconContainer: {
    position: "absolute",
    top: theme.spacing.md,
    right: theme.spacing.md,
  },
  textContainer: {
    flex: 1,
    // justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: theme.spacing.xs,
  },
  title: {
    ...theme.typography.bodySmall,
    fontSize: 12,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  value: {
    ...theme.typography.h2,
    fontSize: 20,
    fontWeight: "700",
    color: theme.colors.text,
  },
});
