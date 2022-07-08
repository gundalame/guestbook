import Header from '../components/header'
import Footer from '../components/footer'
import { useEffect, useState } from 'react'

export default function View() {

    const [guestbook, setGuestbook] = useState([])

    const guestbookView = async () => {
        const endpoint = 'https://62c7f85a0f32635590ce1b60.mockapi.io/guestbook'

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const req = await fetch(endpoint, options)
        const res = await req.json()
        setGuestbook(res)
    }

    useEffect(() => {
        guestbookView()
    })

    return (
        <div className="container">
            <Header />
            <div className='guestbook-view'>
                <div className='row'>
                    {
                        guestbook.map((item, index) => {
                            return <div className="col-6">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{item.phone} - {item.email}</h6>
                                        <p className="card-text">{item.message}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
