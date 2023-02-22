import React from 'react';
import { createRoot } from 'react-dom/client';
import { IndecisionApp } from './components/IndecisionApp.js';

createRoot(document.getElementById('app')).render(<IndecisionApp />);