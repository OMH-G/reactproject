import React from 'react'
import './footer.css'
export const Footer = () => {
    let footerstyle={
        position :"relative",//Check what is absolute and relative

        top:"100vh",
        width:"100%",
        border:"2px solid red"

    }
    return (
        <footer className="bg-dark text-light py-3 mx-4 my-5" style={footerstyle}>
            <p className="text-center">
            Copyright &copy; MyTodoList.com
            </p>
        </footer>
    )
}
