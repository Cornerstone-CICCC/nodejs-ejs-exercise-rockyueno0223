import { Router, Request, Response } from 'express'

const pageRouter = Router()

// Home
pageRouter.get('/', (req: Request, res: Response) => {
  res.status(200).render('index', { title: "My Webpage" })
})

// About
pageRouter.get('/about', (req: Request, res: Response) => {
  res.status(200).render('about', { title: "About Us" })
})

// Contact
pageRouter.get('/contact', (req: Request, res: Response) => {
  res.status(200).render('contact', { title: "Contact" })
})

export default pageRouter
