import {Switch,Route} from 'react-router-dom'
import {Home} from './Home'
import {About} from './About'
import {Contact} from './Contact'
import {Cakes} from './cakes'
// firebase
//import firebase from 'firebase/app'
//import 'firebase/firestore'
//import 'firebase/auth'
//import 'firebase/storage'
//import {firebaseConfig} from '../components/config/Config'

export function Content(props) {
    //if( !firebase.apps.length ) {
    //    firebase.initializeApp( firebaseConfig )
   // }

  //  const getArticles = () => {
   //     return new Promise( (resolve,reject) => {
       //     let articles = []
        //    const db = firebase.firestore()
        //    db.collection('articles').get()
        //    .then( (snapshot) => {
          //      snapshot.forEach( (doc) => {
            //        articles.push( doc.data() )
          //      })
          //      resolve( articles )
         //   })
         //   .catch( (error) => {
        //        reject( error.message )
        //    })
      //  } )
   // }
    
const postsURL = "https://public-api.wordpress.com/rest/v1.1/sites/google827298560.wordpress.com/posts/"

    return (
        <Switch>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/cakes">
           
            <cakes URL={postsURL}/>

            </Route>
             
            
            <Route exact path="/">
                <Home  />
            </Route>
        </Switch>
    )
}

export default Content