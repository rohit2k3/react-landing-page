import React from "react";

const Contact = () => {
    return (
        <div className="contact">
            <main>
            <h1>Contact us</h1>
                <form>
                        <input type="text" name="name" placeholder="Enter Your name" required/>
                        <input type="text" name="name" placeholder="abc@xyz.com" required/>
                        <input type="text" name="name" placeholder="Enter Your query" required/>
                    <button type="submit">Send</button>
                </form>
            </main>
        </div>
    )
}

export default Contact;