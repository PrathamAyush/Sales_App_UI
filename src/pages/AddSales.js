import React from 'react'

export const AddSales = () => {
    return (
        <>
            <h2 className='fw-bolder text-center' style={{ marginTop: "3vh", fontFamily: "'Ubuntu', sans-serif"}}>ADD SALES ENTRY</h2>
            <div className='container border mt-2'>
                <form action="" className='d-flex flex-column justify-content-start'>
                    <label htmlFor="productName" className='mt-3 text-muted'>Product Name</label>
                    <input type="text" name='productName' className='mt-2' placeholder='Enter Product Name' required/>
                    <label htmlFor="quantity" className='mt-3 text-muted'>Quantity</label>
                    <input type="text" name='quantity' className='mt-2' placeholder='Enter Quantity' required/>
                    <label htmlFor="amount" className='mt-3 text-muted'>Amount</label>
                    <input type="text" name='amount' className='mt-2' placeholder='Enter Amount' required/>
                    <input type="submit" value="Submit" className='btn btn-primary mt-3 mb-3' />
                </form>
            </div>
        </>
    )
}