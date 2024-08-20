import { LayoutContainer } from "@/components/Layout/LayoutContainer"

function Section({ children }: { children: React.ReactNode }) {
  return <div className="py-4">{children}</div>
}

function SectionWithHeadline({
  children,
  headline,
}: {
  children: React.ReactNode
  headline: string
}) {
  return (
    <div className="pb-8">
      <h3 className="pb-4">{headline}</h3>
      {children}
    </div>
  )
}

export default function LegalNotice() {
  return (
    <LayoutContainer>
      <div className="mt-[64px] p-4">
        <h1 className="py-4">Impressum</h1>

        <p>
          <strong>Information according to § 5 TMG (Telemediengesetz):</strong>
        </p>
        <Section>
          <p>
            Philipp Trentmann
            <br />
            Carl-Schurz-Straße 61
            <br />
            28209 Bremen
            <br />
            Germany
          </p>
        </Section>

        <p>
          <strong>Contact:</strong>
        </p>
        <Section>
          <p>E-Mail: contact@allcolors.tech</p>
        </Section>

        <SectionWithHeadline headline="Content Liability">
          <p>
            The contents of our pages were created with great care. However, we
            cannot guarantee the accuracy, completeness, or timeliness of the
            content. As a service provider, we are responsible for our own
            content on these pages according to § 7 Abs.1 TMG. However,
            according to §§ 8 to 10 TMG, we are not obliged to monitor
            transmitted or stored external information or to search for
            circumstances that indicate illegal activity. Obligations to remove
            or block the use of information under general laws remain
            unaffected. Any liability in this regard, however, is only possible
            from the point in time at which we become aware of a specific
            infringement. Upon becoming aware of such legal violations, we will
            remove this content immediately.
          </p>
        </SectionWithHeadline>

        <SectionWithHeadline headline="External Links">
          <p>
            Our website contains links to external websites of third parties, on
            whose content we have no influence. Therefore, we cannot assume any
            liability for these external contents. The respective provider or
            operator of the pages is always responsible for the content of the
            linked pages. The linked pages were checked for possible legal
            violations at the time of linking. Illegal contents were not
            recognizable at the time of linking. A permanent control of the
            linked pages is not reasonable without concrete evidence of a
            violation of the law. Upon notification of violations, we will
            remove such links immediately.
          </p>
        </SectionWithHeadline>

        <SectionWithHeadline headline="Copyright">
          <p>
            The content and works on these pages created by the site operators
            are subject to German copyright law. The reproduction, editing,
            distribution, and any kind of exploitation outside the limits of
            copyright require the written consent of the respective author or
            creator. Downloads and copies of this site are only permitted for
            private, non-commercial use. Insofar as the content on this site was
            not created by the operator, the copyrights of third parties are
            respected. In particular, third-party content is marked as such.
            Should you nevertheless become aware of a copyright infringement, we
            request that you notify us accordingly. Upon notification of
            violations, we will remove such content immediately.
          </p>
        </SectionWithHeadline>

        <SectionWithHeadline headline="Privacy">
          <p>
            The use of our website is usually possible without providing
            personal information. Insofar as personal data (such as name,
            address, or email addresses) is collected on our pages, this is
            always done on a voluntary basis, if possible. This data will not be
            passed on to third parties without your express consent. Please note
            that data transmission over the internet (e.g., communication by
            email) can have security vulnerabilities. A complete protection of
            data against access by third parties is not possible. We expressly
            object to the use of contact data published within the scope of the
            imprint obligation by third parties for the transmission of
            unsolicited advertising and information materials. The operators of
            the pages expressly reserve the right to take legal action in the
            event of unsolicited sending of advertising information, such as
            spam emails.
          </p>
        </SectionWithHeadline>

        <SectionWithHeadline headline="Legal Jurisdiction">
          <p>
            This legal notice is to be considered in conjunction with the laws
            of the Federal Republic of Germany. Any disputes arising in
            connection with this website will be subject to the jurisdiction of
            the courts in Bremen, Germany.
          </p>
        </SectionWithHeadline>

        <Section>
          <p>Last updated August 19th 2024</p>
        </Section>
      </div>
    </LayoutContainer>
  )
}
