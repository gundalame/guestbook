import Image from "next/image";
import Link from "next/link";


export default function Header() {
    return <div className="py-5 text-center">
        <h1>Kabupaten Banyuwangi</h1>
        <Image src="/logo_bwi_small.png" width="100px" height="100px" />
        <p className="lead">Selamat datang di buku tamu Kabupaten Banyuwangi.</p>
        <ul className="list-inline">
            <li className="list-inline-item"><Link href="/"><a>Isi Buku Tamu</a></Link></li>
            <li className="list-inline-item"><Link href="/view"><a>Lihat Buku Tamu</a></Link></li>
        </ul>
    </div>
}