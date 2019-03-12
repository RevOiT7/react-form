import React from 'react';


export const FormErrors = (props) =>
    <div className="form-errors">
        {Object.keys(props.formErrors).map((fieldName, i) => {

            let errors = props.formErrors[fieldName];
            switch (errors) {
                case 'Hold tight...Checking availability of':
                    return (
                        <div className="checkingAvailability"><p key={i}> {props.formErrors[fieldName]} <span
                            className="username">{props.value}</span></p></div>
                    )
                    break
                case 'is availability':
                    return (
                        <div className="available"><p key={i}> <span
                            className="username">{props.value}</span> {props.formErrors[fieldName]} </p></div>
                    )
                    break
                case 'is already taken':
                    return (
                        <div className="isAlreadyTaken"><p key={i}> <span
                            className="username">{props.value}</span> {props.formErrors[fieldName]} </p></div>
                    )
                    break
            }


        })}
    </div>