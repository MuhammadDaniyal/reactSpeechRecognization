import React, { useState } from 'react'
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";
import './App.css'



const App = () => {
  const [text, setText] = useState('')
  const [isCopied, setCopied] = useClipboard(text);
  const speechRecognition = () => SpeechRecognition.startListening({ continuous: true, language: "en-IN" })
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
      <div className="container">
        <h2>Speech to Text Converter</h2>
        <br />
        <p>A React hook that converts speech from the microphone to text and makes it available to your React
          components.</p>
        <div className="main-content" onClick={() => setText(transcript)}>
          {transcript}
        </div>
        <div className="btn-style">
          <button onClick={speechRecognition}>Start Listening</button>
          <button onClick={setCopied}> {isCopied ? "copied? " : "Copy"}</button>
          <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        </div>
      </div>
    </>
  )
}

export default App

