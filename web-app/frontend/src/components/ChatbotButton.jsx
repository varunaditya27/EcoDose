import React, { useState, useRef, useEffect } from 'react';
import './ChatbotButton.css';

const ChatbotButton = ({ enabled, soilData, open, setOpen }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I am the EcoDose Assistant. Ask me anything about your soil, biofertilizer, or recommendations.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const sidebarRef = useRef(null);

  // Add/remove class to body for margin-right when sidebar is open
  useEffect(() => {
    if (open) {
      document.body.classList.add('chatbot-sidebar-open');
    } else {
      document.body.classList.remove('chatbot-sidebar-open');
    }
    return () => document.body.classList.remove('chatbot-sidebar-open');
  }, [open]);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  // Trap focus in sidebar when open
  useEffect(() => {
    if (!open) return;
    const focusable = sidebarRef.current?.querySelectorAll('input,button,[tabindex]:not([tabindex="-1"])');
    if (focusable && focusable.length) focusable[0].focus();
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'Tab' && focusable && focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, setOpen]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          soil_data: soilData,
          history: messages.filter(m => m.role === 'user' || m.role === 'assistant'),
        }),
      });
      const data = await res.json();
      if (res.ok && data.reply) {
        setMessages((msgs) => [...msgs, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages((msgs) => [...msgs, { role: 'assistant', content: 'Sorry, I could not process your request.' }]);
      }
    } catch (err) {
      setMessages((msgs) => [...msgs, { role: 'assistant', content: 'Network error. Please try again.' }]);
    }
    setLoading(false);
  };

  const handleClick = () => {
    if (!enabled) return;
    setOpen(true);
  };

  return (
    <>
      {/* Only show FAB and tooltip when sidebar is not open */}
      {!open && (
        <>
          <button
            className={`chatbot-fab${enabled ? '' : ' chatbot-fab-disabled'}`}
            onClick={handleClick}
            onMouseEnter={() => !enabled && setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            aria-label="Open EcoDose Assistant"
            tabIndex={0}
            style={{
              position: 'fixed',
              bottom: '2.5rem',
              right: '2.5rem',
              zIndex: 200,
              opacity: enabled ? 1 : 0.6,
              cursor: enabled ? 'pointer' : 'not-allowed',
              pointerEvents: 'auto', // Always allow pointer events for hover
            }}
          >
            <span role="img" aria-label="chat">💬</span>
          </button>
          {showTooltip && (
            <div className="chatbot-tooltip" style={{ position: 'fixed', bottom: '5.2rem', right: '2.5rem', background: '#333', color: '#fff', padding: '0.7rem 1.1rem', borderRadius: '8px', fontSize: '1rem', zIndex: 201 }}>
              Enter soil data to unlock the EcoDose Assistant.
            </div>
          )}
        </>
      )}
      {/* Sidebar and overlay */}
      {open && enabled && (
        <>
          {/* Overlay only on mobile */}
          <div className="chatbot-sidebar-overlay" onClick={() => setOpen(false)} aria-hidden="true" />
          <aside className="chatbot-sidebar" ref={sidebarRef} role="dialog" aria-modal="true" tabIndex={-1}>
            <div className="chatbot-sidebar-header">
              <h3>EcoDose Assistant</h3>
              <button className="chatbot-sidebar-close" onClick={() => setOpen(false)} aria-label="Close chat">&times;</button>
            </div>
            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chatbot-msg chatbot-msg-${msg.role}`}>{msg.content}</div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form className="chatbot-input-row" onSubmit={sendMessage}>
              <input
                className="chatbot-input"
                type="text"
                placeholder="Type your question..."
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={loading}
                autoFocus
              />
              <button className="chatbot-send-btn" type="submit" disabled={loading || !input.trim()}>
                {loading ? '...' : 'Send'}
              </button>
            </form>
          </aside>
        </>
      )}
    </>
  );
};

export default ChatbotButton; 