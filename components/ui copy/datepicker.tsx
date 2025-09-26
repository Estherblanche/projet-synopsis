import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react-native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  FlatList,
} from "react-native";

type Mode = "date" | "month" | "year" | "time";

interface DatePickerProps {
  value: Date;
  onValueChange: (date: Date) => void;
  isVisible: boolean;
  onRequestClose: () => void;
  mode?: Mode;
  label?: string;
}

const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const daysOfWeek = ["D", "L", "M", "M", "J", "V", "S"];

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onValueChange,
  isVisible,
  onRequestClose,
  mode = "date",
  label,
}) => {
  const [tempDate, setTempDate] = useState(value);
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

  useEffect(() => {
    setTempDate(value);
  }, [value, isVisible]);

  const updateDatePart = (partial: Partial<Date>) => {
    const updated = new Date(tempDate);
    if (partial.getFullYear) updated.setFullYear(partial.getFullYear());
    if (partial.getMonth !== undefined) updated.setMonth(partial.getMonth());
    if (partial.getDate !== undefined) updated.setDate(partial.getDate());
    if (partial.getHours !== undefined) updated.setHours(partial.getHours());
    if (partial.getMinutes !== undefined)
      updated.setMinutes(partial.getMinutes());
    setTempDate(new Date(updated));
  };

  const confirm = () => {
    onValueChange(tempDate);
    onRequestClose();
  };

  const renderCalendar = () => {
    const year = tempDate.getFullYear();
    const month = tempDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday
    const numDays = new Date(year, month + 1, 0).getDate();

    const calendarDays = [
      ...Array(firstDay).fill(null),
      ...Array.from({ length: numDays }, (_, i) => i + 1),
    ];

    return (
      <View>
        <View className="flex-row justify-between items-center mb-2">
          {/* navigate left */}
          <TouchableOpacity
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"
            onPress={() => {
              const newDate = new Date(tempDate);
              newDate.setMonth(month - 1);
              updateDatePart(newDate);
            }}
          >
            <ChevronLeft size={18} color="gray" />
          </TouchableOpacity>

          <Text className="text-lg font-semibold">
            {months[month]} {year}
          </Text>

          {/* navigate right */}
          <TouchableOpacity
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"
            onPress={() => {
              const newDate = new Date(tempDate);
              newDate.setMonth(month + 1);
              updateDatePart(newDate);
            }}
          >
            <ChevronRight size={18} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Jours de la semaine */}
        <View className="flex-row justify-between mb-1">
          {daysOfWeek.map((d, i) => (
            <Text
              key={`${d}-${i}`}
              className="text-center w-[14%] text-gray-600"
            >
              {d}
            </Text>
          ))}
        </View>

        {/* Grille des jours */}
        <FlatList
          data={calendarDays}
          numColumns={7}
          scrollEnabled={false}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={({ item }) => {
            const isSelected = item === tempDate.getDate();
            return (
              <TouchableOpacity
                disabled={!item}
                onPress={() => {
                  const newDate = new Date(tempDate);
                  newDate.setDate(item!);
                  updateDatePart(newDate);
                }}
                className={`w-[14%] h-10 justify-center items-center m-[0.5px] ${
                  isSelected ? "bg-blue-500 rounded-full" : ""
                }`}
              >
                <Text className={isSelected ? "text-white" : "text-black"}>
                  {item || ""}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View className="flex-1 justify-end bg-black/30">
        <View className="bg-white p-4 rounded-t-2xl max-h-[60%]">
          {label && (
            <Text className="mb-2 text-gray-700 font-semibold">{label}</Text>
          )}

          <ScrollView>
            {mode === "date" && renderCalendar()}

            {/* Autres modes */}
            {mode === "year" && (
              <View className="flex flex-wrap flex-row gap-2">
                {years.map((year) => (
                  <TouchableOpacity
                    key={year}
                    onPress={() => {
                      const newDate = new Date(tempDate); 
                      newDate.setFullYear(year);
                      updateDatePart(newDate);
                    }}
                    className="p-2 bg-gray-100 rounded"
                  >
                    <Text>{year}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {mode === "month" && (
              <View className="flex flex-wrap flex-row gap-2">
                {months.map((month, i) => (
                  <TouchableOpacity
                    key={month}
                    onPress={() => {
                      const newDate = new Date(tempDate); 
                      newDate.setMonth(i);
                      updateDatePart(newDate);
                    }}
                    className="p-2 bg-gray-100 rounded"
                  >
                    <Text>{month}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {mode === "time" && (
              <View className="flex flex-row gap-6">
                <View>
                  <Text className="font-semibold">Heures</Text>
                  {[...Array(24)].map((_, h) => (
                    <TouchableOpacity
                      key={h}
                      onPress={() => {
                        const newDate = new Date(tempDate);
                        newDate.setHours(h);
                        updateDatePart(newDate);
                      }}
                    >
                      <Text className="p-2">{h} h</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View>
                  <Text className="font-semibold">Minutes</Text>
                  {[0, 15, 30, 45].map((m) => (
                    <TouchableOpacity
                      key={m}
                      onPress={() => {
                        const newDate = new Date(tempDate);
                        newDate.setMinutes(m);
                        updateDatePart(newDate);
                      }}
                    >
                      <Text className="p-2">{m} min</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}
          </ScrollView>

          {/* Boutons */}
          <View className="flex flex-row justify-between mt-4">
            <TouchableOpacity onPress={onRequestClose}>
              <Text className="text-red-500 font-semibold">Annuler</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={confirm}>
              <Text className="text-blue-500 font-semibold">Valider</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DatePicker;
