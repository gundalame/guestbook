import Header from '../components/header'
import Footer from '../components/footer'
import { useState } from 'react'

export default function Home() {

  const [showMsg, setShowMsg] = useState(false)

  const guestbookSubmit = async (event) => {
    event.preventDefault()

    const data = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      message: event.target.message.value
    }

    const JSONdata = JSON.stringify(data)
    const endpoint = 'https://62c7f85a0f32635590ce1b60.mockapi.io/guestbook'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    await fetch(endpoint, options)
    setShowMsg(true)
  }

  return (
    <div className="container">
      <Header />
      <div className="guestbook-form">
        {showMsg ?
          <div className="alert alert-success" onClick={ ()=> setShowMsg(false)  }>
            Terima kasih mengisi buku tamu kami
          </div> : ""
        }
        <form onSubmit={guestbookSubmit}>
          <div className="mb-3">
            <label className="form-label">Nama</label>
            <input type="text" name="name" required className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">No HP</label>
            <input type="text" name='phone' required className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name='email' required className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Pesan</label>
            <textarea className="form-control" required name="message" />
          </div>
          <button type="submit" className="btn btn-primary">Kirim</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}
