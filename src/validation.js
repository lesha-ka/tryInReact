import React, { useEffect, useState } from 'react';
const useValidation = (value, validations) => {
    const [nameError, setNameError] = useState(false)
    const [surnameError, setSurnameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const [inputValid, setInputValid] = useState(false)

    useEffect( () => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmail' :
                    const mailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    mailReg.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break;
                case 'currectName' :
                    const nameReg = /^[а-яА-Я]{2,}$/i;
                    nameReg.test(String(value).toLowerCase()) ? setNameError(false) : setNameError(true)
                    break;
                case 'currectSurname' :
                    const surnameReg = /^[а-яА-Я]{2,}$/i;
                    surnameReg.test(String(value).toLowerCase()) ? setSurnameError(false) : setSurnameError(true)
                    break;
                case 'currectPassword' :
                    const passwordReg = /^[a-zA-Z]{6,}$/;
                    passwordReg.test(String(value).toLowerCase()) ? setPasswordError(false) : setPasswordError(true)
                    break;
            }
        }
    }, [value])
    
    useEffect(() => {
        if (emailError || nameError || surnameError || passwordError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [emailError, nameError, surnameError, passwordError])

    return {
        nameError,
        surnameError,
        emailError,
        passwordError,
        inputValid
    }

}

export default useValidation