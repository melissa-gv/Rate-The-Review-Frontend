import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

const firebaseConfig = {
  apiKey: 'AIzaSyCPwgxVk7l9dXy0SB3hSazNaNnKPpMf_g8',
  authDomain: 'rate-the-review.firebaseapp.com',
  projectId: 'rate-the-review',
  storageBucket: 'rate-the-review.appspot.com',
  messagingSenderId: '522572494472',
  appId: '1:522572494472:web:cce79205a60b35ec87913d',
  measurementId: 'G-M0ZHBXBVLB',
}

firebase.initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('content-wrap')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
