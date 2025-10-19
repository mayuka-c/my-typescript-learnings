import Button from "./component/Button";
import Container from "./component/Container";
import Form from "./component/Form";
import Input from "./component/Input";

function App() {
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; phone: string };
    console.log(extractedData);
  }

  return (
    <main>
      <Form onSave={handleSave}>
        <Input id="name" label="Name" type="text" />
        <Input id="phone" label="Phone No" type="number" />
        <p>
          <Button el="button">Save</Button>
        </p>
      </Form>
      <Button el="button">A Button</Button>
      <Button el="anchor" href="https://google.com">
        A Link
      </Button>
      <div>
        <Container as={Button} el="button">
          Click me
        </Container>
      </div>
    </main>
  );
}

export default App;
