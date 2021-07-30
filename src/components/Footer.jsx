import React from 'react'

function Footer() {
    let year = new Date().getFullYear();
    return (

        <footer>
            <center>
            Developed by <a href="https://www.anupamdey.com/"> Anupam Dey</a>  <br/>  Copyright &copy; {year}
            </center>
        </footer>

    )
}

export default Footer
