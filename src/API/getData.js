export const dataGet = async () => {
    const responce = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await responce.json();
    return data;
}