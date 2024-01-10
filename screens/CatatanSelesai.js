import React, { useState, useEffect } from "react";
import { Center, Text, Box, ScrollView, Icon, Spinner } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { TaskList } from "../components";
import { Header } from "../components";
import { getNote, editNote } from "../src/actions/AuthAction";

const CatatanSelesai = () => {
  const [completedListLength, setCompletedListLength] = useState(0);
  const [allList, setAllList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleStatusChange = async (noteId, isCompleted) => {
    try {
      await editNote(noteId, { isCompleted });
      getTaskList();
    } catch (error) {
      console.error("Error updating task status: in CatatanSelesai.js");
      console.error(error.message);
    }
  };

  const getTaskList = async () => {
    try {
      const notes = await getNote();
      setAllList(notes);
      setCompletedListLength(notes.filter((item) => item.isCompleted).length);
    } catch (error) {
      console.error("Error getting task list: in CatatanSelesai.js");
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
      <Header title="Telah Selesai" withBack="true" />
      <Box mx={3} mt={3} flex={1}>
        {isLoading ? (
          <Center flex={1}>
            <Spinner size="lg" />
          </Center>
        ) : completedListLength === 0 ? (
          <Center flex={1}>
            <Icon
              as={AntDesign}
              name="frowno"
              size={82}
              color="primary.600"
              mb={2}
            />
            <Text fontSize={16} bold={true}>
              tidak ada yang selesai
            </Text>
            <Text fontSize={16}>Cepat Selesaikan Tugasmu</Text>
          </Center>
        ) : (
          <ScrollView>
            {allList.map((item) => (
              <Box key={item.noteId}>
                {item.isCompleted && (
                  <TaskList
                    data={item}
                    onChecked={() =>
                      handleStatusChange(item.noteId, !item.isCompleted)
                    }
                    onItemPress={() =>
                      handleStatusChange(item.noteId, !item.isCompleted)
                    }
                  />
                )}
              </Box>
            ))}
          </ScrollView>
        )}
      </Box>
    </>
  );
};

export default CatatanSelesai;
