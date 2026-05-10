import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;

async function initFirebase() {
  try {
    // Only fetch config if we need it
    const configModule = await import('../../firebase-applet-config.json');
    const firebaseConfig = configModule.default;

    if (!getApps().length) {
      app = initializeApp(firebaseConfig);
      auth = getAuth(app);
      db = getFirestore(app);
    } else {
      app = getApps()[0];
      auth = getAuth(app);
      db = getFirestore(app);
    }
  } catch (error) {
    console.warn('Firebase configuration missing or invalid. BethalHub is running in offline/demo mode.', error);
  }
}

// Initial attempt to init
initFirebase();

export { app, auth, db };
export { OperationType } from './firestore-utils';
export type { FirestoreErrorInfo } from './firestore-utils';
