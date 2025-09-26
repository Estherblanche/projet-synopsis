import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StepIndicator = ({
  //@ts-ignore
  steps,
  //@ts-ignore
  currentStep,
  inactiveColor = "#ccc",
  activeColor = "#f28a00",
  //   completedIcon = "check-circle",
}) => {
  return (
    <View style={styles.container} className="flex flex-row items-center">
      {steps.map((step: string, index: number) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <React.Fragment key={index}>
            <View style={styles.stepContainer} className="">
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor: isCompleted
                      ? "white"
                      : isActive
                      ? activeColor
                      : inactiveColor,
                    borderColor: isCompleted ? activeColor : "transparent",
                  },
                ]}
              >
                {isCompleted ? (
                  <MaterialIcons name="check" size={18} color={activeColor} />
                ) : (
                  <Text
                    className="font-semibold"
                    style={{ color: isActive ? "white" : "black" }}
                  >
                    {index + 1}
                  </Text>
                )}
              </View>
              <Text style={styles.label}>{step}</Text>
            </View>

            {/* Ligne entre les étapes sauf la dernière */}
            {index < steps.length - 1 && (
              <View className="flex-1 flex flex-row items-center justify-center h-full">
                <View
                  className="w-full mb-4"
                  style={[
                    styles.line,
                    {
                      backgroundColor: isCompleted
                        ? activeColor
                        : inactiveColor,
                    },
                  ]}
                />
              </View>
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepContainer: {
    alignItems: "center",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    height: 2,
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    textAlign: "center",
  },
});

export default StepIndicator;
