import React, { useState, useEffect } from "react";
import toshieyes from './images/toshieyes.png'
import discord from './images/discordlogo.png'
import twitter from './images/xlogo.png'
import pallet from './images/pallet.png'
import './App.css'
import Modal from './modal'

export default function MainPage(props) {

    useEffect(() => {
        const burger = document.getElementById('burger');
        const nav = document.getElementById('main-nav');

        const toggleNav = () => {
            burger.classList.toggle('is-open');
            nav.classList.toggle('is-open');
        };

        burger.addEventListener('click', toggleNav);

        /* Onload demo - dirty timeout */
        let clickEvent = new Event('click');

        window.addEventListener('load', function(e) {
            burger.dispatchEvent(clickEvent);
            
            setTimeout(function(){
                burger.dispatchEvent(clickEvent);
                
            }, 5500);
        });

        return () => {
            burger.removeEventListener('click', toggleNav);
        };
    }, []);

    let photos = [];

    for (let i = 1; i <= 100; i++) {
        const temp = { src: `/toshis/${i}.png`, width: 600, height: 600 }

        photos.push(temp)
    }

    const [content, setContent] = useState(".-- . .-.. -.-. --- -- . / - --- / - .... . / --- - .... . .-. / ... .. -.. .");
    const [hoveredPhotoIndex, setHoveredPhotoIndex] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const openModal = (index) => {
        setSelectedPhoto(photos[index]);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleDiscord = () => {
        window.location.href = 'https://discord.gg/toshis';
    }
    
    const handleTwitter = () => {
        window.location.href = 'https://twitter.com/TOSHIS_Sei';
    }

    const handlePallet = () => {
        window.location.href = 'https://pallet.exchange/collection/toshis';
    }

    const handleVision = () => {
        setContent("TOSHIS the first 1/1 boutique pfp on $Sei is a community based project where we encourage discussions through genuine connections with a win and help win mentality. \n\nAn exclusive group sharing the same values and goals. \n\nAn art loving society that values integrity and respect where we push ideas, create and invest together.");
        const burger = document.getElementById('burger');
        let clickEvent = new Event('click');
        burger.dispatchEvent(clickEvent);
    }

    const handleToshis = () => {
        const handleMouseEnter = (index) => {
            setHoveredPhotoIndex(index);
        };
    
        const handleMouseLeave = () => {
            setHoveredPhotoIndex(null);
        };
    
        const handlePhotoClick = (index) => {
            openModal(index);
        };
    
        const renderPhoto = (photo, index) => {
            const isHovered = hoveredPhotoIndex === index;
            const grayscaleClass = isHovered ? '' : 'grayscale';
    
            return (
                <div
                    className="photo-wrapper"
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handlePhotoClick(index)}
                >
                    <img
                        className={`photo ${grayscaleClass}`}
                        src={photo.src}
                        alt={`${index}`}
                    />
                </div>
            );
            
        };
    
        setContent(
            <div className="photo-container">
                {photos.map(renderPhoto)}
            </div>
        );

        const burger = document.getElementById('burger');
        let clickEvent = new Event('click');
        burger.dispatchEvent(clickEvent);
    };
    

    const handleSanctuary = () => {
        setContent("COMING SOON...");
        const burger = document.getElementById('burger');
        let clickEvent = new Event('click');
        burger.dispatchEvent(clickEvent);
    }

    const handleLogo = () => {
        setContent(".-- . .-.. -.-. --- -- . / - --- / - .... . / --- - .... . .-. / ... .. -.. .");
        const burger = document.getElementById('burger');
        let clickEvent = new Event('click');
        burger.dispatchEvent(clickEvent);
    }

    useEffect(() => {
        const photos = document.querySelectorAll(".photo");
        photos.forEach((photo, index) => {
          if (index === hoveredPhotoIndex) {
            photo.classList.remove("grayscale");
          } else {
            photo.classList.add("grayscale");
          }
        });
      }, [hoveredPhotoIndex]);

    return (
        <div className="container">
            <div className="sidebar">
                <div className="logo" onClick={handleLogo} data-target="logo">
                    <img loading="lazy" src={toshieyes} className="logo-img" alt="Logo"/>
                </div>
                <div className="menu">
                    <div className="menu-item with-line" onClick={handleVision} data-target="vision">
                        <div className="menu-text">VISION</div>
                        <div className="menu-code">...- .. ... .. --- -.</div>
                    </div>
                    <div className="menu-item" onClick={handleToshis} data-target="toshis">
                        <div className="menu-text">TOSHIS</div>
                        <div className="menu-code">- --- ... .... .. ...</div>
                    </div>
                    <div className="menu-item" onClick={handleSanctuary} data-target="sanctuary">
                        <div className="menu-text">SANCTUARY</div>
                        <div className="menu-code">... .- -. -.-. - ..- .- .-. -.--</div>
                    </div>

                    {/* <div className="menu-item" onClick={handlePallet} data-target="sanctuary">
                        <div className="menu-text">PALLET</div>
                        <div className="menu-code">.--. .- .-.. .-.. . - / . -..- -.-. .... .- -. --. .</div>
                    </div> */}
                </div>
                <button id="burger" className="open-main-nav">
                    <span className="burger"></span>
                    <span className="burger-text">Menu</span>
                </button>
                <div className="social-icons">
                    <img loading="lazy" src={discord} className="social-icon" onClick={handleDiscord} alt="Discord"/>
                    <img loading="lazy" src={twitter} className="social-icon" onClick={handleTwitter} alt="Twitter"/>
                    <img loading="lazy" style={{ width: '50px' }} src={pallet} className="social-icon" onClick={handlePallet} alt="Pallet"/>
                </div>
            </div> 
            <nav className="main-nav" id="main-nav">
                    <ul>
                        <li>
                            <a href='#' onClick={handleVision}>VISION</a>
                        </li>
                        <li>
                            <a href='#' onClick={handleToshis}>TOSHIS</a>
                        </li>
                        <li>
                            <a href='#' onClick={handleSanctuary}>SANCTUARY</a>
                        </li>
                       
                        <li>
                        <div className="social-icons-mobile">
                            <img loading="lazy" src={discord} className="social-icon" onClick={handleDiscord} alt="Discord"/>
                            <img loading="lazy" src={twitter} className="social-icon" onClick={handleTwitter} alt="Twitter"/>
                            <img loading="lazy" style={{ width: '50px' }} src={pallet} className="social-icon" onClick={handlePallet} alt="Pallet"/>
                        </div>
                        </li>
                        
                    </ul>
                </nav>
            <div className="content">
                <div className="content-text">
                    {content}
                    <Modal isOpen={modalOpen} onClose={closeModal} photo={selectedPhoto} />
                </div>
            </div>
        </div>
    );
}
