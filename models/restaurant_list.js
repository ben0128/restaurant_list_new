const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantSchema = new Schema({
  name: { type: String, required: true },
  name_en: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: String, required: true },
  google_map: { type: String, required: true },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
  userId: {
    type: Schema.Types.ObjectId, // 定義 userId 這個項目是一個 ObjectId，也就是它會連向另一個資料物件
    ref: 'User', // 定義參考對象是 User model
    index: true,
    required: true
  }
})
module.exports = mongoose.model('restaurants', restaurantSchema)

// "id": 1,
// "name": "Sababa 沙巴巴中東美食",
// "name_en": "Sababa Pita Bar",
// "category": "中東料理",
// "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5635/01.jpg",
// "location": "台北市羅斯福路三段 283 巷 17 號",
// "phone": "02 2363 8009",
// "google_map": "https://goo.gl/maps/BJdmLuVdDbw",
// "rating": 4.1,
// "description": "沙巴巴批塔是台灣第一家純手工批塔專賣店,只選用最新鮮的頂級原料,以及道地的中東家傳配方。"