import React from "react"
import Grid from "../../../common/layout/grid"

export function LabelAndInput(props) {
  return (
    <Grid cols={props.cols}>
      <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input
          {...props.input}
          type="text"
        //   className="form-control"
        //   title="asdasd"
        //   name="asdasd"
        //   placeholder="{props.placeholder}"
        //   readOnly={props.readOnly}
        />
      </div>
    </Grid>
  )
}
