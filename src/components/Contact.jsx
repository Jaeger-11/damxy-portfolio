import React from 'react'

const Contact = () => {
  return (
    <div className='p-4 bg-grayBg'>
      <article className='md:w-4/5 mx-auto'>
            <div className='flex justify-start'>
                <h3 className="p-3 my-4 sh font-bold rotate-3 text-black bg-[#e3a018] w-max"> Contact Me</h3>
            </div>
            <section>
              <h3 className='first-letter:text-xl first-letter:font-bold max-w-lg'>
                I am open to job opportunities or collaborations feel free to get in touch through my social networks.
              </h3>
              <div className='contact-links'>
                <article>
                  <p>Github</p>
                  <a href='https://github.com/Jaeger-11' className='text-[#e3a018]'>Jaeger-11</a>
                </article>
                <article>
                  <p>WhatsApp / Call</p>
                  <a href='tel:+2348139017478' className='text-green-500'>+2348139017478</a>
                </article>
                <article>
                  <p>Email</p>
                  <a href='mailto:damifalodun@gmail.com' className='text-[#ff0000]'>damifalodun@gmail.com</a>
                </article>
                <article>
                  <p>LinkedIn</p>
                  <a href="https://www.linkedin.com/in/oluwadamilola-falodun-b084221a8/" className='text-darkBlue'>Oluwadamilola Falodun</a>
                </article>
                <article>
                  <p>Twitter(X)</p>
                  <a href="https://twitter.com/damzypaulzs" className='text-[#9723c9]'>@DamzyPaulzs</a>
                </article>
              </div>
            </section>
        </article>
    </div>
  )
}

export default Contact;