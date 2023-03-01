import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getDatabase, onChildAdded, push, ref, set } from "firebase/database";

function App() {
  const [name, setName] = useState("");
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState("");
  const db = getDatabase();
  const chatListRef = ref(db, "chats");
  const updateheight = () => {
    const el = document.getElementById("chat");
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  };
  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      setChats((chats) => [...chats, data.val()]);
      setTimeout(() => {
        updateheight();
      }, 1000);
    });
  }, []);
  const sendChat = () => {
    const chatRef = push(chatListRef);
    set(chatRef, {
      name,
      message: msg,
    });
    setMsg("");
  };
  return (
    <div>
      {name ? null : (
        <div>
          <input
            type="text"
            placeholder="Enter your name to start"
            onBlur={(e) => setName(e.target.value)}
          ></input>
        </div>
      )}
      {name ? (
        <div>
          <h1>User: {name}</h1>
          <div id="chat" className="chat-container">
            {chats.map((c, i) => (
              <div
                key={i}
                className={`container ${c.name === name ? "me" : ""}`}
              >
                <p className="chatbox">
                  <strong>{c.name}</strong>
                  <span>{c.message}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="btm">
            <input
              type="text"
              placeholder="enter your message"
              className="input"
              onInput={(e) => setMsg(e.target.value)}
              value={msg}
            ></input>
            <button className="btn" onClick={(e) => sendChat()}>
              Send
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
