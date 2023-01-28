import React from 'react'

export const Login = () => {
    return (
        <>
            <h2 className='text-center fw-bold' style={{fontFamily: "'Ubuntu', sans-serif",marginTop:"3vh" }}>LOGIN FORM</h2>
            <div className='container border' style={{ fontFamily: "'Ubuntu', sans-serif" }}>
            <form action="" className='d-flex flex-column justify-content-start'>
                    <label htmlFor="email" className='mt-3 text-muted'>Email</label>
                    <input type="email" name='email' className='mt-2' placeholder='Enter Product Name' required />
                    <label htmlFor="password" className='mt-3 text-muted'>Password</label>
                    <input type="password" name='password' className='mt-2' placeholder='Enter Quantity' required />
                    <input type="submit" value="LOGIN" className='btn btn-primary mt-3 mb-3' />
                </form>
            </div>

        </>
    )
}
