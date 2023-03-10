import { Store } from '@/utils/Store'
import Head from 'next/head'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'

export default function Layout({title, children}) {

  const {state} = useContext(Store)
  const {cart} = state
  const [cartItemsCount, setCartItemsCount] = useState(0)
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0))
  }, [cart.cartItems])

  return (
    <>
      <Head>
        <title>{title? title + ' - Amazon' : 'Amazon'}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
        <header>
          <nav className='flex h-12 items-center px-4 justify-between shadow-md'>
            <Link href="/">
              <span className='text-lg font-bold'>Amazon</span>
            </Link>
            <div>
              <Link href='/cart'>
                <span className='p-2'>Cart</span>
                {cartItemsCount > 0 && (
                  <span className='badge badge--important'>{cartItemsCount}</span>
                )}
              </Link>
              <Link href='/login'><span className='p-2'>Login</span></Link>
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <footer className='flex items-center justify-center p-4'><p>2022 - Amazon<sup>©</sup></p></footer>
      </div>
    </>
  )
}
