import { Avatar, HStack, Menu, Portal } from "@chakra-ui/react"
import { ColorModeButton } from "./ui/color-mode"

const colorPalette = ["red", "blue", "green", "yellow", "purple", "orange"]

const pickPalette = (name: string) => {
  const index = name.charCodeAt(0) % colorPalette.length
  return colorPalette[index]
}

export const AvatarUser = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <HStack>
          <Avatar.Root colorPalette={pickPalette("Shane Nelson")}>
            <Avatar.Fallback name="Gustavo William" />
          </Avatar.Root>
        </HStack>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="">
              <ColorModeButton />
              
            </Menu.Item>
            <Menu.Item value="perfil">Perfil</Menu.Item>
            <Menu.Item value="sobre">Sobre</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
