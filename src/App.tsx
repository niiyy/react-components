import { useRef, useState } from 'react'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import Selections from './components/Selections/Selections'

import { IoMailUnreadOutline } from 'react-icons/io5'

const App = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const [selections, setSelections] = useState<string[]>([])

  return (
    <div className="main">
      {/* <Button ref={buttonRef}>Hello world</Button>
      <Selections
        selections={selections}
        setSelections={setSelections}
        items={[
          {
            value: 'v1',
            label: 'Hello 1',
          },
          {
            value: 'v2',
            label: 'Hello 2',
          },
        ]}
      /> */}

      {/* <Input
        suffixElement={<IoMailUnreadOutline />}
        prefixElement={<IoMailUnreadOutline />}
      /> */}
    </div>
  )
}

export default App
