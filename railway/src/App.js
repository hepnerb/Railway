import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// firebase.initializeApp({
//     apiKey: "AIzaSyCLrC4PaP-E5F-N2-mCiCgg8lNSzaJvxIs",
//     authDomain: "railway-db.firebaseapp.com",
//     projectId: "railway-db",
//     storageBucket: "railway-db.appspot.com",
//     messagingSenderId: "814197185809",
//     appId: "1:814197185809:web:aa438a4e06480f896d80b0",
//     measurementId: "G-R6YGSPCRMK"
  
//   })

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body>
        
      </body>
    </div>
  
  );
  // apiKey: "AIzaSyCLrC4PaP-E5F-N2-mCiCgg8lNSzaJvxIs",
  //   authDomain: "railway-db.firebaseapp.com",
  //   projectId: "railway-db",
  //   storageBucket: "railway-db.appspot.com",
  //   messagingSenderId: "814197185809",
  //   appId: "1:814197185809:web:aa438a4e06480f896d80b0",
  //   measurementId: "G-R6YGSPCRMK"
}

export default App;


// import React, { useRef, useState } from 'react';
// import './App.css';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// firebase.initializeApp({
//   apiKey: "AIzaSyCLrC4PaP-E5F-N2-mCiCgg8lNSzaJvxIs",
//   authDomain: "railway-db.firebaseapp.com",
//   projectId: "railway-db",
//   storageBucket: "railway-db.appspot.com",
//   messagingSenderId: "814197185809",
//   appId: "1:814197185809:web:aa438a4e06480f896d80b0",
//   measurementId: "G-R6YGSPCRMK"

// })

// const auth = firebase.auth();
// const firestore = firebase.firestore();

// function App() {
//   const [user] = useAuthState(auth);

//   return (
//     <div className="App">
//       <header className="App-header">

//       </header>
//       <section>
//         {user ? <Railway /> : <SignIn />}
//       </section>
//     </div>
//   );
// }
// function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.signInWithGoogle()
//     auth.signInWithPopup(provider)
//   }
//   return (
//     <button onClick={signInWithGoogle}>Sign in with Google</button>
//   )
// }

// function Railway() {
//  return auth.currentUser && (

//      <button onClick={() => auth.signOut()}>Sign Out</button>
//  )
// }
// export default App;
