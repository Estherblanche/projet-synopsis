import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

type Option = { id: number; label: string };

type Props = {
  value?: string;
  label?: string;
  onChangeText?: (value: string) => void;
  placeholder?: string;
  inputMode?:
    | "decimal"
    | "email"
    | "none"
    | "numeric"
    | "search"
    | "tel"
    | "text"
    | "url";
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  list?: Option[];
  editable?: boolean;
};

const Autocomplete = (props: Props) => {
  const [query, setQuery] = useState(props.value || "");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredList = props.list?.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: Option) => {
    setQuery(item.label);
    setShowDropdown(false);
    props.onChangeText?.(item.label);
  };

  const handleChangeText = (text: string) => {
    setQuery(text);
    setShowDropdown(true);
    props.onChangeText?.(text);
  };

  return (
    <View className="w-full relative">
      {props.label && (
        <Text className="text-sm mb-1 font-semibold">{props.label}</Text>
      )}
      <TextInput
        secureTextEntry={props.secureTextEntry}
        inputMode={props.inputMode}
        value={query}
        onChangeText={handleChangeText}
        placeholder={props.placeholder}
        className="w-full p-3 border rounded-lg border-gray-300 focus:border-gray-500"
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        textAlignVertical="top"
        onFocus={() => setShowDropdown(true)}
        editable={props.editable ? props.editable : true} // ← Empêche le clavier
        // onTouchStart={() => setShowDropdown(true)} // ← Permet d'ouvrir le menu
      />

      {showDropdown && (
        <ScrollView
          showsVerticalScrollIndicator
          className="top-2 w-full max-h-52"
        >
          <View className="bg-white border border-gray-200 rounded-lg shadow-lg">
            {filteredList && filteredList.length > 0 ? (
              filteredList?.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleSelect(item)}
                    className="px-3 py-2 border-b border-gray-100"
                  >
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                );
              })
            ) : (
              <TouchableOpacity
                onPress={() => setShowDropdown(false)}
                className="px-3 py-2"
              >
                <Text className="text-gray-500 italic">Not found</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Autocomplete;
