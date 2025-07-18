import React from 'react'
import './UserInfoForm.css'

const UserInfoForm = (props) => {
    const {label, type, onChange } = props;
    return (
        <div className="user-info-form">
            <label>{label}</label>
            <input type={type} onChange={onChange} />
        </div>
    )
}

export default UserInfoForm