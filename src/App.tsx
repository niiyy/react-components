import { useRef, useState } from 'react'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import Selections from './components/Selections/Selections'

import { IoMailUnreadOutline } from 'react-icons/io5'
import LoaderPlaceHolder from './components/Loaders/LoaderPlaceHolder'
import LoaderHolder from './components/Loaders/LoaderPlaceHolder'

const App = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const [selections, setSelections] = useState<string[]>([])

  return (
    <div className="main">
      {/* <Button
        className="qzdqzdqzd"
        suffixElement={<p>Hello</p>}
        prefixElement={<p>World</p>}
        ref={buttonRef}
        loading
      >
        Hello world
      </Button> */}
      <LoaderHolder />

      {/* <Selections
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
