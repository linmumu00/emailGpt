import Introduction from "../main/introduction";
import Select from "../main/select";
import Edit from "../main/edit";
import BusinessType from "../main/select/businessType";
import Theme from "../main/select/theme";
import Content from "../main/select/content";
import StepOne from "../main/select/content/item/stepOne";
import StepSecond from "../main/select/content/item/stepSecond";
import StepThird from "../main/select/content/item/seepThird";

var routes = [
    {
        path: '/introduction',
        element: <Introduction />
    },
    {
        path: '/select',
        element: <Select />,
        children: [
            {
                path: 'businessType',
                element: <BusinessType />
            },
            {
                path: 'theme',
                element: <Theme />
            },
            {
                path: 'content',
                element: <Content />,
                children: [
                    {
                        path: 'one',
                        element: <StepOne />
                    },
                    {
                        path: 'second',
                        element: <StepSecond />
                    },
                    {
                        path: 'third',
                        element: <StepThird />
                    },
                    {
                        path: '',
                        element: <StepOne />
                    }
                ]
            },
            {
                path: '',
                element: <BusinessType />
            }
        ]
    },

    {
        path: '/edit',
        element: <Edit />
    },
    {
        path: '',
        element: <Introduction />
    },
]

export default routes