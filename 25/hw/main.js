import { toUpperCase, reverseString } from "./module.js";

async function fetchUserData(userId){
    try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if(!response.ok){
            throw new Error('Помилка при запиті користувача');
        }
        let userData = await response.json();
        console.log(`Користувач ${reverseString(userData.name)} емейл ${toUpperCase(userData.email)}`);
    }
    catch(error){
        console.log(`Error: ${error.message}`);
    }
}
fetchUserData(2);