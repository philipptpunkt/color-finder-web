import { cn } from "@/utils/cn"
import { Card } from "../Card/Card"
import { Icon, IconName } from "@/components/Icon"

interface TransactionProps {
  name: string
  issue: string
  amount: string
}
function Transaction({ name, issue, amount }: TransactionProps) {
  const isReimbursement = amount.startsWith("-")

  return (
    <div className="flex justify-between py-4">
      <div className="flex ">
        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-custom-100 dark:bg-custom-700 mr-2">
          <Icon
            iconName={
              isReimbursement
                ? IconName.icArrowBendUpLeft
                : IconName.icArrowBendDownRight
            }
            className="w-6 h-6"
          />
        </div>
        <div>
          <p className="text-base font-semibold">{name}</p>
          <p className="text-sm font-normal text-text-light-light dark:text-text-light-dark">
            {issue}
          </p>
        </div>
      </div>
      <p className="text-sm font-semibold">{amount}</p>
    </div>
  )
}

export function Transactions() {
  return (
    <Card rounded="rounded-xl" fill>
      <p className="mt-4 ml-4 font-semibold text-lg">Transactions</p>
      <p className="ml-4 pb-4 text-sm text-text-light-light dark:text-text-light-dark">
        You had 74 Transactions in the past 30 days.
      </p>
      <div className="px-4 h-[290px] overflow-scroll">
        <Transaction
          name="John Anderson"
          issue="Monthly Subscription"
          amount="+$29.00"
        />
        <Transaction
          name="Emily Roberts"
          issue="Monthly Subscription Pro"
          amount="+$39.50"
        />
        <Transaction
          name="Michael Johnson"
          issue="Reimbursement"
          amount="-$29.00"
        />
        <Transaction
          name="David Wilson"
          issue="Yearly Subscription Pro"
          amount="+$410.00"
        />
        <Transaction
          name="Jessica Thompson"
          issue="Monthly Subscription"
          amount="+$29.00"
        />
        <Transaction
          name="Sarah Miller"
          issue="Yearly Subscription"
          amount="+$315.00"
        />
      </div>
    </Card>
  )
}
