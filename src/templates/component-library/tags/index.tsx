import Tag, { TAG_TYPE } from "@/components/tag";

const Tags = () => {
  return (
    <div className="flex flex-row justify-center gap-4 items-center">
      <Tag type={TAG_TYPE.DEFAULT} label="Default"/>
      <Tag type={TAG_TYPE.SUCCESS} label="Success"/>
      <Tag type={TAG_TYPE.INFO} label="Info"/>
      <Tag type={TAG_TYPE.WARNING} label="Warning"/>
      <Tag type={TAG_TYPE.DANGER} label="Danger"/>
    </div>
  );
};

export default Tags;
