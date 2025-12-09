import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native';
import { theme } from '../utils/theme';
import { formatDateRange } from '../utils/data';

export const DateSelector = ({ weekRange, onPreviousWeek, onNextWeek, onSelectWeek }) => {
  const [showPicker, setShowPicker] = useState(false);

  const dateRangeText = formatDateRange(weekRange.start, weekRange.end);

  const handleWeekSelect = (weeksAgo) => {
    const selectedDate = new Date();
    selectedDate.setDate(selectedDate.getDate() - (weeksAgo * 7));
    onSelectWeek(selectedDate);
    setShowPicker(false);
  };

  const generateWeekOptions = () => {
    const options = [];
    for (let i = 0; i < 12; i++) {
      const date = new Date();
      date.setDate(date.getDate() - (i * 7));
      const start = new Date(date);
      const day = start.getDay();
      const diff = start.getDate() - day;
      start.setDate(diff);
      const end = new Date(start);
      end.setDate(end.getDate() + 6);
      options.push({
        weeksAgo: i,
        range: formatDateRange(start, end),
        date: start,
      });
    }
    return options;
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowPicker(true)}
          activeOpacity={0.7}
        >
          <View style={styles.calendarIconContainer}>
            <View style={styles.calendarIcon}>
              <Text style={styles.calendarNumber}>=</Text>
            </View>
          </View>
          <Text style={styles.dateText}>{dateRangeText}</Text>
          <View style={styles.chevronContainer}>
            <View style={styles.chevron} />
          </View>
        </TouchableOpacity>
        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={onPreviousWeek}
            activeOpacity={0.7}
          >
            <Text style={styles.navIcon}>{'<'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={onNextWeek}
            activeOpacity={0.7}
          >
            <Text style={styles.navIcon}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={showPicker}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowPicker(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowPicker(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Week</Text>
            <ScrollView style={styles.weekList}>
              {generateWeekOptions().map((option) => (
                <TouchableOpacity
                  key={option.weeksAgo}
                  style={styles.weekOption}
                  onPress={() => handleWeekSelect(option.weeksAgo)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.weekOptionText}>{option.range}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowPicker(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
  },
  dateButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
    flex: 1,
  },
  calendarIconContainer: {
    marginRight: theme.spacing.xs,
  },
  calendarIcon: {
    width: 18,
    height: 18,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  calendarNumber: {
    fontSize: 10,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  dateText: {
    ...theme.typography.body,
    fontSize: 12,
  },
  chevronContainer: {
    marginLeft: theme.spacing.xs,
  },
  chevron: {
    width: 0,
    height: 0,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 5,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: theme.colors.textSecondary,
  },
  navigationButtons: {
    flexDirection: "row",
    gap: theme.spacing.sm,
  },
  navButton: {
    width: 30,
    height: 30,
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.surface,
    justifyContent: "center",
    alignItems: "center",
  },
  navIcon: {
    fontSize: 18,
    color: theme.colors.graphLine,
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    maxHeight: "70%",
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
  },
  modalTitle: {
    ...theme.typography.h2,
    marginBottom: theme.spacing.md,
    textAlign: "center",
  },
  weekList: {
    maxHeight: 400,
  },
  weekOption: {
    padding: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  weekOptionText: {
    ...theme.typography.body,
    color: theme.colors.text,
  },
  closeButton: {
    marginTop: theme.spacing.md,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.accent,
    borderRadius: theme.borderRadius.md,
    alignItems: "center",
  },
  closeButtonText: {
    ...theme.typography.body,
    color: theme.colors.primary,
    fontWeight: "600",
  },
});

