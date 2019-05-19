import React from 'react';
import './style/footer.css'
const Footer = () => {
  return(
    <footer>
        <div className="footer-copyright">
            <div className="black darken-3">
                <p className="center white-text">
                    Developer : <a style={{textDecoration: "underline"}} class="grey-text text-lighten-4" href="https://lazycipher.github.io/" rel="noopener noreferrer" target="_blank">Himanshu Singh</a>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
