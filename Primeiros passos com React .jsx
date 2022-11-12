const Card = () => {
    return(
        <div className='card'>
        <img src='https://avatars.githubusercontent.com/u/113566274?v=4'/>
        <div>
        <h1>jonathan</h1>
        <p>
           Criando meus primeiros passos com React. 
        </p>
        </div>
        </div>
    )
}

export default Card

.card {
    margin: 32px auto;
}

import './components/Card/Card.css';
import Card from './components/Card'

function App() {
  return(
    <Card/>
  )
}

export default App;
