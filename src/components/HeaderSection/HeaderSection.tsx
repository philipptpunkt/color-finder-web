import { ContentContainer } from "../Layout/ContentContainer"

export function HeaderSection() {
  return (
    <div className="flex justify-center w-full header-space">
      <div className="flex flex-col sm:flex-row max-w-[1200px]">
        <ContentContainer className="w-full sm:w-1/2 mb-[3px] sm:mb-[0px] sm:mr-[3px]">
          <h1 className="max-w-[300px]">
            <span className="font-black">Find</span> Your Perfect{" "}
            <span className="font-black">Color</span>
          </h1>
        </ContentContainer>
        <ContentContainer className="flex w-full sm:w-1/2">
          <div className="self-end">
            <p className="font-semibold">
              Easily <strong>generate</strong> and customize{" "}
              <strong>Tailwind CSS compatible</strong> color palettes,{" "}
              <strong>preview</strong> color variations, and{" "}
              <strong>apply</strong> them to example components in real-time.
              Whether you are a <strong>designer, developer</strong>, or just
              someone who <strong>loves colors</strong>, this tool helps you
              find the perfect shade for your projects.
            </p>
          </div>
        </ContentContainer>
      </div>
    </div>
  )
}
