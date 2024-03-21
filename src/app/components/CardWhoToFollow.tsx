import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus } from "lucide-react";

const CardWhoToFollow: React.FC = () => {
  return (
    <div className="mt-2 ml-4 bg-slate-200 p-2 rounded">
      <h2>Who To Follow</h2>
      {/* CARD USER */}
      <div className="my-2 flex items-center justify-between rounded-md border border-gray-400 p-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Firza</p>
        </div>

        <UserPlus />
      </div>
      {/* END CARD USER */}

      {/* CARD USER */}
      <div className="my-2 flex items-center justify-between rounded-md border border-gray-400 p-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Alex</p>
        </div>

        <UserPlus />
      </div>
      {/* END CARD USER */}

      {/* CARD USER */}
      <div className="my-2 flex items-center justify-between rounded-md border border-gray-400 p-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Dariuz</p>
        </div>

        <UserPlus />
      </div>
      {/* END CARD USER */}

      
    </div>
  );
};

export default CardWhoToFollow;
