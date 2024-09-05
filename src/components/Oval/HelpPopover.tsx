import { Icon } from "@/components/Icon";
import { cn } from "@/utils/styleUtils";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

export type HelpPopoverProps = {
  text: React.ReactNode;
  className?: string | undefined;
};

export const HelpPopover = ({ text, className }: HelpPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger name="popover trigger" className="group p-[2px]">
        <Icon
          name="info"
          className={cn("text-inherit h-[calc(1em-4px)] w-[calc(1em-4px)] group-hover:text-text", className)}
        />
      </PopoverTrigger>
      <PopoverContent className="m-2">{text}</PopoverContent>
    </Popover>
  );
};
