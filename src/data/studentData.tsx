import { studentpic,  avatar  } from "@/assets"
export const studentData = {
  data: [
    {
      id: "1",
      name: "Riya Anadkat",
      image: {url:studentpic},
      studentID: "TIPSG5682",
      gender: "Female",
      AdmissionDate: "03/01/2024",
      Regno: "04565/9090",
      Course: "Hybrid Vehicle",
      CourseDuration: "3 Months",
      isStatusActive: false,
      Specification: "EV course",
      RegisteredOnline: "On Wed Jan 03, 2024  10:07 AM By: {Person’s Name} (Admin)",
      Nationality: "Indian",
      StateofOrigin: "New Delhi",
      ZIP: "Delhi",
      Town: "Haryana",
      PermanentAddress: "{No, Street Address, State }",
      ResidentialAddress: "{No, Street Address, State }",
      Phone: "+234 - (708) - 070 - 2920",
      Email: "sampleemail@gmail.com",
       },
  ],
  staff: [
    {
      id: 1,
      courseName: "UX Research & Case Study Prepare",
      instructor: {
        name: "Pankaj Prajapati",
        avatar: { url: avatar },
      },
      progress: 80,
      level: "advance",
      nextAssignment: "Apr 25, 2022 | 12:00 PM",
    },
    {
      id: 2,
      courseName: "Figma Advanced Prototype",
      instructor: {
        name: "Pankaj Prajapati",
        avatar: { url: avatar },
      },
      progress: 50,
      level: "medium",
      nextAssignment: "Apr 25, 2022 | 12:00 PM",
    },
    {
      id: 3,
      courseName: "UX Law Study with Real Examples",
      instructor: {
        name: "Pankaj Prajapati",
        avatar: { url: avatar },
      },
      progress: 65,
      level: "beginner",
      nextAssignment: "Apr 25, 2022 | 12:00 PM",
    },
  ],
};
