/* eslint-disable no-unused-vars */
import { render, h } from 'preact';
import { inject } from '@vercel/analytics';
import App from './App';
import './index.css';

// Initialize Vercel Web Analytics
// This must run on the client side
inject();

render(<App />, document.getElementById('app'));
