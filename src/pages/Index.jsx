import React, { useState } from "react";
import { Box, VStack, HStack, Text, Input, Button, Grid, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { FaPlus, FaCode, FaHistory } from "react-icons/fa";

const chatData = [
  {
    id: 1,
    title: "Chat 1",
    messages: [
      { id: 1, content: "Message 1", frames: ["https://images.unsplash.com/photo-1580136579312-94651dfd596d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcmFtZSUyMDF8ZW58MHx8fHwxNzEwNTgyNzQxfDA&ixlib=rb-4.0.3&q=80&w=1080"] },
      { id: 2, content: "Message 2", frames: ["https://images.unsplash.com/photo-1526662294706-2004786e247e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcmFtZSUyMDJ8ZW58MHx8fHwxNzEwNTgyNzQxfDA&ixlib=rb-4.0.3&q=80&w=1080"] },
    ],
  },
  {
    id: 2,
    title: "Chat 2",
    messages: [
      { id: 1, content: "Message 1", frames: ["https://images.unsplash.com/photo-1706670044033-7567676dfab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcmFtZSUyMDN8ZW58MHx8fHwxNzEwNTgyNzQxfDA&ixlib=rb-4.0.3&q=80&w=1080"] },
      { id: 2, content: "Message 2", frames: ["https://images.unsplash.com/photo-1514064019862-23e2a332a6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcmFtZSUyMDR8ZW58MHx8fHwxNzEwNTgyNzQyfDA&ixlib=rb-4.0.3&q=80&w=1080"] },
    ],
  },
];

const Index = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [message, setMessage] = useState("");

  const handleChatClick = (chatId) => {
    setActiveChat(chatData.find((chat) => chat.id === chatId));
  };

  const handleSendMessage = () => {
    // TODO: Implement sending message logic
    setMessage("");
  };

  return (
    <HStack spacing={4} alignItems="stretch" height="100vh">
      <Box width="300px" bg="gray.100" p={4}>
        <Accordion allowMultiple>
          {chatData.map((chat) => (
            <AccordionItem key={chat.id}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {chat.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {chat.messages.map((message) => (
                  <Text key={message.id} cursor="pointer" onClick={() => handleChatClick(chat.id)}>
                    {message.content}
                  </Text>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
      <VStack flex={1} p={4} spacing={4} alignItems="stretch">
        {activeChat ? (
          <>
            <Text fontWeight="bold">{activeChat.title}</Text>
            <Box flex={1} overflowY="auto">
              {activeChat.messages.map((message) => (
                <Box key={message.id} mb={4}>
                  <Text>{message.content}</Text>
                  <Grid templateColumns="repeat(4, 1fr)" gap={2} mt={2}>
                    {message.frames.map((frame, index) => (
                      <Image key={index} src={frame} />
                    ))}
                  </Grid>
                </Box>
              ))}
            </Box>
            <HStack>
              <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." />
              <Button onClick={handleSendMessage}>
                <FaPlus />
              </Button>
            </HStack>
          </>
        ) : (
          <Text>Select a chat to view messages</Text>
        )}
      </VStack>
    </HStack>
  );
};

export default Index;
