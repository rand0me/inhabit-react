export const createInHabitRefHook = (client: string, url?: string) => (el: HTMLDivElement) => {
    if (!document) {
        el.innerHTML = `<script src="//inhabit-service.cdn.arkadiumhosted.com/Widget/v1/" async data-ark-client=${client} />`
        return
    }
    if (!(el && client)) {
        return
    }
    if (el.querySelector('script')) {
        el.innerHTML = ''
    }
    const script = document.createElement('script')
    script.src = 'https://inhabit-widget-app.azurewebsites.net/js/ark-main.min.js'
    script.dataset.arkClient = client
    if (url) {
        script.dataset.arkContextualUrl = url
    }
    el.appendChild(script)
}