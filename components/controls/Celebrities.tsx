import { useGlobals } from "@/contexts/GlobalContext";
import Message from "../ui/Message";
import FilterCelebrities from "../FilterCelebrities";
import { MAX_AVATARS } from "@/misc/data";

const Celebrities = ({
  category,
}: {
  category: "Celebrities" | "Fictional";
}) => {
  const { avatars } = useGlobals();
  return (
    <div className="w-full min-h-full space-y-6">
      <FilterCelebrities category={category} />

      {avatars.length >= MAX_AVATARS && (
        <Message variant="error">
          Máximo de {MAX_AVATARS} pessoas por vez. Remova uma para adicionar outra.
        </Message>
      )}
    </div>
  );
};

export default Celebrities;
