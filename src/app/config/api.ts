import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000';
export const userUrl = 'https://cineholic-c6353.firebaseio.com/userDetails';