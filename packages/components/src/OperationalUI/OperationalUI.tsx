import * as React from "react"
import { ThemeProvider } from "glamorous"

import { Theme, operational } from "@operational/theme"
import { baseStylesheet } from "@operational/utils"

export interface Props {
  /** Theme */
  theme?: Theme
  /** Children */
  children?: React.ReactNode
  /** Use the base styles */
  withBaseStyles?: boolean
}

const OperationalUI = (props: Props) => {
  return (
    <ThemeProvider theme={props.theme || operational}>
      <React.Fragment>
        {props.withBaseStyles ? (
          <style
            dangerouslySetInnerHTML={{
              __html: baseStylesheet(props.theme || operational),
            }}
          />
        ) : null}
        {props.children}
      </React.Fragment>
    </ThemeProvider>
  )
}

export default OperationalUI