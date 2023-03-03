import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true
    },
    {
      name: 'Mark',
      email: 'mark@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true
    },
  ],
  products: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt'
    },
    {
      name: 'Free Shirt 1',
      slug: 'free-shirt1',
      category: 'Shirts',
      image: '/images/shirt2.jpg',
      price: 50,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt'
    },
    {
      name: 'Free Shirt 2',
      slug: 'free-shirt2',
      category: 'Shirts',
      image: '/images/shirt3.jpg',
      price: 20,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt'
    },
  ]
}

export default data
