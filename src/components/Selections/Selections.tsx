import { Dispatch, MouseEventHandler } from 'react'

export interface SelectionProps {
  isSelected?: boolean
  value: string
  label: string
  onClick: (value: string) => void
}

export interface SelectionWithoutOnClick
  extends Omit<SelectionProps, 'onClick'> {}
export interface SelectionsType {
  isUnique?: boolean
  items: SelectionWithoutOnClick[]
  selections: string[]
  setSelections: Dispatch<React.SetStateAction<string[]>>
}

const Selection = ({ label, isSelected, onClick, value }: SelectionProps) => {
  const handleSelectionClicked = () => {
    onClick && onClick(value)
  }

  return (
    <div
      onClick={handleSelectionClicked}
      className={`selection ${isSelected ? 'selected' : ''}`}
    >
      {label}
    </div>
  )
}

const Selections = ({
  items,
  isUnique,
  selections,
  setSelections,
}: SelectionsType) => {
  const handleSelectionClicked = (value: string) => {
    if (isUnique) {
      return selections.includes(value)
        ? setSelections([])
        : setSelections([value])
    }

    if (selections.includes(value)) {
      setSelections((prevSelections) => {
        return prevSelections.filter((selection) => selection !== value)
      })

      return
    }

    setSelections([...selections, value])
  }

  return (
    <div className="selections-wrapper">
      {items.map((selection, idx) => (
        <Selection
          onClick={handleSelectionClicked}
          isSelected={selections.includes(selection.value)}
          key={idx}
          value={selection.value}
          label={selection.label}
        />
      ))}
    </div>
  )
}

export default Selections
