import React, { useState, useEffect } from "react";
import {
  Box,
  HStack,
  Input,
  IconButton,
  Icon,
  Text,
  Toast,
  ScrollView,
  Button,
} from "native-base";
import { Header, TaskList } from "../components";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  addNote,
  getNote,
  editNote,
  deleteNote,
} from "../src/actions/AuthAction";

const Catatan = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  const toastID = "toast-add-task";

  const handleAddTask = async (data) => {
    if (data === "") {
      if (!Toast.isActive(toastID)) {
        Toast.show({
          id: toastID,
          title: "Masukan Catatan",
        });
      }
      return;
    }

    try {
      await addNote({ title: data, isCompleted: false });
      getTaskList();
      setInputValue("");
    } catch (error) {
      console.error("Error adding task: in Catatan.js");
      console.error(error.message);
    }
  };

  const handleDeleteTask = async (noteId) => {
    try {
      await deleteNote(noteId);
      getTaskList();
    } catch (error) {
      console.error("Error deleting task: in Catatan.js");
      console.error(error.message);
    }
  };

  const handleStatusChange = async (noteId, isCompleted) => {
    try {
      await editNote(noteId, { isCompleted });
      getTaskList();
    } catch (error) {
      console.error("Error updating task status: in Catatan.js");
      console.error(error.message);
    }
  };

  const getTaskList = async () => {
    try {
      const notes = await getNote();
      setList(notes);
    } catch (error) {
      console.error("Error getting task list: in Catatan.js");
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <>
      <Header title={"Catatan"} withBack="true" />
      <ScrollView>
        <Box mt={2}>
          <Box mx={4}>
            <Button
              bg={"#0878CA"}
              size="sm"
              py={3}
              borderRadius={"lg"}
              onPress={() => navigation.replace("CatatanSelesai")}
            >
              <Text color={"#FFFF"} bold>
                Selesai
              </Text>
            </Button>
          </Box>

          <Box mt="15px" mx="15px" mb="7.5px">
            <HStack space="15px">
              <Input
                size="lg"
                flex={6}
                onChangeText={(char) => setInputValue(char)}
                value={inputValue}
                borderRadius={"xl"}
                borderWidth={2}
                borderColor="#0878CA"
                placeholder="Tambah Kegiatan"
              />
              <IconButton
                flex={1}
                borderRadius="xl"
                variant="solid"
                bg={"#0878CA"}
                icon={<Icon as={Feather} name="plus" size="lg" color="#FFFF" />}
                onPress={() => {
                  handleAddTask(inputValue);
                }}
              />
            </HStack>
          </Box>
          <ScrollView>
            <Box mb="15px" mx="15px">
              {list.map((item, index) => (
                <Box key={item.title + index.toString()}>
                  <TaskList
                    data={item}
                    index={index}
                    deletedIcon={true}
                    onItemPress={() =>
                      handleStatusChange(item.noteId, !item.isCompleted)
                    }
                    onChecked={() =>
                      handleStatusChange(item.noteId, !item.isCompleted)
                    }
                    onDeleted={() => handleDeleteTask(item.noteId)}
                  />
                </Box>
              ))}
            </Box>
          </ScrollView>
        </Box>
      </ScrollView>
    </>
  );
};

export default Catatan;
