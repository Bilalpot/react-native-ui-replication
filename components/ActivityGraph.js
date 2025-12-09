import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, {
  Polyline,
  Polygon,
  Line,
  Circle,
  Text as SvgText,
} from "react-native-svg";
import { theme } from "../utils/theme";
import { formatDate } from "../utils/data";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const GRAPH_WIDTH = SCREEN_WIDTH - 48;
const GRAPH_HEIGHT = 200;
const PADDING = 40;
const GRAPH_INNER_WIDTH = GRAPH_WIDTH - PADDING * 2;
const GRAPH_INNER_HEIGHT = GRAPH_HEIGHT - PADDING * 2;

export const ActivityGraph = ({ weekData, averageScore, selectedDate }) => {
  if (!weekData || weekData.length === 0) return null;

  const maxScore = 100;
  const minScore = 0;

  const points = weekData.map((day, index) => {
    const x = PADDING + (index / (weekData.length - 1)) * GRAPH_INNER_WIDTH;
    const y =
      PADDING +
      GRAPH_INNER_HEIGHT -
      ((day.score - minScore) / (maxScore - minScore)) * GRAPH_INNER_HEIGHT;
    return { x, y, ...day };
  });

  const selectedIndex = weekData.findIndex((day) => day.date === selectedDate);
  const selectedPoint =
    selectedIndex >= 0 ? points[selectedIndex] : points[points.length - 1];

  // Create area polygon
  const areaPoints = [
    `${PADDING},${PADDING + GRAPH_INNER_HEIGHT}`,
    ...points.map((p) => `${p.x},${p.y}`),
    `${PADDING + GRAPH_INNER_WIDTH},${PADDING + GRAPH_INNER_HEIGHT}`,
  ].join(" ");

  // Create line points
  const linePoints = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <View>
      <View style={styles.graphHeading}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Kaiora Activity Score</Text>
          <View style={styles.infoIconContainer}>
            <Text style={styles.infoIcon}>i</Text>
          </View>
        </View>
        <Text style={styles.subtitle}>Your recent activity score history.</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timeContainer}>
            <Text style={styles.avgLabel}>TIME</Text>
            <Text style={styles.avgValue}>
              {weekData.length > 0
                ? `${new Date(
                    new Date(weekData[0].date).getTime() + 24 * 60 * 60 * 1000
                  ).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })} - ${new Date(
                    new Date(weekData[weekData.length - 1].date).getTime() +
                      24 * 60 * 60 * 1000
                  ).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}`
                : ""}
            </Text>
          </View>
          <View style={styles.avgContainer}>
            <Text style={styles.avgLabel}>AVG</Text>
            <Text style={{ ...styles.avgValue, fontSize: 18 }}>
              {averageScore}%
            </Text>
          </View>
        </View>

        <View style={styles.graphContainer}>
          <Svg width={GRAPH_WIDTH} height={GRAPH_HEIGHT}>
            {/* Y-axis labels */}
            {[0, 25, 50, 75, 100].map((value) => {
              const y =
                PADDING +
                GRAPH_INNER_HEIGHT -
                ((value - minScore) / (maxScore - minScore)) *
                  GRAPH_INNER_HEIGHT;
              return (
                <SvgText
                  key={value}
                  x={PADDING - 10}
                  y={y + 4}
                  fontSize="12"
                  fill={theme.colors.textSecondary}
                  textAnchor="end"
                >
                  {value}
                </SvgText>
              );
            })}

            {/* X-axis labels */}
            {weekData.map((day, index) => {
              const x =
                PADDING + (index / (weekData.length - 1)) * GRAPH_INNER_WIDTH;
              const date = new Date(day.date);
              const label = date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });
              return (
                <SvgText
                  key={day.date}
                  x={x}
                  y={GRAPH_HEIGHT - PADDING + 20}
                  fontSize="10"
                  fill={theme.colors.textSecondary}
                  textAnchor="middle"
                >
                  {label}
                </SvgText>
              );
            })}

            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((value) => {
              const y =
                PADDING +
                GRAPH_INNER_HEIGHT -
                ((value - minScore) / (maxScore - minScore)) *
                  GRAPH_INNER_HEIGHT;
              return (
                <Line
                  key={value}
                  x1={PADDING}
                  y1={y}
                  x2={PADDING + GRAPH_INNER_WIDTH}
                  y2={y}
                  stroke={theme.colors.border}
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  opacity={0.3}
                />
              );
            })}

            {/* Area fill */}
            <Polygon
              points={areaPoints}
              fill={theme.colors.graphLine}
              opacity={0.2}
            />

            {/* Line */}
            <Polyline
              points={linePoints}
              fill="none"
              stroke={theme.colors.graphLine}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Selected point indicator */}
            {selectedPoint && (
              <>
                <Line
                  x1={selectedPoint.x}
                  y1={PADDING}
                  x2={selectedPoint.x}
                  y2={PADDING + GRAPH_INNER_HEIGHT}
                  stroke={theme.colors.graphLine}
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  opacity={0.5}
                />
                <Circle
                  cx={selectedPoint.x}
                  cy={selectedPoint.y}
                  r="6"
                  fill={theme.colors.graphLine}
                />
                <Circle
                  cx={selectedPoint.x}
                  cy={selectedPoint.y}
                  r="3"
                  fill={theme.colors.background}
                />
              </>
            )}

            {/* Tooltip */}
            {selectedPoint && (
              <>
                <SvgText
                  x={selectedPoint.x}
                  y={selectedPoint.y - 35}
                  fontSize="10"
                  fill={theme.colors.text}
                  textAnchor="middle"
                >
                  {formatDate(selectedPoint.date)}
                </SvgText>
                <SvgText
                  x={selectedPoint.x}
                  y={selectedPoint.y - 20}
                  fontSize="12"
                  fill={theme.colors.graphLine}
                  fontWeight="600"
                  textAnchor="middle"
                >
                  Score: {selectedPoint.score}
                </SvgText>
              </>
            )}
          </Svg>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  graphHeading: {
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  container: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
    marginHorizontal: theme.spacing.md,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: theme.spacing.md,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.xs,
  },
  title: {
    ...theme.typography.h2,
    fontSize: 18,
  },
  infoIconContainer: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.12)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: theme.spacing.xs,
  },
  infoIcon: {
    fontSize: 12,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  subtitle: {
    ...theme.typography.bodySmall,
    marginTop: theme.spacing.xs,
  },
  avgContainer: {
    alignItems: "flex-end",
  },
  timeContainer: {
    alignItems: "flex-start",
  },
  avgLabel: {
    ...theme.typography.caption,
    fontSize: 14,
    opacity: 0.7,
  },
  avgValue: {
    ...theme.typography.body,
    fontSize: 14,
    fontWeight: "600",
    color: theme.colors.text,
  },
  graphContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
