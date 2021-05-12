// import SContactPage from './styled/SContactPage';
import React, { useState } from 'react';
import SContactPage from './styled/SContactPage';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const isEmail = () => {
    const mail = document.getElementById('not-mail');
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = 'none';
      return true;
    }
    mail.style.display = 'block';
    mail.style.animation = 'dongle 1s';
    setTimeout(() => {
      mail.style.animation = 'none';
    }, 1000);
    return false;
  };

  const failMessage = (writtenMessage) => {
    const formMess = document.querySelector('.form-message');
    formMess.innerHTML = writtenMessage;
    formMess.style.opacity = '1';
    formMess.style.background = 'rgb(253,87,87)';

    document.getElementById('name').classList.add('error');
    document.getElementById('email').classList.add('error');
    document.getElementById('message').classList.add('error');

    setTimeout(() => {
      formMess.style.opacity = '0';
    }, 5000);
  };

  const successMessage = () => {
    const formMess = document.querySelector('.form-message');
    formMess.innerHTML =
      'Message envoyé ! Nous vous recontacterons dès que possible.';
    formMess.style.background = '#00c1ec';
    formMess.style.opacity = '1';

    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    setTimeout(() => {
      formMess.style.opacity = '0';
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sendFeedback = (templateId, variables) => {
      window.emailjs
        .send('gmail', templateId, variables)
        .then(() => {
          successMessage();
          setName('');
          setCompany('');
          setPhone('');
          setEmail('');
          setMessage('');
        })
        .catch(() => {
          failMessage("Une erreur s'est produite, veuillez réessayer.");
        });
    };

    if (name && isEmail() && message) {
      sendFeedback('template_dgzr3xb', {
        name,
        company,
        phone,
        email,
        message,
      });
    } else {
      failMessage('Merci de remplir correctement les champs requis*');
    }
  };

  return (
    <SContactPage>
      <form className="contact-form">
        <h2>Contactez-nous</h2>
        <div className="form-content">
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="nom *"
            value={name}
            autoComplete="off"
          />
          <input
            type="text"
            id="company"
            name="company"
            onChange={(e) => setCompany(e.target.value)}
            placeholder="société"
            value={company}
          />
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="téléphone"
            value={phone}
          />
          <div className="email-content">
            <input
              type="mail"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email *"
              value={email}
              autoComplete="off"
            />
          </div>
          <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message *"
            value={message}
          />
        </div>
        <input
          className="button"
          type="button"
          value="Envoyer"
          onClick={handleSubmit}
        />
        <div className="form-message" />
      </form>
    </SContactPage>
  );
};

export default ContactPage;
