//example referencing the run for week 9 would look like this:
// beginner[8].weekDays[2].run returns '3'

const beginner = [
    {weekNumber: '1', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '3', complete: false},
        {day: 'Wednesday', run: '3', complete: false},
        {day: 'Thursday', run: '3', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: '6', complete: false},
        {day: 'Sunday', run: 'rest', complete: false},
        ]
    },
    {weekNumber: '2', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '3', complete: false},
        {day: 'Wednesday', run: '3', complete: false},
        {day: 'Thursday', run: '3', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: '7', complete: false},
        {day: 'Sunday', run: 'rest', complete: false},
        ]
    },
    {weekNumber: '3', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '3', complete: false},
        {day: 'Wednesday', run: '4', complete: false},
        {day: 'Thursday', run: '3', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: '5', complete: false},
        {day: 'Sunday', run: 'rest', complete: false},
        ]
    },
    {weekNumber: '4', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '3', complete: false},
        {day: 'Wednesday', run: '4', complete: false},
        {day: 'Thursday', run: '3', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: '9', complete: false},
        {day: 'Sunday', run: 'rest', complete: false},
        ]
    },
    {weekNumber: '5', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '3', complete: false},
        {day: 'Wednesday', run: '5', complete: false},
        {day: 'Thursday', run: '3', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: '10', complete: false},
        {day: 'Sunday', run: 'rest', complete: false},
        ]
    },
    {weekNumber: '6', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '3', complete: false},
        {day: 'Wednesday', run: '5', complete: false},
        {day: 'Thursday', run: '3', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: '7', complete: false},
        {day: 'Sunday', run: 'rest', complete: false},
        ]
    },
    {weekNumber: '7', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '3', complete: false},
        {day: 'Wednesday', run: '6', complete: false},
        {day: 'Thursday', run: '3', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: '12', complete: false},
        {day: 'Sunday', run: 'rest', complete: false},
        ]
    },
    {weekNumber: '8', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '3', complete: false},
        {day: 'Wednesday', run: '6', complete: false},
        {day: 'Thursday', run: '3', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: 'rest', complete: false},
        {day: 'Sunday', run: '13.1', complete: false},
        ]
    },
    {weekNumber: '9', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '3', complete: false},
        {day: 'Wednesday', run: '7', complete: false},
        {day: 'Thursday', run: '4', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: '10', complete: false},
        {day: 'Sunday', run: 'rest', complete: false},
        ]
    },
    {weekNumber: '10', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '3', complete: false},
        {day: 'Wednesday', run: '7', complete: false},
        {day: 'Thursday', run: '4', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: '15', complete: false},
        {day: 'Sunday', run: 'rest', complete: false},
        ]
    },
    {weekNumber: '11', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '4', complete: false},
        {day: 'Wednesday', run: '8', complete: false},
        {day: 'Thursday', run: '4', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: '16', complete: false},
        {day: 'Sunday', run: 'rest', complete: false},
        ]
    },
    {weekNumber: '12', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '4', complete: false},
        {day: 'Wednesday', run: '8', complete: false},
        {day: 'Thursday', run: '5', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: '12', complete: false},
        {day: 'Sunday', run: 'rest', complete: false},
        ]
    },
    {weekNumber: '13', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '4', complete: false},
        {day: 'Wednesday', run: '9', complete: false},
        {day: 'Thursday', run: '5', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: '18', complete: false},
        {day: 'Sunday', run: 'rest', complete: false},
        ]
    },
    {weekNumber: '14', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '5', complete: false},
        {day: 'Wednesday', run: '9', complete: false},
        {day: 'Thursday', run: '5', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: '14', complete: false},
        {day: 'Sunday', run: 'rest', complete: false},
        ]
    },
    {weekNumber: '15', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '5', complete: false},
        {day: 'Wednesday', run: '10', complete: false},
        {day: 'Thursday', run: '5', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: '20', complete: false},
        {day: 'Sunday', run: 'rest', complete: false},
        ]
    },
    {weekNumber: '16', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '5', complete: false},
        {day: 'Wednesday', run: '8', complete: false},
        {day: 'Thursday', run: '4', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: '12', complete: false},
        {day: 'Sunday', run: 'rest', complete: false},
        ]
    },
    {weekNumber: '17', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '4', complete: false},
        {day: 'Wednesday', run: '6', complete: false},
        {day: 'Thursday', run: '3', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: '8', complete: false},
        {day: 'Sunday', run: 'rest', complete: false},
        ]
    },
    {weekNumber: '18', 
    weekDays: [
        {day: 'Monday', run: 'rest', complete: false},
        {day: 'Tuesday', run: '3', complete: false},
        {day: 'Wednesday', run: '4', complete: false},
        {day: 'Thursday', run: '2', complete: false},
        {day: 'Friday', run: 'rest', complete: false},
        {day: 'Saturday', run: 'rest', complete: false},
        {day: 'Sunday', run: '26.2', complete: false},
        ]
    },
]

export default beginner