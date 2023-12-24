import React from 'react'

import "../customCss/languageSelect.css"

export default function languageSelect({isLanguageSelectVisible, hideMobileLanguageSelectOnClick}) {
    return (
        <div className='language-modal-main' style={isLanguageSelectVisible}>
            <div className='language-modal-block'>
                <div className='language-modal-header'>
                    <span>Choose a language</span>
                    <i className='material-icons' onClick={hideMobileLanguageSelectOnClick}>close</i>
                </div>

                <div className='language-list mt-4'>
                    <ul>
                        <li>English</li>
                        <li>Deutsch</li>
                        <li>Español</li>
                        <li>Français</li>
                        <li>Bahasa Indonesia</li>
                        <li>Italiano</li>
                    </ul>
                    <ul>
                        <li>日本語</li>
                        <li>한국어</li>
                        <li>Nederlands</li>
                        <li>Polski</li>
                        <li>Português</li>
                        <li>Română</li>
                    </ul>
                    <ul>
                        <li>Русский</li>
                        <li>ภาษาไทย</li>
                        <li>Türkçe</li>
                        <li>Tiếng Việt</li>
                        <li>中文(简体)</li>
                        <li>中文(繁體)</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}
