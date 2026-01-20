function layoutLoaded(node) {
    const layoutCart = node.querySelector('.layout-cart') || document.querySelector('.cartDrawer');
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
                console.log(mutation.addedNodes[0], 'node')
            }
        }
    })

    observer.observe(layoutCart, {
        childList: true,
        subtree: false,
    })
}



document.addEventListener("DOMContentLoaded", () => {

    const checkout = document.querySelector('#checkout-app')

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === 'childList') {
                layoutLoaded(mutation.addedNodes[0])
            }
        }
    })

    observer.observe(checkout, {
        childList: true,
        subtree: false,
    })
})