const express = require('express') // 引用 Express 與 Express 路由器
const router = express.Router() // 準備引入路由模組

const home = require('./modules/home') // 引入 home 模組程式碼
const restaurants = require('./modules/restaurants')
const search = require('./modules/search')
const users = require('./modules/users')
const auth = require('./modules/auth')

const { authenticator } = require('../middleware/auth') // 進到路由之前需要先通過auth檢查是否登入

//    !!!!!!!!!!!!注意先後順序!!!!!!!!!!!!!!
router.use('/auth', auth)
router.use('/users', users)
router.use('/restaurants', authenticator, restaurants)// 將網址結構符合 /restaurants 字串的request 導向 restaurants，裡面的路由清單不再需要處理前綴詞 /restaurants
router.use('/search', authenticator, search)
router.use('/', authenticator, home)// 將網址結構符合 / 字串的 request 導向 home 模組 

module.exports = router// 匯出路由器