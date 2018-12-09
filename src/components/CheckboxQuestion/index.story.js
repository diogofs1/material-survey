// @flow

import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import CheckboxQuestion from "./"

storiesOf("CheckboxQuestion", module).add("Basic", () => (
  <CheckboxQuestion
    question={{
      name: "checkbox-example",
      title: "What do you care most about in life?",
      type: "checkbox",
      choices: ["Getting Swoll", "Friends & Family", "Completing this question"]
    }}
  />
))
