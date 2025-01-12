import { Check, Minus, Info } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type PlanFeatures = {
  websites: string;
  storage: string;
  hosting: string;
  solutions: string;
  ssl: boolean;
  analysis: boolean;
  support: string;
  template: string;
  domain: boolean;
  design: boolean;
  email: boolean;
};

const plans: { name: string; features: PlanFeatures }[] = [
  {
    name: "Basic",
    features: {
      websites: "2 website",
      storage: "5GB",
      hosting: "Shared Hosting",
      solutions: "Add on",
      ssl: false,
      analysis: false,
      support: "24/7 support",
      template: "Free Templates",
      domain: false,
      design: false,
      email: false,
    }
  },
  {
    name: "Growth",
    features: {
      websites: "10 websites",
      storage: "20GB",
      hosting: "VPS Hosting",
      solutions: "1 Free Solution",
      ssl: true,
      analysis: true,
      support: "24/7 Support",
      template: "Premium Templates",
      domain: true,
      design: false,
      email: false,
    }
  },
  {
    name: "Enterprise",
    features: {
      websites: "Unlimited",
      storage: "100GB",
      hosting: "Dedicated Hosting",
      solutions: "All Solutions",
      ssl: true,
      analysis: true,
      support: "24/7 Priority support",
      template: "Further Customization",
      domain: true,
      design: true,
      email: true,
    }
  }
]

const features = [
  { key: "websites", label: "Websites", description: "Number of websites you can host on this plan" },
  { key: "storage", label: "Storage", description: "Amount of disk space allocated for your website files" },
  { key: "hosting", label: "Hosting", description: "A service that stores your files on a server, making it accessible online." },
  { key: "solutions", label: "Solutions", description: "Add varioty of solutions" },
  { key: "ssl", label: "Free SSL Certificate", description: "Secures your website with HTTPS, enhancing security and SEO" },
  { key: "analysis", label: "Site Analytics", description: "Access to website traffic and performance reports" },
  { key: "support", label: "Customer Support", description: "Level of customer support provided" },
  { key: "template", label: "Website Templates", description: "Access to over 30+ templates and customize without coding" },
  { key: "domain", label: "Free Domain", description: "Ability to use your own domain name" },
  { key: "design", label: "Custom Design", description: "Customize your UI/UX design however you want" },
  { key: "email", label: "Custom Email", description: "One free custom email" },
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

