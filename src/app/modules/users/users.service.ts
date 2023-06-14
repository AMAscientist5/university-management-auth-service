import config from '../../../config/index'
import ApiError from '../../../errors/ApiError'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId()
  user.id = id

  // default parameter
  if (!user.password) {
    user.password = config.DEFAULT_USER_PASS as string
  }

  const createdUser = await User.create(user)

  if (!createdUser) {
    throw new ApiError(400, `Failed to create user!`)
  }

  return createdUser
}

export default {
  createUser,
}
