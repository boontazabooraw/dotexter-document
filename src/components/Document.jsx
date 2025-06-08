import React from 'react'
import Navbar from './Navbar'

export default function Document({ activeDoc }) {

    const gDocUrl = "https://docs.google.com/document/d/1sfWvAfWoXU23hlb5R_v0SbafAjPPgKAq83D8FFhY6P8/edit?usp=sharing"
    const msWordUrl = "https://1drv.ms/w/c/e176a8ce7aa906c3/IQSbmwIFXqRPRZI080xShQsgAXoHvM1rK-hBMtC1A8veWxE?em=2"
    return (
        <div class="document-wrapper">
            {activeDoc === "gdocs" && (
                <iframe src={gDocUrl}
                    frameborder="0">
                </iframe>
            )}
            {activeDoc === "msword" && (
                <iframe src={msWordUrl}
                    width="476px" height="288px" frameborder="0">
                    This is an embedded
                    <a target="_blank" href="https://office.com">
                        Microsoft Office</a> document, powered by
                    <a target="_blank" href="https://office.com/webapps">
                        Office
                    </a>.
                </iframe>
            )}
        </div>
    )
}