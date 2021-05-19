import axios from "axios"


export const onGetPost = () => {
 return (dispatch)=> {
     axios.get('https://jsonplaceholder.typicode.com/posts').then ((res => {
         
     }))
 }
}