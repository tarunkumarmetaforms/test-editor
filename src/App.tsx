import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Editor from '@monaco-editor/react';

// import './App.css'

function App() {
  return <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />;
}

export default App
