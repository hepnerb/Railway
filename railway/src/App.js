import './App.css';
import Board from '@asseinfo/react-kanban'
import '@asseinfo/react-kanban/dist/styles.css'

const board = {
  columns: [
    {
      id: 1,
      title: 'Backlog',
      cards: [
        {
          id: 1,
          title: 'Add card',
          description: 'Add capability to add a card in a column'
        },
      ]
    },
    {
      id: 2,
      title: 'Doing',
      cards: [
        {
          id: 2,
          title: 'Drag-n-drop support',
          description: 'Move a card between the columns'
        },
      ]
    }
  ]
}




function App() {
  return (
    <div className="App">
      <Board initialBoard={board} />
    </div>
  
  );

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
