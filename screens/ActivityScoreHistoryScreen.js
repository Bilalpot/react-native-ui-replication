import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header } from "../components/Header";
import { DateSelector } from "../components/DateSelector";
import { ActivityGraph } from "../components/ActivityGraph";
import { ActivityBreakdown } from "../components/ActivityBreakdown";
import { useWeekNavigation } from "../hooks/useWeekNavigation";
import { theme } from "../utils/theme";

export const ActivityScoreHistoryScreen = () => {
  const {
    weekRange,
    weekData,
    activityData,
    averageScore,
    goToPreviousWeek,
    goToNextWeek,
    goToWeek,
  } = useWeekNavigation();

  const [selectedDate, setSelectedDate] = useState(
    weekData.length > 0 ? weekData[weekData.length - 1].date : null
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* <Header /> */}
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.mainTitle, { textAlign: "center" }]}>
            Activity Score History
          </Text>
          <Text style={[styles.subtitle, { textAlign: "center" }]}>
            7-day rolling activity performance
          </Text>
        </View>

        <DateSelector
          weekRange={weekRange}
          onPreviousWeek={goToPreviousWeek}
          onNextWeek={goToNextWeek}
          onSelectWeek={goToWeek}
        />

        <ActivityGraph
          weekData={weekData}
          averageScore={averageScore}
          selectedDate={selectedDate}
        />

        <ActivityBreakdown activityData={activityData} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: theme.spacing.xl,
  },
  mainTitle: {
    ...theme.typography.h1,
    paddingHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    ...theme.typography.bodySmall,
    paddingHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.lg,
    color: theme.colors.textSecondary,
  },
});
