import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import MealList from './meal-list';
import {fetchRecipes, getImage, getRecipesFromDate} from '../actions/actions';
import {useSelector, useDispatch } from 'react-redux';
import Header from './header';
import ViewMyRecipes from './view-my-recipes';



export default function EventCalendar(props) {
    let [dateString, setDateString] = useState('');
    let currentUser = useSelector(state => state.user);
    const [date, setDate] = useState(null);
    let simpleDate;
    if (date) {
        let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        let day = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate();
        simpleDate = `${date.getFullYear()}-${month}-${day}`;
    }
    const [recipeList, setRecipeList] = useState([]);
    let image = useSelector(state => state.recipes.image);
    console.log(image);
    let scheduledRecipes = [];
    let jsxRecipes = [];
    const [mealList, setMealList] = useState(<MealList date={dateString} jsxRecipes={jsxRecipes} image={image} />);
    const [viewRecipes, setViewRecipes] = useState(<ViewMyRecipes date={simpleDate} />)
    const dispatch = useDispatch();

    useEffect(() => {
        //console.log(recipeList);
        if (recipeList.payload != undefined) {
            for (let r of recipeList.payload.data) {
                console.log(r)
                console.log(date);
                if (checkDatesEqual(r.date)) {
                    scheduledRecipes = r.scheduledRecipes;
                }
            }
            console.log(scheduledRecipes);
            for (let r of scheduledRecipes) {
                //getRecipeImage(`${r.name}.png`);
                //let ri = image.data.bytes;
                //console.log(ri);
                //console.log(image);
                if (image) {

                    jsxRecipes.push(<li key={r.rId}><img id="ItemPreview" style={{textAlign: "left"}} src={`data:image/png;base64,${image.data.bytes}`} alt="A pic of a mountain" />{r.name}</li>);

                } else {
                    jsxRecipes.push(<li>{r.name}</li>)
                }
            }
            console.log(jsxRecipes);
        }
        setMealList(<MealList date={dateString} jsxRecipes={jsxRecipes} image={image} />);
        setViewRecipes(<ViewMyRecipes date={simpleDate} />)
    }, [recipeList])



    const getRecipesByDate = async () => {
        jsxRecipes = [];    // Empty jsxRecipes to prevent static or duplicate elements
        let recipes = await fetchRecipes(currentUser.currentUser.data.id);
        setRecipeList(await recipes(dispatch));
        //console.log(recipeList);
    }

    const getRecipeImage = async (name) => {
        //console.log(name);
        let recipeImage = await getImage(name);
        await recipeImage(dispatch);
        //console.log(image); 
    }

    const checkDatesEqual = (otherDate) => {
        if (!otherDate) {
            return false;
        }
        let dateAsString = otherDate.slice(0, 10);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        if (date.getDate() < 10) {
            day = `0${date.getDate()}`;
        }
        if (date.getMonth() < 10) {
            month = `0${date.getMonth() + 1}`;
        }
        let currentDateAsString = `${date.getFullYear()}-${month}-${day}`;
        //console.log(dateAsString);
        //console.log(currentDateAsString);

        return dateAsString === currentDateAsString;
    }

    const handleDayClicked = (d) => {
        // In this case, e represents the date value as opposed
        // to the event object.
        //console.log(d);
        setDate(d);
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
        
        if (date) {
            getRecipesByDate();
           
            getRecipeImage(`chillies.png`);
        }
        
    }

    return (
        <div id="event-calendar" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://nutriboom.s3.us-east-2.amazonaws.com/garlic.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundAttachment: "fixed",
            overflow: "auto",
            textAlign: "center"
          }}>
            <Header title="Recipe Calendar" />
            <Calendar onClickDay={handleDayClicked} />
            <div id="events" style={{

                width: "20%",
                margin: "auto",
                textAlign: "center"

            }}>
                <h6>Meals for {dateString}: </h6>
                {mealList}
                {viewRecipes}
            </div>   
        </div>
    )
    
}