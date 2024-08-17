import { Icon, IconName } from "@/components/Icon"
import { Card } from "../Card/Card"
import "./grid.css"
import { Graph } from "./Graph"
import { Transactions } from "./Transactions"
import { Button } from "@/components/Buttons/Button"

interface StatsCardProps {
  title: string
  subtitle: string
  statistic: string
  iconName: IconName
}
function StatsCard({ title, subtitle, statistic, iconName }: StatsCardProps) {
  return (
    <Card rounded="rounded-xl" horizontalPadding verticalPadding>
      <div className="flex justify-between">
        <p className="text-lg font-semibold text-custom-600 dark:text-custom-400">
          {title}
        </p>
        <Icon iconName={iconName} className="w-4 h-4" />
      </div>
      <p className="text-xl font-bold mb-1">{statistic}</p>
      <p className="text-label">{subtitle}</p>
    </Card>
  )
}

export function Dashboard() {
  return (
    <Card rounded="rounded-2xl" backgroundColor="bg-white dark:bg-black">
      <div className="flex justify-between items-center m-4 mb-0">
        <p className="text-xl font-bold">Dashboard</p>
        <Button type="contained" title="Download PDF" content="limited" />
      </div>
      <div className="grid-dashboard p-4">
        <div style={{ gridArea: "revenue" }}>
          <StatsCard
            title="Total Revenue"
            subtitle="+11.4% from last month"
            statistic="$23,749.18"
            iconName={IconName.icCurrencyDollarSimple}
          />
        </div>
        <div style={{ gridArea: "sales" }}>
          <StatsCard
            title="Sales"
            subtitle="+9.7% from last month"
            statistic="+539"
            iconName={IconName.icChartLine}
          />
        </div>
        <div style={{ gridArea: "activeNow" }}>
          <StatsCard
            title="Active Users"
            subtitle="+35 since last hour"
            statistic="+201"
            iconName={IconName.icPulse}
          />
        </div>
        <div style={{ gridArea: "registrations" }}>
          <StatsCard
            title="New Registrations"
            subtitle="+23.5% from last month"
            statistic="+1124"
            iconName={IconName.icUsers}
          />
        </div>

        <div style={{ gridArea: "graph" }}>
          <Graph />
        </div>

        <div style={{ gridArea: "transactions" }}>
          <Transactions />
        </div>
      </div>
    </Card>
  )
}
