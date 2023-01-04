import React, { useEffect } from 'react'
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

function AuthenticationUI() {
  useEffect(() => {
    // 1) Initialize the FirebaseUI Widget using Firebase.
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())

    // 2) Set up sign-in methods
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult(authResult, redirectUrl) {
          console.log('signInSuccessWithAuthResult:', 'authResult:', authResult, 'redirectUrl:', redirectUrl)
          return true
        },
        uiShown() {
          document.getElementById('loader').style.display = 'none'
        },
      },
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          customParameters: {
            prompt: 'select_account',
          },
        },
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ],
    }

    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig)
  }, [])

  return (
    <>
      <div id="firebaseui-auth-container" />
      <div id="loader">Loading...</div>
    </>
  )
}

export default AuthenticationUI
