import * as React from "react";

function createInHabitRefHook(client: string, url?: string) {
    return (el: HTMLDivElement) => {
        if (!el || el.childNodes) {
            return;
        }

        if (document && document.createElement) {
            const script = document.createElement('script');
            script.async = true;
            script.src = "//inhabit-service.cdn.arkadiumhosted.com/Widget/v1/";
            script.dataset.arkClient = client;
            if (url) {
                script.dataset.arkContextualUrl = url;
            }
            el.appendChild(script);
        } else {
            el.innerHTML = `<script src="//inhabit-service.cdn.arkadiumhosted.com/Widget/v1/" async data-ark-client=${client} />`;
        }
    }
}

export interface IInhabitProps {
    client: string;
    url?: string;
}

export const InHabit = (props: IInhabitProps) =>
    <div ref={createInHabitRefHook(props.client, props.url)} />
