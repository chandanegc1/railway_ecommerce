// const url ="https://railwayecommerce-production.up.railway.app/"
const url ="http://127.0.0.1:3002/"
const id = localStorage.getItem("id");
export const carturl = url+"cart"
export const postcarturl = url+"cart/"+id
export const producturl = url+"product"
export const allcarturl = url+"allcart"
export const usersurl = url+"users"
export const postMessageUrl = url+"message"
export const CommentUrl = url+"comment/"