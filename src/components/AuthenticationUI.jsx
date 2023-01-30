import React, { useEffect } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

function AuthenticationUI() {
  // 1) Initialize the FirebaseUI Widget using Firebase.
  const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())

  // 2) Set up sign-in methods
  const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult() {
        return false
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
          auth_type: 'reauthenticate',
        },
      },
      {
        provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        scopes: [
          'public_profile',
          'email',
        ],
      },
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: true,
      },
    ],
  }

  useEffect(() => {
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig)
  }, [])

  return (
    <>
      <h5>Or create an account</h5>
      <div id="firebaseui-auth-container" />
      <div id="loader">Loading...</div>
    </>
  )
}

export default AuthenticationUI
