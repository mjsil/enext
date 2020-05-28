const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const completeDate = `${day}/${month + 1}/${year}`;
const completeHours = `${hours}:${minutes}`;

const dateHours = `${completeDate} | ${completeHours}`;

export default dateHours;
