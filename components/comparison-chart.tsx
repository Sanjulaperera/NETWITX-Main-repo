import { Check, Minus, Info } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type PlanFeatures = {
  websites: string;
  storage: string;
  bandwidth: string;
  ssl: boolean;
  support: string;
  builder: string;
  domain: boolean;
  ip: boolean;
  backups: boolean;
};

const plans: { name: string; features: PlanFeatures }[] = [
  {
    name: "Basic",
    features: {
      websites: "1 website",
      storage: "5GB",
      bandwidth: "50GB",
      ssl: true,
      support: "24/7 support",
      builder: "Basic builder",
      domain: false,
      ip: false,
      backups: false,
    }
  },
  {
    name: "Pro",
    features: {
      websites: "10 websites",
      storage: "20GB",
      bandwidth: "200GB",
      ssl: true,
      support: "24/7 priority support",
      builder: "Advanced builder",
      domain: true,
      ip: false,
      backups: false,
    }
  },
  {
    name: "Enterprise",
    features: {
      websites: "Unlimited",
      storage: "100GB",
      bandwidth: "Unlimited",
      ssl: true,
      support: "24/7 premium support",
      builder: "Advanced builder",
      domain: true,
      ip: true,
      backups: true,
    }
  }
]

const features = [
  { key: "websites", label: "Websites", description: "Number of websites you can host on this plan" },
  { key: "storage", label: "Storage", description: "Amount of disk space allocated for your website files" },
  { key: "bandwidth", label: "Bandwidth", description: "Amount of data transfer allowed per month" },
  { key: "ssl", label: "Free SSL Certificate", description: "Secures your website with HTTPS, enhancing security and SEO" },
  { key: "support", label: "Customer Support", description: "Level of customer support provided" },
  { key: "builder", label: "Website Builder", description: "Tool to create and customize your website without coding" },
  { key: "domain", label: "Custom Domain", description: "Ability to use your own domain name" },
  { key: "ip", label: "Dedicated IP", description: "Unique IP address for your website, not shared with others" },
  { key: "backups", label: "Daily Backups", description: "Automatic daily backups of your website data" },
]

export function ComparisonChart() {
  return (
    <TooltipProvider>
      <div className="w-full overflow-x-auto overflow-y-visible">
        <div className="relative">
          <Table className="w-full border-collapse">
            <TableHeader className="sticky top-0 z-10 bg-blue-50">
              <TableRow>
                <TableHead className="w-[200px] bg-blue-50 text-blue-800">Feature</TableHead>
                {plans.map((plan) => (
                  <TableHead key={plan.name} className="text-center bg-blue-50 text-blue-800">
                    {plan.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature) => (
                <TableRow key={feature.key}>
                  <TableCell className="font-medium bg-blue-50 sticky left-0 text-blue-800">
                    <div className="flex items-center gap-2">
                      {feature.label}
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-blue-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{feature.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TableCell>
                  {plans.map((plan) => (
                    <TableCell key={`${plan.name}-${feature.key}`} className="text-center">
                      {typeof plan.features[feature.key as keyof PlanFeatures] === 'boolean' ? (
                        plan.features[feature.key as keyof PlanFeatures] ? (
                          <Check className="h-5 w-5 text-blue-500 mx-auto" />
                        ) : (
                          <Minus className="h-5 w-5 text-slate-400 mx-auto" />
                        )
                      ) : (
                        plan.features[feature.key as keyof PlanFeatures]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </TooltipProvider>
  )
}

