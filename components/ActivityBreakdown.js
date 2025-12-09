import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Rect } from "react-native-svg";
import { ActivityCard } from "./ActivityCard";
import { theme } from "../utils/theme";

export const ActivityBreakdown = ({ activityData }) => {
  const cards = [
    {
      title: "Aerobic Score",
      value: `${activityData.aerobicScore}%`,
      icon: "aerobic",
    },
    {
      title: "Strength Score",
      value: `${activityData.strengthScore}%`,
      icon: "strength",
    },
    {
      title: "Moderate Min",
      value: `${activityData.moderateMin} min`,
      icon: "moderate",
    },
    {
      title: "Vigorous Min",
      value: `${activityData.vigorousMin} min`,
      icon: "vigorous",
    },
    {
      title: "Strength Sessions",
      value: `${activityData.strengthSessions}`,
      icon: "sessions",
    },
    {
      title: "Balance Days",
      value: `${activityData.balanceDays}`,
      icon: "balance",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Svg
          width={16}
          height={12}
          viewBox="0 0 16 12"
          style={styles.signalIcon}
        >
          <Rect
            x="0"
            y="8"
            width="2"
            height="4"
            fill={theme.colors.accent}
            rx="1"
          />
          <Rect
            x="4"
            y="6"
            width="2"
            height="6"
            fill={theme.colors.accent}
            rx="1"
          />
          <Rect
            x="8"
            y="4"
            width="2"
            height="8"
            fill={theme.colors.accent}
            rx="1"
          />
          <Rect
            x="12"
            y="2"
            width="2"
            height="10"
            fill={theme.colors.accent}
            rx="1"
          />
        </Svg>
        <Text style={styles.title}>Activity Breakdown</Text>
        <Text style={styles.subtitle}>Past 7 Days</Text>
      </View>
      <View style={styles.cardsContainer}>
        {cards.map((card, index) => (
          <ActivityCard
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
    marginHorizontal: theme.spacing.md,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  signalIcon: {
    marginRight: 4,
  },
  title: {
    ...theme.typography.h2,
    fontSize: 18,
  },
  subtitle: {
    ...theme.typography.bodySmall,
    marginLeft: "auto",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.md,
    justifyContent: "space-between",
  },
});
