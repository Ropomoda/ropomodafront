import { useRouter } from 'next/router';
import React from 'react'
import Login from '../../components/login';

function Home() {
    const router = useRouter()

    return (
        <div>
            <Login
                visible={true}
                closeLogin={() => { router.push("/") }}
                onOk={() => { }}
            />
        </div>
    )
}

export default Home