import { myAxios } from "./config"

export const AuthLogin = async ({username, password}) => {
  try {
    const  {data,status} = await myAxios.post('users/login', { email:username, password });
    if (status) {
      return data
    }

  } catch (error) {
    throw new Error(error.message)
  }
}

export const AuthRegister = async (body) => {
  try {
    const  {data,status} = await myAxios.post('users/signup', body);
    if (status) {
      return data
    }

  } catch (error) {
    throw new Error(error.message)
  }
}
