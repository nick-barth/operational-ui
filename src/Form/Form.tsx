/**
 * Having React typings in scope is necessary for styled components not using React directly, otherwise
 * botched module names like `import("eac")` show up in the .d.ts files due to a typescript compiler error.
 * See issue: https://github.com/emotion-js/emotion/issues/788
 * @todo remove this as soon as the issue is fixed.
 */
// @ts-ignore
import * as React from "react"

import styled from "../utils/styled"

export const Form = styled("form")(({ theme }) => ({
  // Space between groups
  "> :not(:last-child)": {
    marginBottom: 34 - theme.space.small,
    display: "block",
  },

  // Space between children _inside_ groups
  "> :not(:last-child) > *": {
    marginBottom: theme.space.small,
  },
}))

export default Form
