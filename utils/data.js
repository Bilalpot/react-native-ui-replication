// Dummy data generator for activity scores
// Generate data with high and low values for better visual appeal
export const generateWeekData = (startDate) => {
  const days = [];
  // Sample scores with good variation: low values (50-65), mid values (70-80), high values (85-95)
  // Average: (58 + 72 + 88 + 65 + 92 + 78 + 85) / 7 = 76.85 ≈ 77%
  const baseScores = [58, 72, 88, 65, 92, 78, 85];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    days.push({
      date: date.toISOString().split('T')[0],
      score: baseScores[i] || Math.floor(Math.random() * 40) + 50,
    });
  }
  return days;
};

// Generate activity breakdown data
// Using values from the design image for consistency
export const generateActivityData = () => {
  return {
    aerobicScore: 90,
    strengthScore: 89,
    moderateMin: 330,
    vigorousMin: 87,
    strengthSessions: 3,
    balanceDays: 0,
  };
};

// Format date helper
export const formatDate = (date) => {
  const d = new Date(date);
  const month = d.toLocaleString('default', { month: 'short' });
  const day = d.getDate();
  const year = d.getFullYear();
  return `${month} ${day}, ${year}`;
};

// Format date range
export const formatDateRange = (startDate, endDate) => {
  const start = formatDate(startDate);
  const end = formatDate(endDate);
  // Match the exact format from design: "Nov 9, 2025 - Nov 15, 2025"
  return `${start} - ${end}`;
};

// Get week start and end dates
export const getWeekRange = (date) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day; // Adjust to Sunday
  const start = new Date(d.setDate(diff));
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  return { start, end };
};

