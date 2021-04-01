import React, {useState} from 'react';
import Calendar from 'react-calendar';
import MealList from './scheduled-recipes';

export default function EventCalendar(props) {
    let [dateString, setDateString] = useState('');

    const handleDayClicked = (d) => {
        // In this case, e represents the date value as opposed
        // to the event object.
        console.log(d);
        let dayOfWeek = d.getDay();
        let monthOfYear = d.getMonth();

        switch(dayOfWeek) {
            case 0: dayOfWeek = "Sunday";
            break;
            case 1: dayOfWeek = "Monday";
            break;
            case 2: dayOfWeek = "Tuesday";
            break;
            case 3: dayOfWeek = "Wednesday";
            break;
            case 4: dayOfWeek = "Thursday";
            break;
            case 5: dayOfWeek = "Friday";
            break;
            case 6: dayOfWeek = "Saturday";
            break;
            default: dayOfWeek = "Invalid Day!";
        }

        switch(monthOfYear) {
            case 0: monthOfYear = "January";
            break;
            case 1: monthOfYear = "February";
            break;
            case 2: monthOfYear = "March";
            break;
            case 3: monthOfYear = "April";
            break;
            case 4: monthOfYear = "May";
            break;
            case 5: monthOfYear = "June";
            break;
            case 6: monthOfYear = "July";
            break;
            case 7: monthOfYear = "August";
            break;
            case 8: monthOfYear = "September";
            break;
            case 9: monthOfYear = "October";
            break;
            case 10: monthOfYear = "November";
            break;
            case 11: monthOfYear = "December";
            break;
            default: monthOfYear = "Invalid Month!";
        }

        setDateString(`${dayOfWeek}, ${monthOfYear} ${d.getDate()}, ${d.getFullYear()}`);
        // TODO change event list
    }

    return (
        <div id="event-calendar">
            <Calendar onClickDay={handleDayClicked} />
            <div id="events">
                <h6>Events for {dateString}: </h6>
                <MealList />
                {/* TODO add event list here*/}
            </div>    
        </div>
    )
    
}