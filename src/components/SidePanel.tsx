import { Knob } from '@/components/Knob';

export const SidePanel = ({ className }: { className?: string }) => (
  <div className={`flex outline-1 outline-beige-800 rounded-lg p-5 bg-stone-700 justify-around ${className}`}>
    <Knob />
    <Knob />
    <Knob />
    <Knob />
  </div>
);
