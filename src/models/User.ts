import { Model } from './Model'
import { Eventing, Callback } from './Eventing';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes'


export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }
}

// const user = User.buildUser({})
// user.get('id')
// user.get('name')
// user.get('age')
// user.save()
// user.fetch()