import React from 'react';
import { createRoot } from 'react-dom/client';
import { IndecisionApp } from './components/IndecisionApp.js';
import './styles/styles.scss';

createRoot(document.getElementById('app')).render(<IndecisionApp />);