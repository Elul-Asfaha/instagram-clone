import Popper from "@mui/base/Popper";
import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";
import NavItems from "./NavItems";
import { ClickAwayListener } from "@mui/material";
import { BsGearWide } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import { BiBookmark } from "react-icons/bi";
type SettingsComponentProps = {
    active: string;
};

const settingOptions1 = [
    { name: "Settings", icons: <BsGearWide /> },
    { name: "Your Activity", icons: <CiTimer /> },
    { name: "Saved", icons: <BiBookmark /> },
];

const SettingsComponent = ({ active }: SettingsComponentProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const handleClickAway = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;
    const displaySettingsOpetions1 = settingOptions1.map((items) => (
        <div className='flex items-center text-md gap-2 py-3 rounded-md px-4 hover:bg-gray-100'>
            <div>{items.icons}</div>
            <p>{items.name}</p>
        </div>
    ));
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div onClick={handleClick}>
                <div className='pt-2'>
                    <NavItems
                        key='settings'
                        name={"More"}
                        icon={<RxHamburgerMenu />}
                        active={active}
                    />
                </div>
                <Popper
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    placement='top-start'
                >
                    <div className='w-fit text-l flex flex-col gap-1 bg-gray-100 min-w-[295px] overflow-hidden rounded-lg shadow-xl'>
                        <div className='flex flex-col p-1 bg-white'>
                            {displaySettingsOpetions1}
                        </div>

                        <div className='bg-white p-2'>
                            <div className='flex gap-2 p-3 rounded-md hover:bg-gray-100'>
                                Switch accounts
                            </div>
                            <div className='flex gap-2 p-3 rounded-md hover:bg-gray-100'>
                                LogOut
                            </div>
                        </div>
                    </div>
                </Popper>
            </div>
        </ClickAwayListener>
    );
};

export default SettingsComponent;
