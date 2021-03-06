// import './App.css';
// import Board,  { addCard} from '@asseinfo/react-kanban'
// import '@asseinfo/react-kanban/dist/styles.css'
// // comment
// const board = {
//   columns: [
//     {
//       id: 1,
//       title: 'Backlog',
//       cards: [
//         {
//           id: 1,
//           title: 'Add card',
//           description: 'Add capability to add a card in a column'
//         },
//       ]
//     },
//     {
//       id: 2,
//       title: 'Doing',
//       cards: [
//         {
//           id: 2,
//           title: 'Drag-n-drop support',
//           description: 'Move a card between the columns'
//         },
//       ]
//     }
//   ]
// }


// import { useState } from "react";
// // import "./styles.css";

// export default function App() {
//   const [isChecked, setIsChecked] = useState(false);
//   const [isChecked1, setIsChecked1] = useState(false);
//   var foo = 100;
//   const handleOnChange1= () => {
//     setIsChecked1(!isChecked1);
//   };
//   const handleOnChange = () => {
//     setIsChecked(!isChecked);
//     if (!isChecked){
//       foo = 10;
//     }
//   };

//   return (
//     <div className="App">
//       Things to do
//       <div className="topping">
//         <input
//           type="checkbox"
//           id="Kaggle"
//           name="Kaggle"
//           value="Kaggle"
//           checked={isChecked}
//           onChange={handleOnChange}
//         />
//         Kaggle
//       </div>
//       <div className="topping">
//         <input
//           type="checkbox"
//           id="Kaggle1"
//           name="Kaggle1"
//           value="Kaggle1"
//           checked={isChecked1}
//           onChange={handleOnChange1}
//         />
//         Kaggle1
//       </div>
//       <div className="result">
//         Above checkbox is {foo}.
//       </div>
//     </div>
//   );
// }


//please

import '@asseinfo/react-kanban/dist/styles.css'
import Board,  {addCard} from '@asseinfo/react-kanban'
import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import {ProgressBar} from '@adobe/react-spectrum'
// import { IgrExcelModule } from 'igniteui-react-excel';
// import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';


import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';
// import { ExcelUtility } from 'ExcelUtility';

// IgrExcelModule.register();
// IgrSpreadsheetModule.register();
const board = {
  columns: [
    {
      id: 1,
      title: 'Semester 1',
      cards: [
        {
          id: 1,
          title: 'CS142',
          description: 'Intro to Programming'
        },
        {
          id: 2,
          title: 'Math 290',
          description: 'Intro to Proofs'
        },
        {
          id: 3,
          title: 'Math 112',
          description: 'Calc 1'
        },
      ]
    },
    {
      id: 2,
      title: 'Semester 2',
      cards: [
        {
          id: 4,
          title: 'Math 113',
          description: 'Calc 2'
        },
        {
          id: 5,
          title: 'Math 213',
          description: 'Linear Algebra'
        },
        {
          id: 6,
          title: 'Math 215',
          description: 'Linear Algebra Coding'
        },
      ]
    },
    {
      id: 3,
      title: 'Semester 3',
      cards: [
        {
          id: 7,
          title: 'Math 314',
          description: 'Multivariable Calculus'
        },
        {
          id: 8,
          title: 'CS 235',
          description: 'Data Structures'
        },
        {
          id: 9,
          title: 'American Heritage',
          description: 'Best class this campus offers'
        },
      ]
    },
    {
      id: 4,
      title: 'Semester 4',
      cards: [
        {
          id: 10,
          title: 'Math 341',
          description: 'Theory to Analysis'
        },
        {
          id: 11,
          title: 'Math 334',
          description: 'Ordinary Differential Equations'
        },
      ]
    }
  ]
}



const localizer = momentLocalizer(moment);
// const spreadsheet = new IgrSpreadsheet({})
class App extends Component {
  
  state = {
    events: [
      {
        start: moment()
          .subtract(2, "days")
          .toDate(),
        end: moment()
          .subtract(2, "days")
          .toDate(),
        title: "Jeff Humphreys Info Session"
      },
      {
        start: moment()
          .add(4, "days")
          .toDate(),
        end: moment()
          .add(4, "days")
          .toDate(),
        title: "Lyft"
      },
      {
        start: moment()
          .subtract(1, "days")
          .toDate(),
        end: moment()
          .add(0, "days")
          .toDate(),
        title: "Sandbox Hackathon"
      }
    ]
  };
  

  
  render() {
    return (
      <div className="App">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
        <ProgressBar label="Progress" value={25} />
        <p>
        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked></input>
        <label class="form-check-label"> Complete 5 HackerRank Problems  </label>
        <br></br>
        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" unchecked></input>
        <label class="form-check-label"> Apply to 10 Internships </label>
        <br></br>
        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" unchecked></input>
        <label class="form-check-label"> Apply to 3 Grad Schools  </label>
        <br></br>
        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" unchecked></input>
        <label class="form-check-label"> Apply for Graduation  </label>
        <br></br>
        </p>
        <Board>{board}</Board>
        <p><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></p>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        
      </div>
    );
  }
}

export default App;




// function App() {
//   return (
//     <div className="App">
      


//       {/* <Board initialBoard={board}>
//       <button type='button' onClick={() => addCard({ id: 99, title: 'New Card' })}>Add Card</button>
//   {board}
// </Board> */}


//     </div>
  
//   );

// }

// export default App;


// import React, { useRef, useState } from 'react';
// import './App.css';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// // import 'firebase/analytics';

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
// // const firestore = firebase.firestore();

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
