/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-22 15:42:31
 * @FilePath: \vue3-template\src\types\global.d.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-22 15:52:06
 */
declare namespace Menu {
    interface MenuOptions {
        path: string,
        name: string,
        component?: string | (() => Promise<any>),
        meta: MetaProps,
        children?: MenuOptions[]
    }

    interface MetaProps {
        icon: string,
        title: string,
        isHide: boolean,
        isFull: boolean,
        isAffix: boolean,
        isKeepAlive: boolean
    }
}