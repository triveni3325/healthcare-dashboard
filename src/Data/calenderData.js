
export const calendarData = {
  month: 'October 2021',
  appointments: {
    2: ['09:00', '11:00'],
    3: ['13:00'],
    5: ['15:00'],
    26: ['10:00'],
    29: ['14:30'],
  },
  detailedAppointments: [
    { id: 1, title: "Dentist", time: "08:00 - 11:00", day: 26 },
    { id: 2, title: "Physiotherapy Appointment", time: "13:00 - 15:00", day: 27 },
    
  ],
};

const daysInOctober = Array.from({ length: 31 }, (_, i) => i + 1);
export const octoberDays = daysInOctober.map(day => ({
  day,
  appointments: calendarData.appointments[day] || [],
}));