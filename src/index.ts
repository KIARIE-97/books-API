
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { bookRouter } from './Books/book.router'

const app = new Hono()

app.route('/books', bookRouter)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port = 3000

serve({
  fetch: app.fetch,
  port
})
console.log(`Server is running on port ${port}`)
