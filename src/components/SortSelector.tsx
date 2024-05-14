import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortOrder = [
  { value: '', label: 'Relevance' },
  { value: '-added', label: 'Date added' },
  { value: 'name', label: 'Name' },
  { value: '-released', label: 'Release Date' },
  { value: '-metacritic', label: 'Popularity' },
  { value: '-rating', label: 'Average rating' },
]

interface Props {
  onSelecteSortOrder: (sortOrder: string) => void
  selectedSortOrder: string
}

const SortSelector = ({ onSelecteSortOrder, selectedSortOrder }: Props) => {
  const currentSortOrder = SortOrder.find((order) => order.value === selectedSortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {SortOrder.map((sortOrder) => (
          <MenuItem key={sortOrder.value} value={sortOrder.value} onClick={() => onSelecteSortOrder(sortOrder.value)}>
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
