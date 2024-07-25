// code JS
// import React from 'react'; 

// const Greeting = ({ name }) => { 
//     return <div>Bonjour, {name}!</div>;
// };

// export default Greeting;
import React from 'react';

// Définir une interface pour les props
interface GreetingProps {
    name: string;
}

// Composant fonctionnel avec des props typées
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Bonjour, {name}!</div>;
};

export default Greeting;

