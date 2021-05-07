import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons social-icons">
                        <li><a href="https://github.com/willdossantos" target="_blank" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://dribbble.com/willds" target="_blank" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                        <li><a href="mailto:contact@willdossantos.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Gatsby Starter Strata - Modified by William dos Santos</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
