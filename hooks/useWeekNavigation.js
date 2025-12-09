import { useState, useMemo } from 'react';
import { getWeekRange, generateWeekData, generateActivityData } from '../utils/data';

export const useWeekNavigation = () => {
  // Set initial date to Nov 9, 2025 to match the design
  const initialDate = new Date('2025-11-09');
  const [currentDate, setCurrentDate] = useState(initialDate);

  const weekRange = useMemo(() => {
    return getWeekRange(currentDate);
  }, [currentDate]);

  const weekData = useMemo(() => {
    return generateWeekData(weekRange.start);
  }, [weekRange.start]);

  const activityData = useMemo(() => {
    return generateActivityData();
  }, [weekRange.start]);

  const goToPreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const goToNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const goToWeek = (date) => {
    setCurrentDate(new Date(date));
  };

  const averageScore = useMemo(() => {
    if (weekData.length === 0) return 0;
    const sum = weekData.reduce((acc, day) => acc + day.score, 0);
    return Math.round(sum / weekData.length);
  }, [weekData]);

  return {
    currentDate,
    weekRange,
    weekData,
    activityData,
    averageScore,
    goToPreviousWeek,
    goToNextWeek,
    goToWeek,
  };
};

