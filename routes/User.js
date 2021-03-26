import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('<h1>Ini halaman User</h1>')
})

router.get('/simpan', (req, res) => {
    res.send('<h1>Ini halaman User</h1>')
})

export default router

