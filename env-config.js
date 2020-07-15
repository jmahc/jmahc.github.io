const prod = process.env.NODE_ENV === 'production'

module.exports = {
  // 'process.env.BACKEND_URL': prod ? '/jmahc.github.io' : '',
  'process.env.BACKEND_URL': prod ? '/' : '',
}
