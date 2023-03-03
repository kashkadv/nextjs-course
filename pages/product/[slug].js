import Layout from '@/components/Layout'
import data from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function ProductScreen() {
  const {query} = useRouter()
  const {slug} = query
  const product = data.products.find(x => x.slug === slug)

  if (!product) {
    return <div>Product Not Found</div>
  }

  return (
    <Layout title={product.name}>
      <div className='py-2'>
        <Link href='/' className='link--basic'>Back to products</Link>
      </div>
      <div className='grid md:grid-cols-4 md:gap-3'>
        <div className='md:col-span-2'>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
          ></Image>
        </div>
        <div>
          <ul>
            <li><h1 className='text-xl font-bold'>{product.name}</h1></li>
            <li>Category: {product.category}</li>
            <li>Price: ${product.price}</li>
            <li>Rating: {product.rating} of {product.numReviews} reviews</li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className='mb-2 flex justify-between'>
            <div>Status:</div>
            <div>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</div>
          </div>
          <div className='mb-2 flex justify-between'>
            <div>Price:</div>
            <div>${product.price}</div>
          </div>
          <button className='button button--primary w-full'>Add to cart</button>
        </div>
      </div>
    </Layout>
  )
}
