import { Button, Card, Field, Input, InputGroup, Stack } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"
import { LuUser } from "react-icons/lu"

export const Login = () => (
  <Center height="100vh">
    <Card.Root maxW="md">
      <Card.Header>
        <Card.Title>Entrar</Card.Title>
      </Card.Header>
      <Card.Body>
        <Stack gap="4" w="sm">
          <Field.Root required>
            <Field.Label>e-mail</Field.Label>
            <InputGroup startElement={<LuUser />}>
              <Input placeholder="eu@exemplo.com" variant="subtle" />
            </InputGroup>
          </Field.Root>
          <Field.Root>
            <Field.Label>Senha</Field.Label>
            <Input type="password"/>
          </Field.Root>
        </Stack>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">Cancelar</Button>
        <Button variant="solid">Entrar</Button>
      </Card.Footer>
    </Card.Root>
  </Center>
)
