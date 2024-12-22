'use server'

import { FirebaseApp, initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseConfig } from '@/app/firebase/config'


let app: FirebaseApp | undefined
try {
  app = initializeApp(firebaseConfig)
} catch (error: unknown) {
  if (error instanceof Error) {
    throw new Error(`Firebase initialization error: ${error.message}`)
  } else {
    throw new Error('Firebase initialization error: unknown error')
  }
}

const auth = getAuth(app)

export async function signUp(email: string, password: string) {
  if (!app) {
    return { error: 'Firebase is not initialized. Please check your configuration.' }
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password)
    return { success: true }
  } catch (error: unknown) {
    const firebaseError = error as { code: string }
    if (firebaseError.code === 'auth/email-already-in-use') {
      return { error: 'This email is already in use. Please try a different one.' }
    } else if (firebaseError.code === 'auth/weak-password') {
      return { error: 'Password is too weak. Please use a stronger password.' }
    } else if (firebaseError.code === 'auth/invalid-email') {
      return { error: 'Invalid email address. Please check and try again.' }
    }
    return { error: 'Failed to create account. Please try again.' }
  }
}

