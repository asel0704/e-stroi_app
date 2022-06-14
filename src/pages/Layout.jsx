import React from 'react'
import { Outlet} from 'react-router-dom'
import { Header } from '../components/Header'
import Menu from "../components/Menu"

const Layout = () => {
    return (
        <>
            <header>
          <Header />
            </header>
            <main className='container'>
                <Menu />
                <Outlet />
            </main>
       </>
    )
}
export { Layout }