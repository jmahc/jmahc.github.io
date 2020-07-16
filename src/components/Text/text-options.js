const loremIpsum =
  'Lorem Khaled Ipsum is a major key to success.' +
  ' Eliptical talk. The key to more success is to have a lot of pillows.' +
  ' To succeed you must believe. When you believe, you will succeed.' +
  " It's important to use cocoa butter. It’s the key to more success," +
  ' why not live smooth? Why live rough? Every chance I get,' +
  ' I water the plants, Lion! Give thanks to the most high.' +
  ' Stay focused. We don’t see them, we will never see them.' +
  ' We don’t see them, we will never see them. Bless up.' +
  ' I told you all this before, when you have a swimming pool,' +
  ' do not use chlorine, use salt water, the healing, salt water is the healing.'

const shalito = 'Shalitoooooooooo'

const obj = {
  loremIpsum,
  shalito,
}

export default function getAboutMeText() {
  let keys = Object.keys(obj)
  return obj[keys[(keys.length * Math.random()) << 0]]
}
