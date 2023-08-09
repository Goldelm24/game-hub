import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        order by me
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem></MenuItem>
        <MenuItem>1</MenuItem>
      </MenuList>
    </Menu>
  );

}

export default SortSelector
