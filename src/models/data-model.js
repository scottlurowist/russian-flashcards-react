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


import axios from 'axios'


// This is General Assembly code that I added to my project. This config file
// contains the URLs for data access.
import apiUrl from './../apiConfig'




// Implements a data acccess stragegy for Russian Flashcards.
//
class FlashcardsDataModel {

    // Allows the user to change their password by invoking the
    // webservice for changing a password. 
    //
    // oldPassword - The password to be changed.
    // newPassword - The password to replace oldPassword.
    // token - A JSON web token used for authorization to the web service.
    //
    changePassword = (oldPassword, newPassword, token) => {

        const data =  {
            "passwords": {
              "old": oldPassword,
              "new": newPassword
            }
        }

        // Return the promise to the caller.
        return axios({
            method: 'patch',
            url: `${apiUrl}/change-password`,
            headers: {'Authorization': `Bearer ${token}`},
            data: data
        });
    };


    // Allows the user to logout of Russian Flashcards by invoking the
    // webservice for logging out. 
    //
    // token - A JSON web token used for authorization to the web service.
    //
    logout = (token) => {

        // Return the promise to the caller.
        return axios({
                  method: 'delete',
                  url: `${apiUrl}/sign-out`,
                  headers: {'Authorization': `Bearer ${token}`}
        });
    };


    // Allows the user to logout of Russian Flashcards by invoking the
    // webservice for logging out. 
    //
    // email - The user's email used as their ID in the Russian Flashcards app.
    // password - The user's password.
    //
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