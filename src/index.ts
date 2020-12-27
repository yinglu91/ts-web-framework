import { User } from './models/User'

const user = new User({  })

user.set({ name: 'new name' })
user.set({age: 20})

user.save()

console.log(user)