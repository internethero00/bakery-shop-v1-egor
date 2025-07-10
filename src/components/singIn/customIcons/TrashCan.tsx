import {removeProductFromCart} from "../../../firebase/firebaseCartService.ts";
import {GridRowId} from "@mui/x-data-grid";

type TrashCanProps = {
    id: GridRowId;
    authUser: string;
}

const TrashCan = ({id, authUser}: TrashCanProps) => {
    return (
        <div>
            <img src={'/images/trash_can.jpg'} style={{width: '20px'}}
                 onClick={() => removeProductFromCart(`${authUser}_collection`, id as string)}
                 alt={'delete'}/>
        </div>
    );
};

export default TrashCan;