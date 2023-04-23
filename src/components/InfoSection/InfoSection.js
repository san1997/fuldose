import React, {useState} from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'
import Modal from 'react-awesome-modal';
import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2'

import './style.css';


 const InfoSection = ({ 
    
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start
}) => {
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(true);

    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Button big fontBig primary={primary} onClick={openModal}>
                                {buttonLabel}
                            </Button>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
            <Modal 
                visible={modal}
                width="400" height="300" 
                effect="fadeInUp" 
                onClickAway={() => setModal(false)}
            >
                <div>
                    <InfoForm closeModal={() => setModal(false)}/>
                </div>
            </Modal>
        </>
    )
}

export default InfoSection;

const InfoForm = ({closeModal}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const sendOrderEmail = (e) => {
        e.preventDefault();

        const form = {
            name,
            email,
            phone,
            address
        }
        emailjs.sendForm('service_1yut84g', 'template_v8rc1me', e.target, 'sv20qW8DT7gaLPAJ8')
        .then(res => {
            console.log('email sent', res);
            closeModal();
            Swal.fire({
                title: 'Completed!',
                text: `Your order has been recieved.`,
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
        .catch(err => {
            console.log('failed to send email', err);
            closeModal();
            Swal.fire({
                title: 'Error!',
                text: 'Sorry, looks like some error in receiving your order. Please contact us using below mentioned numbers.',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        })
    }

    return (
        <div>
            <div className="modal-header">Your details please </div>

            <form className="modal-body" onSubmit={sendOrderEmail}>
                <label>Name:
                    <input
                    name='name'
                    type="text" 
                    autoComplete="given-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label>Email:
                    <input
                    name='email'
                    type="text" 
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label>Phone:
                    <input
                    name='phone'
                    type="tel" 
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </label>

                <label>Address:
                    <input
                    name='address'
                    type="text" 
                    autoComplete='address-line1'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    />
                </label>

                <div className="modal-footer">
                    <button className='submitButton' type="submit">Submit</button>
                </div>
            </form>

            
            
        </div>
    )
}