import { ButtonsContained } from "../../Buttons/ButtonsContained"
import { ButtonsOutlined } from "../../Buttons/ButtonsOutlined"
import { ButtonsText } from "../../Buttons/ButtonsText"
import "./grid.css"

export function DesignSystem() {
  return (
    <div>
      <h2 className="my-4">Design System</h2>
      <div className="grid-design-system">
        <div style={{ gridArea: "buttonsContained" }}>
          <ButtonsContained />
        </div>
        <div style={{ gridArea: "buttonsOutlined" }}>
          <ButtonsOutlined />
        </div>
        <div style={{ gridArea: "buttonsText" }}>
          <ButtonsText />
        </div>
      </div>
    </div>
  )
}
