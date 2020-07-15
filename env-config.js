const prod = process.env.NODE_ENV === 'production'

console.log('Env config: ', prod)

module.exports = {
  'process.env.BACKEND_URL': prod ? '/jmahc.github.io' : '',
  // 'process.env.BACKEND_URL': prod ? '/' : '',
}
