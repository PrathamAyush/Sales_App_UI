import React, { useState } from "react";

const defaultFormData = {
    productName: "",
    quantity: "",
    amount: "",
};

export const AddSales = () => {
    const [formData, setFormData] = useState(defaultFormData);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData(defaultFormData);
    };

    return (
        <>
            <h2
                className="fw-bolder text-center"
                style={{ marginTop: "3vh", fontFamily: "'Ubuntu', sans-serif" }}
            >
                ADD SALES ENTRY
            </h2>
            <div className="container border mt-2">
                <form
                    action=""
                    className="d-flex flex-column justify-content-start"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="productName" className="mt-3 text-muted">
                        Product Name
                    </label>
                    <input
                        type="text"
                        name="productName"
                        className="mt-2"
                        placeholder="Enter Product Name"
                        required
                        value={formData.productName}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                productName: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="quantity" className="mt-3 text-muted">
                        Quantity
                    </label>
                    <input
                        type="text"
                        name="quantity"
                        className="mt-2"
                        placeholder="Enter Quantity"
                        required
                        value={formData.quantity}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                quantity: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="amount" className="mt-3 text-muted">
                        Amount
                    </label>
                    <input
                        type="text"
                        name="amount"
                        className="mt-2"
                        placeholder="Enter Amount"
                        required
                        value={formData.amount}
                        onChange={(e) =>
                            setFormData({ ...formData, amount: e.target.value })
                        }
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary mt-3 mb-3"
                    />
                </form>
            </div>
        </>
    );
};
