import { Button, Card, Field, Input, InputGroup, Stack } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"
import { LuUser } from "react-icons/lu"

export const Cadastro = () => (
  <Center height="100vh">
    <Card.Root maxW="md">
      <Card.Header>
        <Card.Title>Cadastrar</Card.Title>
      </Card.Header>
      <Card.Body>
        <Stack gap="4" w="sm">
          <Field.Root required>
            <Field.Label>
              Nome <Field.RequiredIndicator />
            </Field.Label>
            <Input />
          </Field.Root>
          <Field.Root required>
            <Field.Label>e-mail
              <Field.RequiredIndicator />
            </Field.Label>
            <InputGroup startElement={<LuUser />}>
              <Input type="email" placeholder="eu@exemplo.com" variant="subtle" />
            </InputGroup>
          </Field.Root>
          <Field.Root required>
            <Field.Label>
              Confirmar e-mail
              <Field.RequiredIndicator />
            </Field.Label>
            <InputGroup startElement={<LuUser />}>
              <Input type="email" variant="subtle" />
            </InputGroup>
          </Field.Root>
          <Field.Root required>
            <Field.Label>
              Senha
              <Field.RequiredIndicator />
            </Field.Label>
            <Input type="password"/>
          </Field.Root>
        </Stack>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">Voltar</Button>
        <Button variant="solid">Entrar</Button>
      </Card.Footer>
    </Card.Root>
  </Center>
)
