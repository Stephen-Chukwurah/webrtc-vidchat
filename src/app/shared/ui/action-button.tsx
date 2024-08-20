export interface ActionButtonProps {
    cssClass: string;
    text?: string;
    icon: string;
}

export default function ActionButton({cssClass, text, icon}: ActionButtonProps) {
  return (
    <button className={`material-symbols-outlined ${cssClass} p-3 rounded-full shadow-md`}>
      {icon}
    </button>
  );
}
