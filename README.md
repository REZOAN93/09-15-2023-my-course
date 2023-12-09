# REZOAN "My Course Management"

## Click here for the Live Link: [https://My-Course-Management](https://65042edf0b3a4501f277420a--neon-cranachan-d86517.netlify.app/)

----------------------------------------------------------------

- Technologies Used Front End: JavaScript, React, Vite, Tailwind CSS, Firebase
----------------------------------------------------------------
## Project features

 In my project, I managed the state using React's built-in state management capabilities, particularly the useState hook.

- I kept the all data in "data.json" file. then I use the fetch function in the useEffect hooks to set the data in the useState.

- When a user clicked the "Select" button on a course card, I used the setState function to add the selected course object to the "enrolls" array.

- To calculate the total credits of the selected courses, I maintained another state variable called "creditTotal". This variable kept track of the cumulative credits of all the selected courses.

- Whenever a course was added, I updated the totalCredits state accordingly. This involved recalculating the total credits based on the current selection and using the "setCredits" function to update the state.
