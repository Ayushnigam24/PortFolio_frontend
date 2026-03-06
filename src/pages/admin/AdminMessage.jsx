import { useEffect, useState } from "react";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:5000/api/contact", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setMessages(data);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:5000/api/contact/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">User Messages</h1>
      {messages.length === 0 && <p>No messages yet.</p>}
      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg._id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-start">
            <div>
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              {msg.subject && <p><strong>Subject:</strong> {msg.subject}</p>}
              <p className="mt-2">{msg.message}</p>
              <p className="text-xs text-gray-400 mt-1">{new Date(msg.createdAt).toLocaleString()}</p>
            </div>
            <button
              onClick={() => handleDelete(msg._id)}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}