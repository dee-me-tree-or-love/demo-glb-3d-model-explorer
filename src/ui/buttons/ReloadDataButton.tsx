interface ReloadDataButtonProps {
  onClick: () => void;
}

/**
 * Reload the random data into the Explorer.
 */
export const ReloadDataButton = ({ onClick }: ReloadDataButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>Reload Random Data!</button>
    </div>
  );
};
