
import Question1 from './components/Question1'
import Question2 from './components/Question2'
import Question3 from './components/Question3'


function App() {
 
  return (
    <div className=''>
      <h1 className='text-3xl font-bold mb-5 ml-1/2 mr-1/2 flex justify-center'>Static Quiz App</h1>
      <div className=''>
        <Question1 question="What is the capital of France?" choice1="Berlin" choice2="Madrid" choice3="Paris" choice4="Lisbon" />
        <Question2 question="Who developed ReactJS?" choice1="Google" choice2="Facebook" choice3="Microsoft" choice4="Apple"/>
        <Question3 question="Which programming language is used for React?" choice1="Python" choice2="Java" choice3="JavaScript" choice4="C++"/>
      </div>
      
    </div>
  )
}

export default App
