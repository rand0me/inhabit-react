import * as React from "react";

import { createInHabitRefHook } from "./utils";

export interface IInhabitProps {
    client: string;
    url?: string;
}

export const InHabit = (props: IInhabitProps) =>
    <div ref={ createInHabitRefHook(props.client, props.url) } className="ark--inhabit" />
