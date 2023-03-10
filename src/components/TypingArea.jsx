import React from 'react'

export default function TypingArea() {
    function changeHeight() {
        const textArea = document.querySelector('.typing-area')
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';
    }

    return (
        <textarea onChange={changeHeight} className="typing-area">
        </textarea>
    )
}