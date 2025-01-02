import React from "react";
import { SelectComponent } from "../SelectComponent";
import { numberOfRenders, privacy, resolutions, roomStyles } from "../constants/data";
import Motion from "@/components/ui/Motion";
 
interface RoomStyleProps {
  resolution: string;
  setResolution: (type: string) => void;
  render: string;
  setRender: (type: string) => void;
  roomStyle: string;
  setRoomStyle: (style: string) => void;
  privacyValue: string;
  setPrivacyValue: (privacy: string) => void;
}

export default function RoomStyle({
  resolution,
  setResolution,
  render,
  setRender,
  roomStyle,
  setRoomStyle,
  privacyValue,
  setPrivacyValue,
}: RoomStyleProps) {
  return (
    <Motion
      transition={{ duration: 0.5 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        <div className="space-y-3 w-full">
          <h2 className="font-semibold">Room</h2>
          <div className="w-full relative">
            <SelectComponent
              defaultValue={roomStyles[0]}
              items={roomStyles}
              placeholder="Select Style"
              title="Style"
              onValueChange={(value) => setRoomStyle(value)}
              selected={roomStyle}
            />
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="font-semibold">Number of Renders</h2>
          <div className="w-full relative">
            <SelectComponent
              defaultValue={numberOfRenders[0]}
              items={numberOfRenders}
              placeholder="Select Room Type"
              title="Room Type"
              onValueChange={(value) => setRender(value)}
              selected={render}
            />
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="font-semibold">Number of Resolution</h2>
          <div className="w-full relative">
            <SelectComponent
              defaultValue={resolutions[0]}
              items={resolutions}
              placeholder="Select Room Type"
              title="Room Type"
              onValueChange={(value) => setResolution(value)}
              selected={resolution}
            />
          </div>
        </div>
        <div className="space-y-3 w-full">
          <h2 className="font-semibold">Privacy</h2>
          <div className="w-full relative">
            <SelectComponent
              defaultValue={privacy[1]}
              items={privacy}
              placeholder="Select Privacy"
              title="Privacy"
              onValueChange={(value) => setPrivacyValue(value)}
              selected={privacyValue}
            />
          </div>
        </div>
      </div>
    </Motion>
  );
}
