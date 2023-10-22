// import { useEffect } from 'react';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import botimg from "../../assets/botimg.png";

const steps = [
  {
    id: "0",
    message: "Hello, Welcome!!!",
    trigger: "1",
  },
  {
    id: "1",
    message: "What is your name?",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Hi {previousValue}, nice to meet you!",
    end: true,
  },
];

// Creating our own theme
const theme = {
  background: "#C9FF8F",
  headerBgColor: "#197B22",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};

// Set some properties of the bot
const config = {
  botAvatar: botimg,
  floating: true,
};

const ChatBt = () => {
  // useEffect (() => {
  //     socket.on ("connection", null);
  //     socket.on ("message", (payload) => {
  //         setMessages ((prev) => {
  //             return [...prev, payload.message];
  //         });
  //     });
  //     return () => socket.off ("message"); // add this line to your code
  // }, []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          // This appears as the header
          // text for the chat bot
          headerTitle="LawBot"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
};

export default ChatBt;
