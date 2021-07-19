export default function maskDate(dt){
    const date = new Date(dt); // converte para data
    let stringDate = date.getDate() <10 ? `0${date.getDate()}/`: `${date.getDate()}/` ;
    
    stringDate += date.getMonth() < 9 ? `0${date.getMonth()+1}` :`${date.getDate() + 1}`

    stringDate += `/${date.getFullYear()} `
    
    stringDate += date.getHours() < 10 ? `0${date.getHours()}h:` :`${date.getHours()}h:`
 
    stringDate += date.getMinutes() < 10 ? `0${date.getMinutes()}min` :`${date.getMinutes()}min`

    return (stringDate)
}