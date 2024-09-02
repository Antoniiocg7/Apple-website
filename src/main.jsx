import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://8c5d362799b4a8cedb95f3d0d8515314@o4507879056474112.ingest.de.sentry.io/4507879059030096",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.browserProfilingIntegration(),
    Sentry.replayIntegration(),
  ],

  tracesSampleRate: 1.0, 

  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  profilesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, 
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
