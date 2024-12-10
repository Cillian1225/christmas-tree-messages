import React, { useState } from 'react';
import ChristmasTree from './ChristmasTree';
interface Message {
    id: number;
    content: string;
    author: string;
    createdAt: Date;
}

const TreePage = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSubmitMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        setMessages((prev) => [
            ...prev,
            {
                id: Date.now(),
                content: message,
                author: 'Anonymous',
                createdAt: new Date(),
            },
        ]);
        setMessage('');
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-green-400 mb-2">My Christmas Tree</h1>
                    <p className="text-gray-400">Share your Christmas wishes!</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                        <ChristmasTree />
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6">
                        <form onSubmit={handleSubmitMessage} className="mb-6">
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 mb-4"
                                placeholder="Write your Christmas message..."
                                rows={4}
                            />
                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                            >
                                Leave a Message
                            </button>
                        </form>

                        <div className="space-y-4">
                            {messages.map((msg) => (
                                <div key={msg.id} className="bg-gray-700 rounded-lg p-4">
                                    <p className="text-gray-200">{msg.content}</p>
                                    <div className="mt-2 text-sm text-gray-400">
                                        <span>{msg.author} • </span>
                                        <span>{new Date(msg.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TreePage;
