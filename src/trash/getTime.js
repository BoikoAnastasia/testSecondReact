export const time = () => {
    var today = new Date();
    var time = today.getHours()+''+today.getMinutes()+''+today.getSeconds();
    return time;
}