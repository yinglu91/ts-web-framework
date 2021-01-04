import { User } from './models/User'

//const user = new User({ id: 1, name: 'Ying Lu', age: 25 })
const user = User.buildUser({ id: 2})

user.on('change', () => {
  console.log(user)
})

user.fetch();
