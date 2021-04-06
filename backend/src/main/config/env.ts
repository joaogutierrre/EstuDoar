export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/estudoar-ts-api',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'lk982u+=-S7j'
}