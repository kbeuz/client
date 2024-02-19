interface SearchModalProps {
  isOpen?: boolean;
  children?: React.ReactElement;
  onClose?: () => void;
}

const SearchModal = ({ isOpen, children, onClose }: SearchModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-10 bg-black bg-opacity-40 dark:bg-primary_dark dark:bg-opacity-10 backdrop-blur-md`}
        onClick={onClose}
      ></div>

      <div className="fixed top-[150px] max-lg:top-[100px] w-full z-20 duration-300">
        {children}
      </div>
    </>
  );
};

export default SearchModal;
