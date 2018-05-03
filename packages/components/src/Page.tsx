import * as React from "react"
import glamorous, { Div } from "glamorous"
import { Theme } from "@operational/theme"

import Button from "./Button"
import Icon from "./Icon"

export interface Props {
  title: string
  breadcrumbs?: React.ReactNode
  controls?: React.ReactNode
  children?: React.ReactNode
}

const Container = glamorous.div(({ theme }: { theme: Theme }): {} => ({
  label: "page",
  backgroundColor: theme.colors.white,
  padding: `0px ${theme.spacing * 1.5}px ${theme.spacing * 1.5}px`,
}))

const TopBar = glamorous.div(({ theme }: { theme: Theme }): {} => ({
  height: theme.box,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}))

const TitleBar = glamorous.div(({ theme }: { theme: Theme }): {} => ({
  ...theme.typography.title,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginTop: 0.5 * theme.spacing,
  marginBottom: 2 * theme.spacing,
}))

const ControlsContainer = glamorous.div(({ theme }: { theme: Theme }): {} => ({
  marginLeft: theme.spacing,
  // Offset the line-height setting inherited from being inside a
  // typography component/mixin.
  lineHeight: 1,
  "& > :last-child": {
    marginRight: 0,
  },
}))

const Page = (props: Props) => (
  <Container>
    <TopBar>{props.breadcrumbs}</TopBar>
    <TitleBar>
      {props.title}
      <ControlsContainer>{props.controls}</ControlsContainer>
    </TitleBar>
    {props.children}
  </Container>
)

export default Page
