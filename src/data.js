import { createTheme } from "@mui/material";

export const skills = [
  [
      'HTML', 
      'CSS',  
      'Javascript', 
      'ReactJS',
      'Bootstrap',
      'Material UI'
  ],
  [
      'NodeJS',
      'Express',
      'MongoDB' 
  ],
  [
      'Communication',
      'Teamwork',
      'Adaptability'
  ]  
];

export const projects = [
    {
        title: 'Todo List Web App',
        subtitle: 'ReactJS and Material UI',
        description: 'A web app built with React and Material UI',
        link: 'https://github.com/btoch23/mui-react-todolist',
        image: './sizedd.png',
        id: 0
    },
    {
        title: 'SendSheet',
        subtitle: 'Full-Stack Web App',
        description: 'A full-stack web app for climbers to log boulder problems and routes',
        link: 'https://github.com/btoch23/SendSheet',
        image: './sendsheet.png',
        id: 1
    },
    {
        title: 'Circuit Workout Creator',
        subtitle: 'Javascript, Bootstrap, and APIs',
        description: 'A web app to design a circuit workout',
        link: 'https://github.com/btoch23/circuit-creator',
        image: './circuit.png',
        id: 2
    },
    {
        title: 'Poetic RESTful API',
        subtitle: 'NodeJS, Express, MongoDB',
        description: 'A platform powered by NodeJS and Express to provide poets a place to share and discuss their writing with fellow artists',
        link: 'https://github.com/btoch23/Poetic-Backend',
        image:'./poeticBackend.png',
        id: 3
    }
];

export const certificates = [
  {
    school: 'NuCamp Bootcamp',
    topic: 'Front-End Web and Mobile Development',
    date: '12/18/23',
    certificate: './frontendcert.png'
  },
  {
    school: 'NuCamp Bootcamp',
    topic: 'Back-End Development: NodeJS, Express, MongoDB',
    date: '1/25/24',
    certificate: './backendcert.png'
  },
  {
    school: 'NuCamp Bootcamp',
    topic: 'Full-Stack Web and Mobile Development',
    date: '1/25/24',
    certificate: './fullstackcert.png'
  },
];

export const theme = createTheme({
    palette: {
      hunterGreen: {
        main: '#386641',
        light: '#50915D',
        dark: '#24422A'
      },
      white: {
        main: '#F2E8CF',
      },
      red: {
        main: '#BC4749',
        light: '#CE7879',
        dark: '#963638',
      }
    }
  });