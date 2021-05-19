import * as actions from '../Actions/action'

const initState =  {
    HomepageInfo:[
       {id: 1,
        image:"http://www.giet.ac.in/img_external/slider/HomeSlide3.JPG",
       },{
        id: 2,
        Question: "How do I get back to the homepage? ",
        Answer: "Use the navigation bar at the top left of the page or the button at the very bottom of the course"
        ,
        },{
        id: 3,
        Question: "How can I see my recent assignment feedback?",
        Answer: "There are many ways you can access their feedback. The most common method is by simply going to the same place where you uploaded the work. Another common method is to follow the link in the recent activity block (if the teacher has included it on the course). Another method would be to access the grade book and then follow the link for the required assignment. Depending upon how the assignment was set up, you may receive an email when it has been marked with a direct link to the feedback",
        },{
        id: 4,
        Question: "Where have all of the weeks / topics gone?",
        Answer: "You have probably clicked on the One.gif icon. To reveal all of the other weeks / topics you need to click on the All.gif icon which you will see in the right margin of the week / topic. You can also use the dropdown box underneath the displayed week / topic to jump to a hidden section ",
        },{
        id: 5,
        Question: "How do I find course X",
        Answer: "If you are not already enrolled in a course you can search for it by name and description.",
        }
    ]
}

 const homeReducer = (state = initState, action) => {  
    switch (action.type)
  {
    default:
        return state;
    
    }
}


export default homeReducer;