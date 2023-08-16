import Introduction from "../main/introduction";
import SelectFunction from "../main/selectFunction";
import Edit from "../main/edit";

var routes = [
    {
        path: 'introduction',
        element: <Introduction />
    },
    {
        path: 'selectFunction',
        element: <SelectFunction />
    },
    {
        path: 'edit',
        element: <Edit />
    },
    {
        path: '/',
        element: <Introduction />
    },
]

export default routes