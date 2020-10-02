////////////////////////////////////////////////////////////////////////////////
//
// data-model.js
//
// This module implements a data access strategy pattern. It adds a layer of 
// abstraction for the React components because they need not concern
// themselves with data access. This also allows us to change the tech without
// breaking the React components. Today we are using Axios; we can change to
// something else tomorrow.
//
////////////////////////////////////////////////////////////////////////////////


// This is General Assembly code that I added to my project.
import apiUrl from './../apiConfig'

import axios from 'axios'




// Implements a data acccess stragegy for Russian Flashcards.
//
class FlashcardsDataModel {

    constructor() {
        this.foo = 1;
    }


    // changePassword = (oldPassword, newPassword) => {

    // };


    logout = (token) => {

        // Return the promise to the caller.
        return axios({
                  method: 'delete',
                  url: `${apiUrl}/sign-out`,
                  headers: {'Authorization': `Bearer ${token}`}
              });
    };


    signin = (email, password) => {

        const data = {
            "credentials": {
                "email": email,
                "password": password
            }
        }; 

        // Return the promise to the caller.
        return axios.post(`${apiUrl}/sign-in`, data);
    };
}


export default FlashcardsDataModel;