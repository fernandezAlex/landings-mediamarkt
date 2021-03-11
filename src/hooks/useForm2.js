import { useState } from "react"


export const useForm2 = (initialState = {} ) => {

    const [values, setValues] = useState(initialState);
    const [isErrorMessage, setIsErrorMessage] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
        setIsErrorMessage({
            ...isErrorMessage,
            [target.errorText]: target.errorText,
        })
    }
    
    return [values, handleInputChange, reset];
}