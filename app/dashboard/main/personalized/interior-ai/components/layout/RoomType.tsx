import React from "react";
import { SelectComponent } from "../SelectComponent";
import { modes, roomTypes } from "../constants/data";
import Motion from "@/components/ui/Motion";
 
interface RoomTypeProps {
  roomType: string;
  setRoomType: (type: string) => void;
  mode: string;
  setMode: (mode: string) => void;
}

export default function RoomType({ 
  roomType, 
  setRoomType, 
  mode, 
  setMode 
}: RoomTypeProps) {
  return (
    <Motion transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
      <div className="w-full relative space-y-12 !mt-16">
        <div className="space-y-3">
          <h2 className="font-semibold">Room</h2>
          <div className="w-full relative">
            <SelectComponent 
              defaultValue={roomTypes[0]} 
              items={roomTypes} 
              placeholder="Select Room Type" 
              title="Room Type"
              onValueChange={(value) => setRoomType(value)}
              selected={roomType}
            />
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="font-semibold">Mode</h2>
          <div className="w-full relative">
            <SelectComponent 
              defaultValue={modes[0]} 
              items={modes} 
              placeholder="Select Room Design Mode" 
              title="Design Mode"
              onValueChange={(value) => setMode(value)}
              selected={mode}
            />
          </div>
        </div>
        <p className="text-[#ABAEB7] leading-8">
          You get widely different results with each mode. Virtual Staging mode will auto detect the construction (like walls, ceiling, beams) and tries to
          avoid changing it, while Interior Design mode doesn't but gives you more creative ideas. A good idea is to use Interior Design mode and then Mix to
          get the original auto masked background back. 360° panorama is a new beta feature, soon we will add a viewer for it, for now copy your image and paste
          and watch your panorama here.
        </p>
      </div>
    </Motion>
  );
}