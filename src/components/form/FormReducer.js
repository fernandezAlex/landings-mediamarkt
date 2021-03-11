import React from 'react'

export const FormReducer = () => {

    const initialState = {
        name: '',
        nif: '',
        contact: '',
        position: '',
        email: '',
        phone: '',
        message: '',
        terms: '',
        isNameError: false,
        isNifError: false,
        isContactError: false,
        isPositionError: false,
        isEmailError: false,
        isPhoneError: false,
    };

    const initialState = {
        inputValues = { 
            name: '',
            nif: '',
            contact: '',
            position: '',
            email: '',
            phone: '',
            message: '',
            terms: '',
        }, 
        inputErrors = {
            isNameError: false,
            isNifError: false,
            isContactError: false,
            isPositionError: false,
            isEmailError: false,
            isPhoneError: false,
        },
        formValid: false
    };

    return (
        <div>
            
        </div>
    )
}



const todoReducer(state = initialState, action) => {
    switch(action.type) {
        case 
    }
    return state;
}



const action = {
    type: 
}

NAME_ERROR
NIF_ERROR
CONTACT_ERROR
POSITION_ERROR
EMAIL_ERROR
PHONE_ERROR
TERMS_ERROR

