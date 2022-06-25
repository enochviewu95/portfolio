import React from 'react';
import './Footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-left'>
                    <div className='footer-left-content'>
                        <h4>Ready to do this</h4>
                        <h1>Let's get to work</h1>
                        <a href='/' className='btn'>contact us</a>
                    </div>
                </div>
                <div className='footer-right'>
                    <div className='footer-right-content'>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="">Works</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Let's Talk</a></li>
                        </ul>
                    </div>
                    <div className='footer-right-content'>
                        <h4>Say Hello</h4>
                        <ul>
                            <li><a href="">admin@example.com</a></li>
                            <li><a href="">hr@examples.com</a></li>
                            <li className='social-media'>
                                <a href=""><i class="uil uil-facebook-f"></i></a>
                                <a href=""><i class="uil uil-linkedin"></i></a>
                                <a href=""><i class="uil uil-twitter"></i></a>
                                <a href=""><i class="uil uil-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
