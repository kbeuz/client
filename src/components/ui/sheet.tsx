interface SheetProps {
  isOpen?: boolean;
  children?: React.ReactElement;
  onClose?: () => void;
}

const Sheet = ({ isOpen, children, onClose }: SheetProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-10 bg-white dark:bg-primary_dark transition-transform duration-400 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={onClose}
      ></div>

      <div className="fixed top-0 w-full z-20">{children}</div>
    </>
  );
};

export default Sheet;
