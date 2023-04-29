import { createBoard } from '@wixc3/react-board';
import { Label } from '../../../components/label/label';

export default createBoard({
    name: 'Label',
    Board: () => <Label> My Input Label </Label>,
    environmentProps: {
        canvasWidth: 110,
    },
});
