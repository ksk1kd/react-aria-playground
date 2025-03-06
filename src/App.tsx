import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from 'react-aria-components'

function App() {
  return (
    <>
      <div className="container">
        <section>
          <h1>Select</h1>
          <Select>
            <Label>Favorite Animal</Label>
            <Button>
              <SelectValue />
              <span aria-hidden="true">▼</span>
            </Button>
            <Popover>
              <ListBox>
                <ListBoxItem>Cat</ListBoxItem>
                <ListBoxItem>Dog</ListBoxItem>
                <ListBoxItem>Kangaroo</ListBoxItem>
              </ListBox>
            </Popover>
          </Select>
        </section>
      </div>
    </>
  )
}

export default App
