import Popper from "@mui/base/Popper";
import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";
import NavItems from "./NavItems";
import { ClickAwayListener } from "@mui/material";

type SettingsComponentProps = {
    active: string;
};

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
                            <div className='flex gap-2 py-3 rounded-md px-4 hover:bg-gray-200'>
                                <div>icons</div>
                                <p>settings</p>
                            </div>
                            <div className='flex gap-2 py-3 rounded-md px-4 hover:bg-gray-200'>
                                <div>icons</div>
                                <p>Your Activity</p>
                            </div>
                            <div className='flex gap-2 py-3 rounded-md px-4 hover:bg-gray-200'>
                                <div>icons</div>
                                <p>Saved</p>
                            </div>
                            <div className='flex gap-2 py-3 rounded-md px-4 hover:bg-gray-200'>
                                <div>icons</div>
                                <p>Switch apperances</p>
                            </div>

                            <div className='flex gap-2 py-3 rounded-md px-4 hover:bg-gray-200'>
                                <div>icons</div>
                                <p>Report a problem</p>
                            </div>
                        </div>

                        <div className='bg-white p-2'>
                            <div className='flex gap-2 p-3 rounded-md hover:bg-gray-200'>
                                Switch accounts
                            </div>
                            <div className='flex gap-2 p-3 rounded-md hover:bg-gray-200'>
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
