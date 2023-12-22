import { createTheme } from "@mui/material";

export const skills = [
    'HTML', 
    'CSS', 
    'Bootstrap', 
    'Javascript', 
    'ReactJS', 
    'React Native',
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
        title: 'Todo List Mobile App',
        subtitle: 'React Native',
        description: 'A mobile app built with React Native',
        link: 'https://github.com/btoch23/react-native-todo-list',
        image: './todolistmobile.png',
        id: 1
    },
    {
        title: 'Circuit Workout Creator',
        subtitle: 'Javascript and APIs',
        description: 'A web app to design a circuit workout',
        link: 'https://github.com/btoch23/circuit-creator',
        image: './circuit.png',
        id: 2
    }
]

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
  })