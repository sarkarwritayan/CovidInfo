export const dateAndTime=(dt)=>{
  const currentDate=new Date(dt);
  const date=currentDate.toDateString();
  const time=currentDate.toLocaleTimeString();
  return time+", "+date;
}