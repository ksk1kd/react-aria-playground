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
          <h1 className="text-4xl font-bold">Select</h1>
          <Select className="my-4">
            <Label className="block text-gray-700">Favorite Animal</Label>
            <Button className="flex justify-between gap-3 w-35 mt-2 py-2 px-4 bg-white border border-gray-500 rounded-md">
              <SelectValue />
              <span className="text-gray-600" aria-hidden="true">
                ▼
              </span>
            </Button>
            <Popover>
              <ListBox className="grid gap-2 w-35 p-1 bg-gray-50 border border-gray-500 rounded-md">
                <ListBoxItem className="py-2 px-4">Cat</ListBoxItem>
                <ListBoxItem className="py-2 px-4">Dog</ListBoxItem>
                <ListBoxItem className="py-2 px-4">Kangaroo</ListBoxItem>
              </ListBox>
            </Popover>
          </Select>
        </section>
      </div>
    </>
  )
}

export default App
