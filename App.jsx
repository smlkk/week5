import React from 'react';
import './App.css';
import Biography from './Components/Biography';
import Contact from "./Components/Contact"
import Languages from './Components/Languages';

const App = () => {
  const biographyData = {
    name: 'Melek Koç',
    birthDate: '30.11.2003',
    birthPlace: 'Konya/Turkey',
    bio: 'I live in Konya, and studying at Konya Food and Agriculture University as an Electric and Electronic engineering student at 2. class.',
    Languages: [
      'CSS-HTML-Javascript',
      'Python',
    ],
    contact: {
      email: 'melkoc96@@gmail.com',
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Biography data={biographyData} />
        <Languages langs={biographyData.Languages} />
        <Contact contact={biographyData.contact} />
      </header>
    </div>
  );
}

export default App;
