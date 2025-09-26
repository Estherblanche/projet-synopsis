import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  LayoutRectangle,
  UIManager,
  findNodeHandle,
} from "react-native";

type MenuOption = {
  label: string;
  onPress: () => void;
};

type MenuProps = {
  triggerClassName?: string;
  menuPosition: "left" | "right";
  trigger: React.ReactNode;
  options: MenuOption[];
};

export default function Menu({
  trigger,
  options,
  menuPosition,
  triggerClassName,
}: MenuProps) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<LayoutRectangle | null>(null);
  const triggerRef = useRef<View>(null);

  const openMenu = () => {
    const node = findNodeHandle(triggerRef.current);
    if (node) {
      UIManager.measure(node, (_x, _y, width, height, pageX, pageY) => {
        setPosition({ x: pageX, y: pageY, width, height });
        setVisible(true);
      });
    }
  };

  const closeMenu = () => setVisible(false);

  return (
    <>
      <View ref={triggerRef}>
        <Pressable className={triggerClassName} onPress={openMenu}>
          {trigger}
        </Pressable>
      </View>

      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={closeMenu}
        className="relative"
      >
        <Pressable
          className="relative"
          style={styles.overlay}
          onPress={closeMenu}
        >
          {position && (
            <View
              className="rounded-lg"
              style={[
                styles.menu,
                {
                  top: position.y + 5,
                  left:
                    menuPosition === "left"
                      ? position.x
                      : position.x + position.width - 150,
                },
              ]}
            >
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    closeMenu();
                    option.onPress();
                  }}
                  style={[
                    styles.item,
                    index !== options.length - 1 && styles.itemBorder,
                  ]}
                >
                  <Text style={styles.itemText}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  menu: {
    position: "absolute",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    minWidth: 150,
    zIndex: 999,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  itemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemText: {
    fontSize: 16,
  },
});
