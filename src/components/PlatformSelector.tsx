import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlaforms from "../hooks/usePlatforms";
import  Platform  from "../entities/Platform";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlaforms();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform: Platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
