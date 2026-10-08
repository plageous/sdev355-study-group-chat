export default function ChatHeader({ channel, isTyping }) {
  return (
    <header className="chat-header">
      <h1># {channel.name}</h1>
      {isTyping && <span classnName="typing">You are typing...</span>}
    </header>
  );
}
