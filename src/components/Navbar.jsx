import React from 'react'

export default function Navbar({ activeDoc, setActiveDoc }) {
    return (
        <nav className="mb-4 flex justify-center gap-4 space-x-4 h-10">
            <button
                onClick={() => setActiveDoc("gdocs")}
                className={`px-4 py-2 transition duration-200 ${activeDoc === "gdocs"
                        ? "text-white"
                        : "text-gray-500 hover:text-gray-100"
                    }`}
            >
                Google Docs
            </button>
            <button
                onClick={() => setActiveDoc("msword")}
                className={`px-4 py-2  transition duration-200 ${activeDoc === "msword"
                        ? "text-white"
                        : "text-gray-500 hover:text-gray-300"
                    }`}
            >
                Microsoft Word
            </button>
        </nav>
    );
}
