import React, { useEffect, useRef, useState } from 'react'
import CSS from "csstype";
import { useClickAway } from 'react-use';

type At = 'top' | 'right' | 'bottom' | 'left'

interface Props {
    btn: React.ReactNode,
    children: React.ReactNode,
    position?: At,
    align?: At,
    autoClose?: boolean,
    [keys: string]: any
}

export default function Dropdown({
    btn,
    children,
    position = 'bottom',
    align = 'left',
    autoClose = true,
    ...keys
}: Props) {
    const [show, setShow] = useState(false)

    return (
        <div
            {...keys}
            style={{ ...keys['style'], position: 'relative' }}
        >
            <div onClick={!show ? () => setShow(true) : undefined}>{btn}</div>
            {
                show &&
                <DropdownMenu
                    position={position}
                    align={align}
                    onClickAway={() => autoClose && setShow(false)}
                >{children}</DropdownMenu>
            }
        </div>
    )
}

interface DropdownMenuProps {
    children: React.ReactNode,
    position: At,
    align: At,
    onClickAway: () => void
}

function DropdownMenu(props: DropdownMenuProps) {
    const [position, setPosition] = useState(props.position)
    const [align, setAlign] = useState(props.align)
    const [preparing, setPreparing] = useState(true)
    const wrapper = useRef<HTMLDivElement>(null!)

    useClickAway(wrapper, props.onClickAway, ['click'])

    useEffect(() => {
        const parentRect = wrapper.current.offsetParent!.getBoundingClientRect()
        const childrenRect = wrapper.current.getBoundingClientRect()
        setAlign(prevAlign => refinedAlign(parentRect, childrenRect, prevAlign))
        setPosition(prevPosition => refinedPosition(parentRect, childrenRect, prevPosition))
        setPreparing(false)
    }, [])

    const style: CSS.Properties = {
        position: 'absolute',
        [oppositeAt(position)]: '100%',
        [align]: 0,
        zIndex: 999,
        transform: preparing ? 'translate(-9999px, -9999px)' : undefined,
    }

    return (
        <div ref={wrapper} style={style}>{props.children}</div>
    )
}

function oppositeAt(at: At) {
    switch (at) {
        case 'top':
            return 'bottom'
        case 'bottom':
            return 'top'
        case 'right':
            return 'left'
        case 'left':
            return 'right'
    }
}

function refinedAlign(parentRect: DOMRect, chlidrenRect: DOMRect, align: At): At {
    //  1.~~~               ~~~~~                |  2.       ~~~~~                    ~~~~~
    //  ~~┌──────────┐      ~~~~~  ┌──────────┐  |  ┌──────────┐~~      ┌──────────┐  ~~~~~
    //  ~~│ dropdown |      ~~~~~  │ dropdown |  |  │ dropdown |~~      │ dropdown |  ~~~~~
    //  ~~└────┬─────┤  >>  ~~~~~  ├─────┬────┘  |  ├─────┬────┘~~  >>  └────┬─────┤  ~~~~~
    //  ~~~~~  │ btn |      ~~~~~  │ btn |       |  │ btn |  ~~~~~           │ btn |  ~~~~~
    //  ~~~~~  └─────┘      ~~~~~  └─────┘       |  └─────┘  ~~~~~           └─────┘  ~~~~~
    //  ~~~~~               ~~~~~                |           ~~~~~                    ~~~~~
    //                                           |
    //  6.~~~               ~~~~~                |  5.       ~~~~~                    ~~~~~
    //  ~~~~~  ┌─────┐      ~~~~~  ┌─────┐       |  ┌─────┐  ~~~~~           ┌─────┐  ~~~~~
    //  ~~~~~  │ btn |      ~~~~~  │ btn |       |  │ btn |  ~~~~~           │ btn |  ~~~~~
    //  ~~┌────┴─────┤      ~~~~~  ├─────┴────┐  |  ├─────┴────┐~~  >>  ┌────┴─────┤  ~~~~~
    //  ~~│ dropdown |  >>  ~~~~~  │ dropdown |  |  │ dropdown |~~      │ dropdown |  ~~~~~
    //  ~~└──────────┘      ~~~~~  └──────────┘  |  └──────────┘~~      └──────────┘  ~~~~~
    //  ~~~~~               ~~~~~                |           ~~~~~                    ~~~~~
    if (align === 'right' && parentRect.right - chlidrenRect.width < 0) {
        return 'left'
    }
    if (align === 'left' && parentRect.left + chlidrenRect.width > window.innerWidth) {
        return 'right'
    }

    //  3.  ~~~~~~~~~~~~~~~~    ~~~~~~~~~~~~~~~~~~~~~~  |  4.
    //      ~~┌──────────┐~~      ┌─────┬──────────┐    |  ┌─────┬──────────┐              ┌──────────┐
    //      ~~|          |~~      │ btn |          |    |  │ btn |          |              |          |
    //  ┌─────┤ dropdown |~~  >>  └─────┤ dropdown |    |  └─────┤ dropdown |    >>  ┌─────┤ dropdown |
    //  | btn |          |              |          |    |      ~~|          |~~      | btn |          |
    //  └─────┴──────────┘              └──────────┘    |      ~~└──────────┘~~      └─────┴──────────┘
    //                                                  |      ~~~~~~~~~~~~~~~~
    //                                                  |
    //  8.~~~~~~~~~~~~~~        ~~~~~~~~~~~~~~~~~~~~~~  |  7.
    //  ~~┌──────────┐~~          ┌──────────┬─────┐    |    ┌──────────┬─────┐      ┌──────────┐
    //  ~~|          |~~          |          | btn |    |    |          | btn |      |          |
    //    | dropdown ├─────┐  >>  | dropdown ├─────┘    |    | dropdown ├─────┘  >>  | dropdown ├─────┐
    //    |          | btn |      |          |          |  ~~|          |~~          |          | btn |
    //    └──────────┴─────┘      └──────────┘          |  ~~└──────────┘~~          └──────────┴─────┘
    //                                                  |  ~~~~~~~~~~~~~~~~
    if (align === 'bottom' && parentRect.bottom - chlidrenRect.height < 0) {
        return 'top'
    }
    if (align === 'top' && parentRect.top + chlidrenRect.height > window.innerHeight) {
        return 'bottom'
    }

    return align
}

function refinedPosition(parentRect: DOMRect, chlidrenRect: DOMRect, position: At): At {
    //  1.~~~~~~~~~~~~~~     ~~~~~~~~~~~~~~~~  |  5. ┌─────┐               ┌──────────┐
    //  ~~┌──────────┐~~            ┌─────┐    |     │ btn |               │ dropdown |
    //  ~~│ dropdown |~~            │ btn |    |     ├─────┴────┐    >>    ├─────┬────┘
    //    └────┬─────┤    >>   ┌────┴─────┤    |   ~~│ dropdown |~~        │ btn |
    //         │ btn |         │ dropdown |    |   ~~└──────────┘~~        └─────┘
    //         └─────┘         └──────────┘    |   ~~~~~~~~~~~~~~~~      ~~~~~~~~~~~~~~~~
    //                                         |
    //  2.~~~~~~~~~~~~~~     ~~~~~~~~~~~~~~~~  |  6.      ┌─────┐          ┌──────────┐
    //  ~~┌──────────┐~~       ┌─────┐         |          │ btn |          │ dropdown |
    //  ~~│ dropdown |~~       │ btn |         |     ┌────┴─────┤    >>    └────┬─────┤
    //    ├─────┬────┘    >>   ├─────┴────┐    |   ~~│ dropdown |~~             │ btn |
    //    │ btn |              │ dropdown |    |   ~~└──────────┘~~             └─────┘
    //    └─────┘              └──────────┘    |   ~~~~~~~~~~~~~~~~      ~~~~~~~~~~~~~~~~
    if (position === 'top' && parentRect.top - chlidrenRect.height < 0) {
        return 'bottom'
    }
    if (position === 'bottom' && parentRect.bottom + chlidrenRect.height > window.innerHeight) {
        return 'top'
    }

    //  3.             ~~~~~                          |  7.~~~
    //        ┌──────────┐~~      ┌──────────┐        |  ~~┌──────────┬─────┐      ┌─────┬──────────┐
    //        |          |~~      |          |        |  ~~|          | btn |      │ btn |          |
    //  ┌─────┤ dropdown |~~  >>  | dropdown ├─────┐  |  ~~| dropdown ├─────┘  >>  └─────┤ dropdown |
    //  | btn |          |~~      |          | btn |  |  ~~|          |                  |          |
    //  └─────┴──────────┘~~      └──────────┴─────┘  |  ~~└──────────┘                  └──────────┘
    //                 ~~~~~                          |  ~~~~~
    //                                                |
    //  4.             ~~~~~                          |  8.~~~
    //  ┌─────┬──────────┐~~      ┌──────────┬─────┐  |  ~~┌──────────┐                  ┌──────────┐
    //  │ btn |          |~~      |          | btn |  |  ~~|          |                  |          |
    //  └─────┤ dropdown |~~  >>  | dropdown ├─────┘  |  ~~| dropdown ├─────┐  >>  ┌─────┤ dropdown |
    //        |          |~~      |          |        |  ~~|          | btn |      | btn |          |
    //        └──────────┘~~      └──────────┘        |  ~~└──────────┴─────┘      └─────┴──────────┘
    //                 ~~~~~                          |  ~~~~~
    if (position === 'right' && parentRect.right + chlidrenRect.width > window.innerWidth) {
        return 'left'
    }
    if (position === 'left' && parentRect.left - chlidrenRect.width < 0) {
        return 'right'
    }

    return position
}