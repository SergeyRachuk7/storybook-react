import { action } from '@storybook/addon-actions';
// import { Accordion } from "./Accordion"; 
import React, { useState } from 'react';
import { Accordion } from './Accordion';

// import { Button } from '../../stories/Button'; 

export default {
    title: "Accordion",
    component: Accordion,
};


const callback = action("accordion mode chenge event fired");
const onClickCallback = action("some item was clicked");


export const MenuCollopsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback} />
export const UsersCollopsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback} items={[{ title: "Dimych", value: 1 }, { title: "Valera", value: 2 }, { title: "Artem", value: 3 }, { title: "Victro", value: 4 }]} onClick={onClickCallback} />


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}
        items={[{ title: "Dimych", value: 1 },
        { title: "Valera", value: 2 },
        { title: "Artem", value: 3 },
        { title: "Victro", value: 4 }]}
        onClick={(value) => { alert(`user with ID${value} should be happy`) }} />
}

// export default meta;
// type Story = StoryObj<typeof Accordion>;


// export const FirstStory: Story = {
//     args: {
//       titleValue: "hello",
//       collapsed: true,
//       onChange: () :void => {
//         console.log("on  change")
//       }
//     }
// }



// const onChangeHendler = action('onChange')


// export const CollapsedAccordion = () => {
//     return <Accordion titleValue='Collapsed Accordion'
//         collapsed={true}
//         onChange={onChangeHendler} />
// }


// export const OpenedCollapsedAccordion = () => {
//     return <Accordion titleValue='Opened Accordion'
//         collapsed={false}
//         onChange={(): void => { }} />
// }

// export const AccordionDemo = () => {
//     const [collapsed, setCollapsed] = useState(false)
//     return <Accordion titleValue='Accordion'
//         collapsed={collapsed}
//         onChange={(): void => {
//             setCollapsed(!collapsed)
//         }} />
// }


