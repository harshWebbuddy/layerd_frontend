import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
interface Props {
	tooltipContent: string;
	children: React.ReactNode;
}
export function TooltipComponent({ tooltipContent, children }: Props) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent>
					<div className="text-white">{tooltipContent}</div>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
