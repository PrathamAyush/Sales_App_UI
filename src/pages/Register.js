import React, { useState } from 'react'

const defaultRegistration = {
    FirstName: "",
    LastName: "",
    Email: "",
    Password: ""
};
export const Register = () => {
    const [regData, setRegData] = useState(defaultRegistration)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(regData);
        setRegData(defaultRegistration);
    }
    return (
        <>
            <h2 className='fw-bolder text-center'
                style={{ marginTop: "3vh", fontFamily: "'Ubuntu', sans-serif" }}>
                REGISTRATION FORM
            </h2>
            <div className='container border mt-2'>
                <form action="" className='d-flex flex-column justify-content-start' onSubmit={handleSubmit}>

                    <label htmlFor="firstName" className='mt-3 text-muted'>First Name</label>
                    <input type="text" name='firstName' className='mt-2' placeholder='First Name' required 
                    value={regData.FirstName} onChange={(e)=>setRegData({...regData,FirstName:e.target.value})}/>

                    <label htmlFor="lastName" className='mt-3 text-muted'>Last Name</label>
                    <input type="text" name='lastName' className='mt-2' placeholder='Last Name' required 
                    value={regData.LastName} onChange={(e)=>setRegData({...regData,LastName:e.target.value})}/>

                    <label htmlFor="email" className='mt-3 text-muted'>Email</label>
                    <input type="email" name='email' className='mt-2' placeholder='Email' required 
                    value={regData.Email} onChange={(e)=>setRegData({...regData,Email:e.target.value})}/>

                    <label htmlFor="pass" className='mt-3 text-muted'>Password</label>
                    <input type="password" name='pass' className='mt-2' placeholder='Password' required 
                    value={regData.Password} onChange={(e)=>setRegData({...regData,Password:e.target.value})}/>
                    
                    <input type="submit" value="Submit" className='btn btn-primary mt-3 mb-3' />
                </form>
            </div>
        </>
    )
}

