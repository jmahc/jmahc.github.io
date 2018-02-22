import packageJson from '../package.json'

const ignored = ['normalize.css']

function getVendorDependencies() {
  let dependencies = []

  Object.keys(packageJson.dependencies).filter(
    key => (ignored.indexOf(key) === -1 ? dependencies.push(key) : null)
  )

  return dependencies
}

const response = getVendorDependencies()

export default response
