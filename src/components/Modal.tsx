import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"
import { FaPlus } from "react-icons/fa"

export const Modal = () => {
  return (
    <>
      <Dialog.Root size="cover" placement="center" motionPreset="slide-in-bottom">
        <Dialog.Trigger asChild>
          <Button
            variant="outline"
            size="md"
            position="fixed"
            bottom="8"
            right={["5%", "10%", "15%", "20%"]}>
            <FaPlus />
          </Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Nova despesa</Dialog.Title>
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Dialog.CloseTrigger>
              </Dialog.Header>
              <Dialog.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis enim quasi, pariatur quam adipisci minus nesciunt doloremque nam quis labore mollitia aliquam recusandae alias, nisi laborum temporibus, ipsa velit molestiae.
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline" colorPalette={"red"}>Cancelar</Button>
                </Dialog.ActionTrigger>
                <Button>Adicionar</Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  )
}