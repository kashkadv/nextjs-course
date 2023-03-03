import Layout from '@/components/Layout'
import { Store } from '@/utils/Store'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { XCircleIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

function CartScreen() {

  const router = useRouter()
  const {state, dispatch} = useContext(Store)
  const {cart: {cartItems}} = state

  const removeItemHandler = (item) => {
    dispatch({type: 'CART_REMOVE_ITEM', payload: item})
  }

  const updateQuantityHandler = (item, value) => {
    const quantity = item.quantity + value
    quantity
      ? dispatch({type: 'CART_ADD_ITEM', payload: {...item, quantity}})
      : removeItemHandler(item)
  }

  return (
    <Layout title='Shopping Cart'>
      <h1>Cart</h1>
      <div className='grid md:grid-cols-3'>
        {!cartItems.length ? (
          <div className='col-span-3'>
            <span>Your cart is empty</span>
            <Link className='button button--primary ml-4' href="/">Go to Shopping</Link>
          </div>
        ) : (
          <>
            <div className="col-span-2">
              <table className='w-full border-separate border-spacing-y-4'>
                <thead className='font-bold'>
                  <tr>
                    <td>Product Title</td>
                    <td>Ordered Quantity</td>
                    <td>Product Price</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.slug}>
                      <td className='flex gap-1 items-center'>
                        <Image
                          alt={item.name}
                          src={item.image}
                          width={50}
                          height={50}
                        ></Image>
                        <Link href={`/product/${item.slug}`}>{item.name}</Link>
                      </td>
                      <td className=''>
                        <div className="flex gap-2">
                          <button><MinusCircleIcon onClick={() => updateQuantityHandler(item, -1)} className='h-5 w-5'></MinusCircleIcon></button>
                          {item.quantity}
                          <button><PlusCircleIcon onClick={() => updateQuantityHandler(item, 1)} className='h-5 w-5'></PlusCircleIcon></button>
                        </div>
                      </td>
                      <td>${item.price}</td>
                      <td><button onClick={() => removeItemHandler(item)}><XCircleIcon className='h-5 w-5'></XCircleIcon></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-span-1">
              <ul>
                <li>Total ({cartItems.reduce((a, c) => a + c.quantity, 0)}): ${cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}</li>
                <button className='button button--primary' onClick={() => router.push('/shipping')}>Checkout</button>
              </ul>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export default dynamic(() => Promise.resolve(CartScreen), {ssr: false})
