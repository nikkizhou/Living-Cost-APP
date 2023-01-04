
# Living-Cost-App

## 👉[Live Deomo](https://living-cost-app-client-nikkizhou.vercel.app/)  

## Description:
This is a fullstack app where user can compare living costs of two different cities.  
The living cost data of a searched city is stored in localhost to avoid unnecessary fetching of api.   
A search history bar is showed to make it easier for user to view the data of the searched cities again.

## Tech Stack: 
MERN stack, typescript, mongoose, RapidApi, unsplash Api   

## Challenges:
The main challenge for this app is to manage the cityData state.
Since the app render the last two elements from the allCityData array, it was important to check the length of the array.

## Learnings:
- When dealing with full-stack project, it's important to have controll for both backend and frontend in every stage.
- When get stucked, try different ways to do more research about the problem. Compare different solutions first before digging into one solution.


## Future Features:
- Add data from api to database and manage data from database.
- Users should be able to choose what kinds of living costs to be shown.
- Get user's current location then show the living cost of that city as default.  

## Structure & Data flow
<img src="https://github.com/nikkizhou/Living-Cost-App/blob/main/structure%26dataFlow.jpeg" alt="dataFlow" style="height:500px; width:700px;"/>
