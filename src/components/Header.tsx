"use client"

import { IoIosHome } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { Stack, Tabs, useTabs } from "@chakra-ui/react"
import { AvatarUser } from "./AvatarUser"

export const Header = () => {
  const tabs = useTabs({
    defaultValue: "members",
  })

  return (
    <Stack align="center" justifyContent="espace-between" p="8">
      <Tabs.RootProvider value={tabs} w={["100%", "80%", "70%", "60%"]}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Tabs.List>
            <Tabs.Trigger value="members">
              <IoIosHome />
              Inicio
            </Tabs.Trigger>
            <Tabs.Trigger value="projects">
              <FaCalendarAlt />
              Calendário
            </Tabs.Trigger>
            <Tabs.Trigger value="tasks">
              <VscGraph />
              Estatísticas
            </Tabs.Trigger>
          </Tabs.List>
          <AvatarUser />
        </div>
        <Tabs.Content value="members">
          inicio
        </Tabs.Content>
        <Tabs.Content value="projects">
          calendario
        </Tabs.Content>
        <Tabs.Content value="tasks">
          graficos
        </Tabs.Content>
      </Tabs.RootProvider>
    </Stack>
  )
}