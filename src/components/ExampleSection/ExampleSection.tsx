import { DesignSystem } from "./DesignSystem/DesignSystem"
import { ImageCard } from "./Examples/Cards/ImageCard"
import { ActionCard } from "./Examples/Cards/ActionCard"
import { Chat } from "./Examples/Chat/Chat"
import { Dashboard } from "./Examples/Dashboard/Dashboard"
import { ImageGradientCard } from "./Examples/Cards/ImageGradientCard"
import { InputCard } from "./Examples/Cards/InputCard"
import { ImageInfoCard } from "./Examples/Cards/ImageInfoCard"
import { GradientCard } from "./Examples/Cards/GradientCard"
import { Card } from "./Examples/Card/Card"
import "./grid.css"

function Placeholder() {
  return (
    <Card
      fill
      rounded="rounded-2xl"
      backgroundColor="bg-gradient-to-b from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-950"
    >
      {null}
    </Card>
  )
}

export function ExampleSection() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1200px] px-4 py-8">
        <h2 className="my-4">Example Components</h2>
        <div className="grid-examples">
          <div style={{ gridArea: "gradientCard" }}>
            <GradientCard />
          </div>
          <div style={{ gridArea: "chat" }}>
            <Chat />
          </div>
          <div style={{ gridArea: "inputCard" }}>
            <InputCard />
          </div>
          <div style={{ gridArea: "imageGradient" }}>
            <ImageGradientCard />
          </div>
          <div style={{ gridArea: "imageInfo" }}>
            <ImageInfoCard />
          </div>
          <div className="h-full" style={{ gridArea: "actionCard" }}>
            <ActionCard />
          </div>
          <div style={{ gridArea: "card" }}>
            <ImageCard />
          </div>
          <div
            style={{ gridArea: "placeholder" }}
            className="hidden min-[600px]:block"
          >
            <Placeholder />
          </div>
        </div>
        <div className="py-12">
          <Dashboard />
        </div>
        <DesignSystem />
      </div>
    </div>
  )
}
