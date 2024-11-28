import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const RealTimeData = () => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      setMessages(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Recent Messages</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <p>{msg.name} ({msg.email})</p>
            <p>{msg.message}</p>
            <p>{new Date(msg.timestamp.seconds * 1000).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeData;
