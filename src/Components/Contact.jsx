import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [suggestion, setSuggestion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, suggestion });
        setName('');
        setEmail('');
        setSuggestion('');
    };

    return (
        <div className="flex justify-center items-center min-h-screen px-8 md:px-14 lg:px-36">
            <form 
                onSubmit={handleSubmit} 
                className="bg-transparent rounded-lg shadow-2xl p-8 w-full max-w-5xl space-y-6" 
            >
                <h2 className="text-4xl font-bold text-white text-center">Contact Us</h2>
                <div className="flex justify-between space-x-8"> 
                    <div className="flex flex-col w-1/2">
                        <div>
                            <label className="block text-white text-lg" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-white text-lg" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div>
                            <label className="block text-white text-lg" htmlFor="suggestion">Suggestion</label>
                            <textarea
                                id="suggestion"
                                value={suggestion}
                                onChange={(e) => setSuggestion(e.target.value)}
                                maxLength={500}
                                required
                                className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
                                rows="5"
                            />
                            <p className="text-white text-sm">{500 - suggestion.length} characters remaining</p>
                        </div>
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;
