import Vote from "./Vote/Vote"
import PhoneBook from "./Phonebook/Phonebook";
import { Container } from "./App.styled";

function App() {
  return (
    <Container>
      <Vote />
      <PhoneBook/>
    </Container>
  )
}

export default App;
