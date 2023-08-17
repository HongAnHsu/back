import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '缺少名稱']
  },
  price: {
    type: Number,
    required: [true, '缺少價格'],
    min: [0, '價格太低']
  },
  image: {
    type: String,
    required: [true, '缺少圖片']
  },
  description: {
    type: String,
    required: [true, '缺少說明']
  },
  category: {
    type: String,
    required: [true, '缺少分類'],
    enum: {
      values: ['前菜', '沙拉', '兒童餐', '美式漢堡', '美式蛋捲', '三明治', '墨西哥酥餅', '義大利麵', '燉飯', '早午餐拚盤', '單點小物', '飲料'],
      message: '分類錯誤'
    }
  },
  sell: {
    type: Boolean,
    required: [true, '缺少上架狀態']
  }
}, { versionKey: false })

export default mongoose.model('products', schema)
