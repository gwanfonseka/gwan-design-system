import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Button from "@/components/button";
import Drawer, { DRAWER_PLACEMENT, DRAWER_SIZE } from "@/components/drawer";
import { useState } from "react";

const DrawerTemplate = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<string>(DRAWER_PLACEMENT.RIGHT);
  const [size, setSize] = useState<string>(DRAWER_SIZE.MEDIUM);

  const placementOptions = Object.values(DRAWER_PLACEMENT).map((v) => ({ value: v, label: v }));
  const sizeOptions = Object.values(DRAWER_SIZE).map((v) => ({ value: v, label: v }));

  const codeExample = `import { Drawer, DRAWER_PLACEMENT, DRAWER_SIZE } from "gwan-design-system";
import { useState } from "react";

const Example = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Open Drawer" onClick={() => setOpen(true)} />

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Drawer Title"
        placement={DRAWER_PLACEMENT.RIGHT} // left | right | top | bottom
        size={DRAWER_SIZE.MEDIUM}          // small | medium | large | full
      >
        <p>Drawer content goes here.</p>
      </Drawer>
    </>
  );
};`;

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <Button label="Open Drawer" onClick={() => setOpen(true)} />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <SelectDropdown label="Placement" options={placementOptions} value={placement} onChange={setPlacement} className="w-full sm:w-48" />
        <SelectDropdown label="Size" options={sizeOptions} value={size} onChange={setSize} className="w-full sm:w-48" />
      </div>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Drawer Panel"
        placement={placement as DRAWER_PLACEMENT}
        size={size as DRAWER_SIZE}
      >
        <div className="flex flex-col gap-4 text-sm text-muted-fg">
          <p>This is the drawer content area. You can place any content here — forms, navigation, filters, or details panels.</p>
          <p className="text-xs text-muted-fg/60">Placement: <span className="font-semibold text-foreground">{placement}</span></p>
          <p className="text-xs text-muted-fg/60">Size: <span className="font-semibold text-foreground">{size}</span></p>
          <Button label="Close" onClick={() => setOpen(false)} />
        </div>
      </Drawer>
    </div>
  );

  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <Button label="Right Drawer" onClick={() => setOpen2(true)} />
        <Button label="Bottom Drawer" onClick={() => setOpen3(true)} />
      </div>

      <Drawer open={open2} onClose={() => setOpen2(false)} title="Right Panel" placement={DRAWER_PLACEMENT.RIGHT}>
        <p className="text-sm text-muted-fg">Right-side drawer content. Great for detail panels and settings.</p>
      </Drawer>
      <Drawer open={open3} onClose={() => setOpen3(false)} title="Bottom Sheet" placement={DRAWER_PLACEMENT.BOTTOM} size={DRAWER_SIZE.SMALL}>
        <p className="text-sm text-muted-fg">Bottom sheet — common on mobile for action menus and filters.</p>
      </Drawer>

      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default DrawerTemplate;
