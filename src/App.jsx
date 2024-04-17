import './App.css'
import img_woman from './assets/hero-desktop.jpg'
import img_woman_mobile from './assets/hero-mobile.jpg'
import patternBg from './assets/bg-pattern-desktop.svg'
import logotipo from './assets/logo.svg'
import icon_arrow from './assets/icon-arrow.svg'
import icon_error from './assets/icon-error.svg'
import * as React from 'react'

function App() {
  const inputRef = React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = React.useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = inputRef.current.value;
    let structure_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!structure_email.test(email)) {
      setIsVisible(true);
      setIsValidEmail(false);
    } else {
      setIsVisible(false);
      setIsValidEmail(true);
    }
  };

  return (
    <>
      <div className='container'>
        <div className='section-logo-mobile'>
          <img className='logotio_mobile' src={logotipo} alt="" />
        </div>
      <div className='section-2-mobile'>
          <img className='img_woman_mobile' src={img_woman_mobile} alt="" />
          <img className='img_woman_deskopt' src={img_woman} alt="" />
        </div>
        <div className='section-1'>
          <img className='img-bg-deskopt' src={patternBg} alt="" />
          <img className='img-logo-deskopt' src={logotipo} alt="" />
          <p className='title-1'>WE'RE</p>
          <p className='title-2'>COMING SOON</p>
          <p className='content'>Hello fellow shoppers! We're currently building
            our new fashion store. Add your email below to stay
            up-to-date with announcements and our launch deals.</p>
          <form className='input-btn' onSubmit={handleSubmit}>
            <input ref={inputRef} className={`inputCorreo ${isValidEmail ? '' : 'invalid'}`} placeholder='Email Address' type="text" />
            <button className='btn-input'>
              <img src={icon_arrow} alt="" />
            </button>
            {isVisible && <img className='icon-error' src={icon_error} alt="" />}
          </form>
          {isVisible && <p className='alert-error'>Please provide a valid email</p>}
        </div>
        <div className='section-2-deskopt'>
          <img className='img_woman_mobile' src={img_woman_mobile} alt="" />
          <img className='img_woman_deskopt' src={img_woman} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
